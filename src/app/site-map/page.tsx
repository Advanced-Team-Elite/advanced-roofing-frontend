// src/app/site-map/page.tsx
import Link from 'next/link';
import { getHierarchy, RouteNode } from '@/shared/utils/routeScanner';
import styles from './Sitemap.module.css';
import {Footer} from "@/shared/components/layout/footer/Footer";

function RenderNode({ node, depth = 0 }: { node: RouteNode; depth?: number }) {
    const icon = depth === 0 ? '—' : '○';

    return (
        <li className={styles.item}>
            <div className={`${styles.row} ${depth > 0 ? styles.rowChild : ''}`}>
                <span className={depth === 0 ? styles.dash : styles.circle}>{icon}</span>
                {node.link === '#' ? (
                    <span className={styles.label}>{node.title}</span>
                ) : (
                    <Link href={node.link} className={styles.link}>
                        {node.title}
                    </Link>
                )}
            </div>

            {node.children && node.children.length > 0 && (
                <ul className={styles.subList}>
                    {node.children.map((child, i) => (
                        <RenderNode key={i} node={child} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function SitemapPage() {
    const routes = getHierarchy();

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Site Map</h1>
                    <ul className={styles.list}>
                        {routes.map((route, i) => (
                            <RenderNode key={i} node={route} depth={0} />
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>

    );
}