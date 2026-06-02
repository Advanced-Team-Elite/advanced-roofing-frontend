import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { prisma } from '@/lib/prisma';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const GREETING = "Hello! Welcome to Advanced Roofing Team Construction. How can we help you?";

const SYSTEM_PROMPT = `You are a helpful assistant for Advanced Roofing Team Construction, a professional roofing company.

PERSONALITY:
- Friendly but concise — keep responses short (2-4 sentences max unless the client needs details)
- Never re-introduce yourself or repeat the welcome greeting
- Match the client's language (respond in Spanish if they write in Spanish, English if English)

COMPANY CONTEXT:
- Services: roof installation, repair, replacement, inspections, gutters
- Free estimates available
- Professional and insured team

RULES:
- Do NOT start responses with "Hello!", "Hi!", or any greeting after the first message
- Do NOT say "How can I help you today?" repeatedly — only ask follow-up questions relevant to what they said
- If they ask for a quote, collect: type of roof, property size, and location
- Keep markdown to a minimum — no bold headers in short answers`;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message, conversationId } = body;

        if (!conversationId || !message) {
            return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
        }

        // 1. Verificar/crear conversación — si es nueva, guarda el greeting
        const existingConversation = await prisma.conversation.findUnique({
            where: { id: conversationId }
        });

        if (!existingConversation) {
            await prisma.conversation.create({ data: { id: conversationId } });

            // Guardar el greeting como primer mensaje del bot
            await prisma.message.create({
                data: { conversationId, sender: 'bot', text: GREETING }
            });
        }

        // 2. Cargar historial previo (incluye el greeting ahora)
        const history = await prisma.message.findMany({
            where: { conversationId },
            orderBy: { createdAt: 'asc' }
        });

        // 3. Guardar mensaje del usuario
        await prisma.message.create({
            data: { conversationId, sender: 'user', text: message }
        });

        // 4. Formatear historial para Gemini
        //    Gemini requiere que el historial empiece con "user", así que
        //    si el primer mensaje es el greeting del bot, lo movemos al system prompt
        const geminiHistory = history.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }],
        }));

        // Gemini no acepta que el historial empiece con "model",
        // así que si el primer elemento es el greeting, lo quitamos del historial
        // y lo añadimos al system instruction como contexto
        const firstIsBot = geminiHistory.length > 0 && geminiHistory[0].role === 'model';
        const cleanHistory = firstIsBot ? geminiHistory.slice(1) : geminiHistory;

        const systemWithGreeting = firstIsBot
            ? `${SYSTEM_PROMPT}\n\nNOTE: You already sent this greeting to open the conversation: "${GREETING}". Do not repeat it.`
            : SYSTEM_PROMPT;

        // 5. Crear chat
        const chat = ai.chats.create({
            model: 'gemini-3.1-flash-lite',
            config: { systemInstruction: systemWithGreeting },
            history: cleanHistory,
        });

        // 6. Enviar mensaje
        const result = await chat.sendMessage({ message });
        const responseText = result.text;

        // 7. Guardar respuesta del bot
        const botMsg = await prisma.message.create({
            data: { conversationId, sender: 'bot', text: responseText }
        });

        return NextResponse.json(botMsg);

    } catch (error) {
        console.error("Error en /api/chat:", error);
        return NextResponse.json({
            error: "Fallo en la base de datos o IA",
            details: error instanceof Error ? error.message : "Error desconocido"
        }, { status: 500 });
    }
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const conversationId = searchParams.get('conversationId');

    if (!conversationId) {
        return NextResponse.json({ error: "conversationId requerido" }, { status: 400 });
    }

    const history = await prisma.message.findMany({
        where: { conversationId },
        orderBy: { createdAt: 'asc' }
    });

    // Si no hay historial, devolver el greeting de todas formas
    // para que el frontend siempre muestre el mensaje inicial
    if (history.length === 0) {
        return NextResponse.json([{
            id: 'greeting',
            text: GREETING,
            sender: 'bot',
            createdAt: new Date()
        }]);
    }

    return NextResponse.json(history);
}