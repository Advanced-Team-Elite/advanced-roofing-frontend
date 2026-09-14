import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET(req: NextRequest) {
    const isThumb = req.nextUrl.searchParams.has('thumb');

    const res = await fetch(
        'https://www.spc.noaa.gov/products/activity_loop.gif',
        { next: { revalidate: 300 } }
    );

    const buffer = await res.arrayBuffer();

    if (isThumb) {
        // Preview: redimensionar a 140x80 y bajar calidad
        const small = await sharp(Buffer.from(buffer), { animated: false })
            .resize(140, 80, { fit: 'cover' })
            .webp({ quality: 20 })
            .toBuffer();

        return new NextResponse(small, {
            headers: {
                'Content-Type': 'image/webp',
                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=300',
            },
        });
    }

    // Full: sirve el GIF original cacheado
    return new NextResponse(Buffer.from(buffer), {
        headers: {
            'Content-Type': 'image/gif',
            'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
        },
    });
}