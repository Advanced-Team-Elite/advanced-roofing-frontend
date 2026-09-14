import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const isThumb = req.nextUrl.searchParams.has('thumb');

    let res: Response;
    try {
        res = await fetch(
            'https://www.spc.noaa.gov/products/activity_loop.gif',
            { next: { revalidate: 300 } }
        );
    } catch (e) {
        console.error('[radar] fetch failed:', e);
        return new NextResponse('Fetch failed', { status: 502 });
    }

    if (!res.ok) {
        console.error('[radar] NOAA responded:', res.status);
        return new NextResponse('NOAA error', { status: 502 });
    }

    let buffer: ArrayBuffer;
    try {
        buffer = await res.arrayBuffer();
    } catch (e) {
        console.error('[radar] arrayBuffer failed:', e);
        return new NextResponse('Buffer error', { status: 500 });
    }

    if (isThumb) {
        try {
            const sharp = (await import('sharp')).default;
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
        } catch (e) {
            console.error('[radar] sharp failed:', e);
            // Fallback: GIF original sin procesar
        }
    }

    return new NextResponse(Buffer.from(buffer), {
        headers: {
            'Content-Type': 'image/gif',
            'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
        },
    });
}