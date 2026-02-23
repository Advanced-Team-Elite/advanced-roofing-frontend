import fs from 'fs';
import path from 'path';

export interface RouteNode {
    title: string;
    link: string;
    children?: RouteNode[];
}

export function getHierarchy(): RouteNode[] {
    const root = path.join(process.cwd(), 'src', 'app');
    const fallbackRoot = path.join(process.cwd(), 'app');
    const finalRoot = fs.existsSync(root) ? root : fallbackRoot;

    if (!fs.existsSync(finalRoot)) {
        console.error("No se encontró la carpeta app");
        return [];
    }

    return scanRoot(finalRoot);
}

function formatTitle(segment: string): string {
    return segment
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

// Escanea la raíz: Home al mismo nivel que el resto
function scanRoot(dir: string): RouteNode[] {
    const nodes: RouteNode[] = [];

    let items: string[];
    try { items = fs.readdirSync(dir); } catch { return nodes; }

    // Home
    const hasRootPage = items.some(item => /^page\.(tsx|ts|js)$/.test(item));
    if (hasRootPage) {
        nodes.push({ title: 'Home', link: '/' });
    }

    // Resto de carpetas
    for (const item of items) {
        const fullPath = path.join(dir, item);

        let stat;
        try { stat = fs.statSync(fullPath); } catch { continue; }
        if (!stat.isDirectory()) continue;

        // Ignorar api, underscore, dinámicos
        if (item.startsWith('[') || item === 'api' || item.startsWith('_')) continue;

        // Grupos de rutas (nombre) → entrar sin sumar al prefijo
        if (item.startsWith('(') && item.endsWith(')')) {
            nodes.push(...scanRoot(fullPath));
            continue;
        }

        // Carpeta cities → "Areas We Serve"
        if (item === 'cities') {
            const cityNodes = scanDir(fullPath, `/${item}`);
            if (cityNodes.length > 0) {
                nodes.push({ title: 'Areas We Serve', link: '#', children: cityNodes });
            }
            continue;
        }

        nodes.push(...scanDir(fullPath, `/${item}`));
    }

    return nodes;
}

// Escanea una carpeta normal (no raíz)
function scanDir(dir: string, routePrefix: string): RouteNode[] {
    const nodes: RouteNode[] = [];

    let items: string[];
    try { items = fs.readdirSync(dir); } catch { return nodes; }

    const hasPage = items.some(item => /^page\.(tsx|ts|js)$/.test(item));
    const segments = routePrefix.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const title = formatTitle(lastSegment);

    const getChildren = (): RouteNode[] => {
        const children: RouteNode[] = [];
        for (const item of items) {
            const fullPath = path.join(dir, item);

            let stat;
            try { stat = fs.statSync(fullPath); } catch { continue; }
            if (!stat.isDirectory()) continue;

            if (item.startsWith('[') || item === 'api' || item.startsWith('_')) continue;

            // Grupos de rutas dentro de subcarpetas
            if (item.startsWith('(') && item.endsWith(')')) {
                children.push(...scanDir(fullPath, routePrefix));
                continue;
            }

            if (item === 'cities') {
                const cityNodes = scanDir(fullPath, `${routePrefix}/${item}`);
                if (cityNodes.length > 0) {
                    children.push({ title: 'Areas We Serve', link: '#', children: cityNodes });
                }
                continue;
            }

            children.push(...scanDir(fullPath, `${routePrefix}/${item}`));
        }
        return children;
    };

    if (hasPage) {
        const children = getChildren();
        const node: RouteNode = {
            title,
            link: routePrefix,
        };
        if (children.length > 0) node.children = children;
        nodes.push(node);
    } else {
        // Carpeta sin página → transparente
        nodes.push(...getChildren());
    }

    return nodes;
}