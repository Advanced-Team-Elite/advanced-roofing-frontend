import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { prisma } from '@/lib/prisma';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const GREETING = "Hello! Welcome to Advanced Roofing Team Construction. How can we help you?";

const SYSTEM_PROMPT = `You are a live chat assistant for Advanced Roofing Team Construction, a roofing company based in Illinois.

TONE & STYLE:
- Casual, friendly, and concise — like a knowledgeable team member in a live chat, not a formal bot
- Keep responses to 1-3 sentences max unless the customer explicitly asks for more detail
- No bullet points or markdown in responses — plain conversational text only
- Never start with "Hello!", "Hi there!", "Great!", "Sure!", "Absolutely!" more than once per conversation
- Don't repeat info already said in the same conversation
- Always end with a short follow-up question to keep the conversation moving

GREETING BEHAVIOR:
- If the customer just says "hi", "hello", "hey" or any casual greeting with no other context,
  respond with a brief greeting and an open question like "How can I help you today?" or "What brings you in?"
- Never assume what they want — let them tell you first

COMPANY INFO:
- Services: roof inspections, repairs, full replacements, emergency roof repairs, insurance claim support, gutters
- Free estimates available
- Service area: Illinois (if zip code is outside Illinois or unknown, say the team will follow up to confirm coverage)
- Cannot schedule appointments directly through chat — collect customer info for team follow-up

LEAD CAPTURE FLOW (follow this order when a customer wants an estimate or service):
1. Type of service needed (repair, replacement, inspection, emergency, etc.)
2. City or zip code
3. If zip is unknown or outside coverage: offer to have the team follow up
4. Customer's name and best phone number

RULES:
- Never make up pricing — say "our team will provide an exact quote"
- If asked something you don't know: "I don't have that info handy, but our team can help — want me to connect you?"
- After collecting name and phone: confirm you'll pass it along and set expectations ("Someone from our team will reach out shortly")
- Respond in the same language the customer uses`;

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