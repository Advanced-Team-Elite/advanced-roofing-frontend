// lib/google-solar.ts
// Enfoque: Grid Rasterization + Marching Squares contour tracing
// 1. Proyectamos todos los boundingBoxes de segmentos a una grilla 2D
// 2. Marcamos las celdas ocupadas (pertenecen al techo)
// 3. Trazamos el contorno exterior con esquinas rectas
// Resultado: polígono con forma real del techo, esquinas a 90°, sin convexificación

interface LatLng {
    lat: number;
    lng: number;
}

interface RoofSegment {
    center?: { latitude?: number; longitude?: number };
    pitchDegrees?: number;
    stats?: { areaMeters2?: number };
    boundingBox?: {
        sw?: { latitude?: number; longitude?: number };
        ne?: { latitude?: number; longitude?: number };
    };
}

function isValidCoord(c: LatLng): boolean {
    return isFinite(c.lat) && isFinite(c.lng);
}

// ─── Filtrar cluster principal ─────────────────────────────────────────────────
function filterMainCluster(segments: RoofSegment[], sigma = 1.0): RoofSegment[] {
    const valid = segments.filter(s =>
        s.center?.latitude !== undefined && isFinite(s.center.latitude!) &&
        s.center?.longitude !== undefined && isFinite(s.center.longitude!)
    );
    if (valid.length === 0) return segments;

    const cx = valid.reduce((s, seg) => s + seg.center!.longitude!, 0) / valid.length;
    const cy = valid.reduce((s, seg) => s + seg.center!.latitude!, 0) / valid.length;
    const dists = valid.map(seg => Math.hypot(seg.center!.longitude! - cx, seg.center!.latitude! - cy));
    const mean = dists.reduce((s, d) => s + d, 0) / dists.length;
    const std = Math.sqrt(dists.reduce((s, d) => s + (d - mean) ** 2, 0) / dists.length);

    const filtered = valid.filter((_, i) => dists[i] <= mean + sigma * std);
    console.log(`🔍 Cluster: ${filtered.length}/${segments.length} retenidos`);
    return filtered;
}

// ─── Grid Rasterization + Contour Tracing ─────────────────────────────────────
function buildPolygonFromGrid(segments: RoofSegment[]): LatLng[] {
    // Recoger bboxes válidos
    const boxes: { minLat: number; maxLat: number; minLng: number; maxLng: number }[] = [];
    for (const seg of segments) {
        const sw = seg.boundingBox?.sw;
        const ne = seg.boundingBox?.ne;
        if (!sw?.latitude || !sw?.longitude || !ne?.latitude || !ne?.longitude) continue;
        if (!isFinite(sw.latitude) || !isFinite(ne.latitude)) continue;
        boxes.push({
            minLat: Math.min(sw.latitude, ne.latitude),
            maxLat: Math.max(sw.latitude, ne.latitude),
            minLng: Math.min(sw.longitude, ne.longitude),
            maxLng: Math.max(sw.longitude, ne.longitude),
        });
    }
    if (boxes.length === 0) return [];

    // Bounding box global del cluster
    const globalMinLat = Math.min(...boxes.map(b => b.minLat));
    const globalMaxLat = Math.max(...boxes.map(b => b.maxLat));
    const globalMinLng = Math.min(...boxes.map(b => b.minLng));
    const globalMaxLng = Math.max(...boxes.map(b => b.maxLng));

    const spanLat = globalMaxLat - globalMinLat;
    const spanLng = globalMaxLng - globalMinLng;
    if (spanLat === 0 || spanLng === 0) return [];

    // Resolución de la grilla — celdas de ~1.5 metros
    // 1 grado lat ≈ 111320m, 1 grado lng ≈ 111320 * cos(lat) m
    const metersPerDegLat = 111320;
    const metersPerDegLng = 111320 * Math.cos(((globalMinLat + globalMaxLat) / 2) * Math.PI / 180);
    const cellSizeMeters = 1.5;
    const COLS = Math.ceil(spanLng * metersPerDegLng / cellSizeMeters) + 2;
    const ROWS = Math.ceil(spanLat * metersPerDegLat / cellSizeMeters) + 2;

    // Limitar grilla para no explotar memoria
    const safeCols = Math.min(COLS, 300);
    const safeRows = Math.min(ROWS, 300);

    // Crear grilla vacía
    const grid: boolean[][] = Array.from({ length: safeRows + 2 }, () =>
        new Array(safeCols + 2).fill(false)
    );

    // Rasterizar cada bbox en la grilla
    for (const box of boxes) {
        const c0 = Math.floor((box.minLng - globalMinLng) / spanLng * safeCols);
        const c1 = Math.ceil((box.maxLng - globalMinLng) / spanLng * safeCols);
        const r0 = Math.floor((box.minLat - globalMinLat) / spanLat * safeRows);
        const r1 = Math.ceil((box.maxLat - globalMinLat) / spanLat * safeRows);

        for (let r = Math.max(0, r0); r <= Math.min(safeRows - 1, r1); r++) {
            for (let c = Math.max(0, c0); c <= Math.min(safeCols - 1, c1); c++) {
                grid[r + 1][c + 1] = true; // +1 de padding
            }
        }
    }

    // ── Contour tracing: seguir el borde exterior de las celdas ocupadas ──────
    // Convertimos coordenadas de grilla de vuelta a lat/lng
    function cellToLatLng(row: number, col: number): LatLng {
        return {
            lat: globalMinLat + ((row - 1) / safeRows) * spanLat,
            lng: globalMinLng + ((col - 1) / safeCols) * spanLng,
        };
    }

    // Recopilar todos los vértices de celdas en el borde
    // Una celda está en el borde si está ocupada y tiene al menos un vecino vacío
    const borderVertices: LatLng[] = [];
    for (let r = 1; r <= safeRows; r++) {
        for (let c = 1; c <= safeCols; c++) {
            if (!grid[r][c]) continue;
            const isEdge =
                !grid[r - 1][c] || !grid[r + 1][c] ||
                !grid[r][c - 1] || !grid[r][c + 1];
            if (isEdge) {
                // Agregar las 4 esquinas de esta celda
                borderVertices.push(cellToLatLng(r, c));
                borderVertices.push(cellToLatLng(r, c + 1));
                borderVertices.push(cellToLatLng(r + 1, c));
                borderVertices.push(cellToLatLng(r + 1, c + 1));
            }
        }
    }

    if (borderVertices.length < 3) return [];

    // Deduplicar
    const DEDUP_EPS = 0.000001;
    const unique: LatLng[] = [];
    for (const p of borderVertices) {
        if (!unique.some(u => Math.abs(u.lat - p.lat) < DEDUP_EPS && Math.abs(u.lng - p.lng) < DEDUP_EPS)) {
            unique.push(p);
        }
    }

    // Convex hull sobre los vértices del borde
    // (El grid ya maneja las concavidades al excluir celdas vacías)
    return convexHullFromBorder(unique);
}

// Hull ordenado por ángulo — limpio y sin cruces
function convexHullFromBorder(points: LatLng[]): LatLng[] {
    if (points.length < 3) return points;
    const cx = points.reduce((s, p) => s + p.lng, 0) / points.length;
    const cy = points.reduce((s, p) => s + p.lat, 0) / points.length;

    // Ordenar por ángulo desde el centroide
    const sorted = [...points].sort((a, b) => {
        const angA = Math.atan2(a.lat - cy, a.lng - cx);
        const angB = Math.atan2(b.lat - cy, b.lng - cx);
        return angA - angB;
    });

    // Para cada sector angular de 5°, tomar el punto más lejano
    const NUM_SECTORS = 72;
    const sectors: { p: LatLng; dist: number }[] = new Array(NUM_SECTORS).fill(null).map(() => ({ p: { lat: 0, lng: 0 }, dist: 0 }));

    for (const p of sorted) {
        const dx = p.lng - cx;
        const dy = p.lat - cy;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const idx = Math.floor(((angle + Math.PI) / (2 * Math.PI)) * NUM_SECTORS) % NUM_SECTORS;
        if (dist > sectors[idx].dist) {
            sectors[idx] = { p, dist };
        }
    }

    const result = sectors
        .filter(s => s.dist > 0)
        .map(s => s.p);

    return rdpSimplify(result, 0.000015);
}

// ─── Ramer-Douglas-Peucker ─────────────────────────────────────────────────────
function rdpSimplify(points: LatLng[], epsilon: number): LatLng[] {
    if (points.length <= 3) return points;
    const perp = (p: LatLng, a: LatLng, b: LatLng): number => {
        const dx = b.lng - a.lng;
        const dy = b.lat - a.lat;
        const len = Math.hypot(dx, dy);
        if (len === 0) return Math.hypot(p.lng - a.lng, p.lat - a.lat);
        return Math.abs(dy * p.lng - dx * p.lat + b.lng * a.lat - b.lat * a.lng) / len;
    };
    let maxDist = 0, maxIdx = 0;
    for (let i = 1; i < points.length - 1; i++) {
        const d = perp(points[i], points[0], points[points.length - 1]);
        if (d > maxDist) { maxDist = d; maxIdx = i; }
    }
    if (maxDist > epsilon) {
        const L = rdpSimplify(points.slice(0, maxIdx + 1), epsilon);
        const R = rdpSimplify(points.slice(maxIdx), epsilon);
        return [...L.slice(0, -1), ...R];
    }
    return [points[0], points[points.length - 1]];
}

// ─── Función principal ──────────────────────────────────────────────────────────
export const getRoofData = async (lat: number, lng: number) => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const url = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&required_quality=HIGH&key=${key}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Solar API error: ${res.status}`);
    const data = await res.json();
    // Si la API dice que no encontró edificio, lanzar error inmediatamente
    if (data.error?.code === 404 || data.error?.status === "NOT_FOUND") {
        throw new Error("no_building");
    }

    const allSegments: RoofSegment[] = data.solarPotential?.roofSegmentStats ?? [];

    const areaM2: number = data.solarPotential?.wholeRoofStats?.areaMeters2 ?? 0;
    const areaSqFt = Math.round(areaM2 * 10.7639);

    const dominantSegment = allSegments.reduce<RoofSegment | null>((best, seg) => {
        const area = seg.stats?.areaMeters2 ?? 0;
        return area > (best?.stats?.areaMeters2 ?? 0) ? seg : best;
    }, null);
    const pitchDegrees: number = dominantSegment?.pitchDegrees ?? 15;

    // Filtrar cluster principal (sigma más estricto)
    const mainSegments = filterMainCluster(allSegments, 1.0);

    // Construir polígono desde grilla
    let coords: LatLng[] = buildPolygonFromGrid(mainSegments);
    console.log(`🔍 Grid polygon: ${coords.length} puntos`);
    coords = rdpSimplify(coords, 0.000015);
    console.log(`U0001F50D RDP simplificado: ${coords.length} puntos`);

    // Fallback boundingBox global
    if (coords.length < 3 && data.boundingBox) {
        const box = data.boundingBox;
        coords = [
            { lat: box.ne.latitude, lng: box.ne.longitude },
            { lat: box.ne.latitude, lng: box.sw.longitude },
            { lat: box.sw.latitude, lng: box.sw.longitude },
            { lat: box.sw.latitude, lng: box.ne.longitude },
        ].filter(isValidCoord);
    }

    return { areaSqFt, pitchDegrees, coords };
};