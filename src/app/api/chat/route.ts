import { NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';
import { Resend } from 'resend';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
const resend = new Resend(process.env.RESEND_API_KEY!);

const GREETING = "Hi, welcome to Advanced Roofing Team Construction. How can we help you today?";

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
3. Customer's name and best phone number (and email if they offer it)
4. Once you have name + phone: call the send_lead tool immediately — do not wait for more info

RULES:
- Never make up pricing — say "our team will provide an exact quote"
- If asked something you don't know: "I don't have that info handy, but our team can help — want me to connect you?"
- After calling send_lead, tell the customer: "I've sent your info to our team — someone will reach out to you shortly!"
- Respond in the same language the customer uses`;

// Tool definition para Gemini
const sendLeadTool = {
    name: 'send_lead',
    description: 'Call this tool as soon as you have collected the customer name and phone number. Sends the lead info to the Advanced Roofing team.',
    parameters: {
        type: Type.OBJECT,
        properties: {
            first_name:   { type: Type.STRING, description: 'Customer first name' },
            last_name:    { type: Type.STRING, description: 'Customer last name (empty string if not provided)' },
            phone:        { type: Type.STRING, description: 'Customer phone number' },
            email:        { type: Type.STRING, description: 'Customer email (empty string if not provided)' },
            service_type: { type: Type.STRING, description: 'Type of roofing service requested' },
            zip_code:     { type: Type.STRING, description: 'Customer zip code or city' },
        },
        required: ['first_name', 'phone', 'service_type'],
    },
};

// Genera el HTML del email con los datos del lead y la conversación
function buildEmailHtml(leadData: Record<string, string>, conversation: ConversationMessage[]) {
    const conversationHtml = conversation
        .map(msg => {
            const isBot = msg.sender === 'ScorpionAIChat';
            const bg = isBot ? '#f3f4f6' : '#dbeafe';
            const label = isBot ? '🤖 Bot' : '👤 Customer';
            return `
                <tr>
                    <td style="padding:8px 12px;background:${bg};border-radius:6px;margin-bottom:4px;">
                        <strong>${label}</strong><br/>
                        <span style="font-size:13px;">${msg.message}</span><br/>
                        <span style="font-size:11px;color:#6b7280;">${new Date(msg.dateReceived).toLocaleString()}</span>
                    </td>
                </tr>`;
        })
        .join('<tr><td style="height:4px;"></td></tr>');

    return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#1e40af;">🏠 New Roofing Lead</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:6px 0;"><strong>Name:</strong></td><td>${leadData.first_name} ${leadData.last_name ?? ''}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Phone:</strong></td><td>${leadData.phone}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Email:</strong></td><td>${leadData.email || '—'}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Service:</strong></td><td>${leadData.service_type}</td></tr>
            <tr><td style="padding:6px 0;"><strong>Location:</strong></td><td>${leadData.zip_code || '—'}</td></tr>
        </table>
        <h3 style="color:#374151;">💬 Conversation</h3>
        <table style="width:100%;">${conversationHtml}</table>
    </div>`;
}

interface ConversationMessage {
    conversationId?: string;
    eventId?: string;
    tempEventId?: string | null;
    message: string;
    sender: string;
    dateReceived: string;
    contactInfo?: {
        first_name: string | null;
        last_name: string | null;
        phones: string | null;
        emails: string | null;
        addresses: string | null;
    } | null;
}

interface LocalStorageConversation {
    conversationId: string;
    messages: ConversationMessage[];
    expiresOn: string;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message, conversationId, localHistory } = body;
        // localHistory: ConversationMessage[] que viene del localStorage del frontend

        if (!conversationId || !message) {
            return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
        }

        // Formatear historial para Gemini (excluir el greeting inicial)
        const geminiHistory = (localHistory as ConversationMessage[] ?? [])
            .filter(msg => !msg.message.includes('##GREETING##'))
            .map(msg => ({
                role: msg.sender === 'User' ? 'user' : 'model',
                parts: [{ text: msg.message }],
            }));

        // Si el historial empieza con model, quitarlo (Gemini requiere que empiece con user)
        const firstIsBot = geminiHistory.length > 0 && geminiHistory[0].role === 'model';
        const cleanHistory = firstIsBot ? geminiHistory.slice(1) : geminiHistory;

        const systemFinal = `${SYSTEM_PROMPT}\n\nNOTE: You already sent this greeting: "${GREETING}". Do not repeat it.`;

        // Crear chat con tool
        const chat = ai.chats.create({
            model: 'gemini-3.1-flash-lite',
            config: {
                systemInstruction: systemFinal,
                tools: [{ functionDeclarations: [sendLeadTool] }],
            },
            history: cleanHistory,
        });

        const result = await chat.sendMessage({ message });

        // Verificar si la IA quiere llamar al tool send_lead
        const functionCall = result.functionCalls?.[0];

        if (functionCall?.name === 'send_lead') {
            const leadData = functionCall.args as Record<string, string>;

            // Construir conversación completa para el email
            const fullConversation: ConversationMessage[] = [
                ...(localHistory ?? []),
                { message, sender: 'User', dateReceived: new Date().toISOString() }
            ];

            // Enviar email via Resend
            await resend.emails.send({
                from: 'Advanced Roofing Chat <onboarding@resend.dev>',
                to: process.env.NOTIFICATION_EMAIL!,
                subject: `New Lead: ${leadData.first_name} — ${leadData.service_type}`,
                html: buildEmailHtml(leadData, fullConversation),
            });

            // Respuesta confirmatoria al usuario
            const confirmText = "I've sent your info to our team — someone will reach out to you shortly!";

            // Armar el mensaje bot para que el frontend lo guarde en localStorage
            const botMsg = {
                conversationId,
                eventId: crypto.randomUUID(),
                tempEventId: null,
                message: confirmText,
                sender: 'ScorpionAIChat',
                dateReceived: new Date().toISOString(),
                contactInfo: {
                    first_name: leadData.first_name ?? null,
                    last_name: leadData.last_name ?? null,
                    phones: leadData.phone ?? null,
                    emails: leadData.email ?? null,
                    addresses: leadData.zip_code ?? null,
                },
            };

            return NextResponse.json(botMsg);
        }

        // Respuesta normal sin tool call
        const responseText = result.text ?? '';

        const botMsg: ConversationMessage = { // Asegura que el tipo coincida
            conversationId,
            eventId: crypto.randomUUID(),
            tempEventId: null,
            message: responseText, // <-- Nota: en tu interfaz el campo es 'message'
            sender: 'ScorpionAIChat', // <-- Nota: este string debe coincidir con el que busca 'toDisplay'
            dateReceived: new Date().toISOString(),
            contactInfo: null // Es más seguro enviar null si no hay datos
        };

        return NextResponse.json(botMsg);

    } catch (error) {
        console.error("Error en /api/chat:", error);
        return NextResponse.json({
            error: "Error interno",
            details: error instanceof Error ? error.message : "Error desconocido"
        }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ status: 'ok', greeting: GREETING });
}