import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Route {
    title: string;
    link: string;
}

function getRoutes(dir: string, routePrefix = ''): Route[] {
    let routes: Route[] = [];

    let files: string[];
    try {
        files = fs.readdirSync(dir);
    } catch {
        return routes;
    }

    for (const file of files) {
        // Ignorar archivos ocultos, carpetas de sistema y api
        if (file.startsWith('.') || file === 'api') continue;

        const filePath = path.join(dir, file);
        let stat;
        try {
            stat = fs.statSync(filePath);
        } catch {
            continue;
        }

        if (stat.isDirectory()) {
            // Los grupos de rutas como (marketing) no se incluyen en la URL
            const isRouteGroup = file.startsWith('(') && file.endsWith(')');
            // Las rutas dinámicas como [slug] se incluyen como :slug en la URL
            const isDynamic = file.startsWith('[') && file.endsWith(']');

            let newPrefix: string;
            if (isRouteGroup) {
                // El grupo no agrega segmento a la URL
                newPrefix = routePrefix;
            } else if (isDynamic) {
                // Rutas dinámicas: las omitimos del search ya que no tienen URL fija
                continue;
            } else {
                newPrefix = `${routePrefix}/${file}`;
            }

            routes = [...routes, ...getRoutes(filePath, newPrefix)];

        } else if (file === 'page.tsx' || file === 'page.js' || file === 'page.ts') {
            const routePath = routePrefix === '' ? '/' : routePrefix;

            // Construir título desde el último segmento del path
            const segments = routePrefix.split('/').filter(Boolean);
            const lastSegment = segments[segments.length - 1];

            let title: string;
            if (!lastSegment) {
                title = 'Home';
            } else {
                // Convertir kebab-case a Title Case
                title = lastSegment
                    .split('-')
                    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
            }

            routes.push({ title, link: routePath });
        }
    }

    return routes;
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q')?.toLowerCase().trim() || '';

        // Buscar la carpeta app en distintas ubicaciones posibles
        const possibleRoots = [
            path.join(process.cwd(), 'app'),
            path.join(process.cwd(), 'src', 'app'),
        ];

        const appDirectory = possibleRoots.find(p => fs.existsSync(p));

        if (!appDirectory) {
            console.error('App directory not found. Tried:', possibleRoots);
            return NextResponse.json([]);
        }

        const allRoutes = getRoutes(appDirectory);

        // Si no hay query devolver todas las rutas
        if (!query) {
            return NextResponse.json(allRoutes);
        }

        // Filtrar por título o por path
        const filtered = allRoutes.filter(route =>
            route.title.toLowerCase().includes(query) ||
            route.link.toLowerCase().includes(query)
        );

        return NextResponse.json(filtered);

    } catch (error) {
        console.error('Search API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}