// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getHierarchy, RouteNode } from '@/shared/utils/routeScanner';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = getHierarchy();
    const baseUrl = 'https://www.advancedteamelite.com';

    const flattenRoutes = (nodes: RouteNode[]): MetadataRoute.Sitemap => {
        let flatList: MetadataRoute.Sitemap = [];

        nodes.forEach((node) => {
            if (node.link !== '#') {
                flatList.push({
                    url: `${baseUrl}${node.link === '/' ? '' : node.link}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: node.link === '/' ? 1 : 0.8,
                });
            }
            if (node.children) {
                flatList = [...flatList, ...flattenRoutes(node.children)];
            }
        });

        return flatList;
    };

    return flattenRoutes(routes);
}