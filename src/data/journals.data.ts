// ─────────────────────────────────────────────────────────────────────────────
//  journals.data.ts
//  FUENTE DE VERDAD — agrega un nuevo objeto a JOURNALS para publicar un tomo.
//
//  Las URLs de Cloudinary se obtienen dinámicamente via API en build time.
//  No necesitas renombrar nada — se ordenan por el número al inicio del nombre.
//  Ejemplo: "1_dmqmqx" → página 1, "2_abc" → página 2, "back_xyz" → back cover
// ─────────────────────────────────────────────────────────────────────────────

export interface JournalPage {
    id: number;
    image: string;
    link?: string;
    linkLabel?: string;
}

export interface Journal {
    slug: string;
    title: string;
    edition: string;
    cover: string;          // se llena en runtime con getJournalBySlug()
    publishedAt: string;
    pageCount: number;
    description?: string;
    pages: JournalPage[];   // se llena en runtime con getJournalBySlug()
    cloudinaryFolder: string; // carpeta en Cloudinary, ej: "journals/january-2025"
}

// ─────────────────────────────────────────────────────────────────────────────
//  TOMOS — solo metadata, sin URLs hardcodeadas
// ─────────────────────────────────────────────────────────────────────────────

export const JOURNALS_META = [
    {
        slug:             "january-2025",
        title:            "January 2025",
        edition:          "Vol. 1",
        publishedAt:      "2025-01-01",
        pageCount:        35,
        description:      "Our inaugural edition. Storm season recap, GAF certification spotlight, and the team behind every roof.",
        cloudinaryFolder: "journals/january-2025",
    },
    // Agrega más tomos aquí — solo metadata, sin URLs
    // {
    //     slug:             "february-2025",
    //     title:            "February 2025",
    //     edition:          "Vol. 2",
    //     publishedAt:      "2025-02-01",
    //     pageCount:        32,
    //     description:      "Winter roofing tips, insurance claim guide, and our Wisconsin expansion.",
    //     cloudinaryFolder: "journals/february-2025",
    // },
];

// ─────────────────────────────────────────────────────────────────────────────
//  fetchJournalPages — llama a Cloudinary API y ordena por número inicial
//  Corre en build time (Server Component / generateStaticParams)
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchJournalPages(cloudinaryFolder: string): Promise<JournalPage[]> {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
    const apiKey    = process.env.CLOUDINARY_API_KEY!;
    const apiSecret = process.env.CLOUDINARY_API_SECRET!;

    // Search API — filtra exactamente por carpeta
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: "Basic " + Buffer.from(`${apiKey}:${apiSecret}`).toString("base64"),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            expression: `folder="${cloudinaryFolder}"`,
            max_results: 100,
            sort_by: [{ public_id: 'asc' }],
        }),
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        const err = await res.text();
        console.error("Cloudinary Search error:", res.status, err);
        return [];
    }

    const data = await res.json();
    console.log("Cloudinary resources encontrados:", data.resources?.length ?? 0);

    const resources: { public_id: string; secure_url: string }[] = data.resources ?? [];

    const backAsset = resources.find(r => {
        const name = r.public_id.split("/").pop() ?? "";
        return name.toLowerCase().startsWith("back");
    });

    const pageAssets = resources.filter(r => {
        const name = r.public_id.split("/").pop() ?? "";
        return !name.toLowerCase().startsWith("back");
    });

    // Ordenar numéricamente por el número al inicio del nombre
    pageAssets.sort((a, b) => {
        const numA = parseInt((a.public_id.split("/").pop() ?? "0").match(/^(\d+)/)?.[1] ?? "0", 10);
        const numB = parseInt((b.public_id.split("/").pop() ?? "0").match(/^(\d+)/)?.[1] ?? "0", 10);
        return numA - numB;
    });

    const pages: JournalPage[] = pageAssets.map((asset, i) => ({
        id:    i + 1,
        image: asset.secure_url,
    }));

    if (backAsset) {
        pages.push({ id: pages.length + 1, image: backAsset.secure_url });
    }

    return pages;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Helpers de acceso (para Server Components y generateStaticParams)
// ─────────────────────────────────────────────────────────────────────────────

export const getAllJournalsMeta = () =>
    [...JOURNALS_META].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

export const getJournalMeta = (slug: string) =>
    JOURNALS_META.find(j => j.slug === slug);

export const getAllSlugs = (): { slug: string }[] =>
    JOURNALS_META.map(j => ({ slug: j.slug }));