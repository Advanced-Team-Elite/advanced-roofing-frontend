import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET(req: NextRequest) {
    const isThumb = req.nextUrl.searchParams.has('thumb');

    const res = await fetch(
        'https://www.spc.noaa.gov/products/activity_loop.gif',
        { next: { revalidate: 300 } }
    );

    if (!res.ok) {
        return new NextResponse('Failed to fetch radar', { status: 502 });
    }

    const buffer = await res.arrayBuffer();

    if (isThumb) {
        try {
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
        } catch {
            // Si sharp falla, sirve el GIF original — mejor que un 500
            return new NextResponse(Buffer.from(buffer), {
                headers: {
                    'Content-Type': 'image/gif',
                    'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
                },
            });
        }
    }

    return new NextResponse(Buffer.from(buffer), {
        headers: {
            'Content-Type': 'image/gif',
            'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
        },
    });
}