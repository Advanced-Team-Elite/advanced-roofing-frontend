import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { text } = await req.json();

        if (!text || typeof text !== 'string') {
            return NextResponse.json({ error: 'No text provided' }, { status: 400 });
        }

        const safeText = text.slice(0, 5000);

        const res = await fetch(
            `https://api.elevenlabs.io/v1/text-to-speech/${process.env.ELEVENLABS_VOICE_ID}`,
            {
                method: 'POST',
                headers: {
                    'xi-api-key': process.env.ELEVENLABS_API_KEY!,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: safeText,
                    model_id: 'eleven_turbo_v2.5',
                    voice_settings: {
                        stability: 0.5,
                        similarity_boost: 0.75,
                    },
                }),
            }
        );

        if (!res.ok) {
            const err = await res.text();
            console.error('ElevenLabs error:', err);
            return NextResponse.json({ error: 'TTS failed' }, { status: 500 });
        }

        const audioBuffer = await res.arrayBuffer();

        return new NextResponse(audioBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'Cache-Control': 'no-store',
            },
        });
    } catch (e) {
        console.error('TTS route error:', e);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}