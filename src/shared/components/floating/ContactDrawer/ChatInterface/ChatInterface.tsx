'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './ChatInterface.module.css';

// ─── Types ───────────────────────────────────────────────────────────────────
interface DisplayMessage {
    id: string | number;
    text: string;
    sender: 'user' | 'bot';
    time?: string;
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

interface StoredConversation {
    conversationId: string;
    messages: ConversationMessage[];
    expiresOn: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────
const GREETING = "Hi, welcome to Advanced Roofing Team Construction. How can we help you today?";
const STORAGE_KEY = 'ConversationInfo';
const EXPIRY_MINUTES = 30;

// ─── Helpers ─────────────────────────────────────────────────────────────────
const getTime = () => {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, '0');
    const ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
};

const msgToTime = (dateReceived: string) => {
    const d = new Date(dateReceived);
    let h = d.getHours();
    const m = d.getMinutes().toString().padStart(2, '0');
    const ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
};

const toDisplay = (msgs: ConversationMessage[]): DisplayMessage[] =>
    msgs
        .filter(msg => {
            // Buscamos si existe texto en cualquiera de los dos campos
            const hasText = (msg?.message != null) || (msg as any)?.text != null;
            if (!hasText) console.warn("Mensaje descartado por filtro:", msg);
            return hasText;
        })
        .map(msg => ({
            id: msg.eventId ?? (msg as any).id ?? crypto.randomUUID(),
            // Normalizamos: tomamos 'message' si existe, si no, tomamos 'text'
            text: (msg.message ?? (msg as any).text ?? "").replace('##GREETING##', '').trim(),
            // Normalizamos el sender:
            // Si sender es 'ScorpionAIChat' o 'bot', es 'bot'
            sender: (msg.sender === 'User' || msg.sender === 'user') ? 'user' : 'bot',
            time: msgToTime(msg.dateReceived ?? (msg as any).createdAt),
        }));

const initConversation = (): StoredConversation => ({
    conversationId: crypto.randomUUID(),
    messages: [{
        message: `${GREETING} ##GREETING##`,
        sender: 'ScorpionAIChat',
        dateReceived: new Date().toISOString(),
    }],
    expiresOn: new Date(Date.now() + EXPIRY_MINUTES * 60 * 1000).toISOString(),
});

const getInitialConversation = (): StoredConversation => {
    if (typeof window === 'undefined') return initConversation(); // SSR guard

    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
        const parsed: StoredConversation = JSON.parse(raw);
        const conv = new Date(parsed.expiresOn) < new Date() ? initConversation() : parsed;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(conv));
        return conv;
    }
    const conv = initConversation();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conv));
    return conv;
};

// ─── Component ───────────────────────────────────────────────────────────────
export const ChatInterface = () => {
    const [conversation, setConversation] = useState<StoredConversation>(getInitialConversation);
    const [messages, setMessages] = useState<DisplayMessage[]>(() => toDisplay(getInitialConversation().messages));
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Scroll automático
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || !conversation) return;

        const userText = input.trim();
        setInput('');
        setIsTyping(true);

        // Mensaje de usuario para localStorage
        const userMsg: ConversationMessage = {
            conversationId: conversation.conversationId,
            eventId: crypto.randomUUID(),
            tempEventId: crypto.randomUUID(),
            message: userText,
            sender: 'User',
            dateReceived: new Date().toISOString(),
            contactInfo: null,
        };

        const convWithUser: StoredConversation = {
            ...conversation,
            messages: [...conversation.messages, userMsg],
        };
        setConversation(convWithUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(convWithUser));
        setMessages(toDisplay(convWithUser.messages));

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userText,
                    conversationId: conversation.conversationId,
                    localHistory: conversation.messages,
                }),
            });

            const botMsg: ConversationMessage = await res.json();
            console.log('botMsg recibido:', botMsg); // ← ver estructura real
            setIsTyping(false);

            const convWithBot: StoredConversation = {
                ...convWithUser,
                messages: [...convWithUser.messages, botMsg],
            };
            console.log("Nueva lista de mensajes:", convWithBot.messages);
            setConversation(convWithBot);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(convWithBot));
            setMessages(toDisplay(convWithBot.messages));

        } catch (error) {
            setIsTyping(false);
            console.error("Error al enviar mensaje:", error);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messagesArea} ref={scrollRef}>
                {messages.map((msg, index) => (
                    <div key={msg.id || index} className={`${styles.messageRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}>
                        <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.userBubble : styles.botBubble}`}>
                            {msg.text}
                        </div>
                        <div className={`${styles.meta} ${msg.sender === 'user' ? styles.metaRight : styles.metaLeft}`}>
                            {msg.sender === 'bot' ? (
                                <>
                                    <div className={styles.avatarSmall} aria-hidden="true">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.73V7h3a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-1a3 3 0 0 1 3-3h3V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zm-3 9a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm-3 4h-.01c-.83 0-1.5.22-2 .55.5.33 1.17.45 2 .45s1.5-.12 2-.45c-.5-.33-1.17-.55-2-.55z"/>
                                        </svg>
                                    </div>
                                    <span className={styles.timeText}>{msg.time}</span>
                                </>
                            ) : (
                                <span className={styles.timeText}>You • {msg.time}</span>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div key="typing-indicator" className={`${styles.messageRow} ${styles.botRow}`}>
                        <div className={`${styles.bubble} ${styles.botBubble} ${styles.typingBubble}`}>
                            <span className={styles.dot} />
                            <span className={styles.dot} />
                            <span className={styles.dot} />
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.footer}>
                <div className={styles.footerBrand}>
                    Chat with Advanced Roofing Team Construction{' '}
                    <span className={styles.aiTag}>AI</span>
                </div>
                <div className={styles.inputRow}>
                    <input
                        ref={inputRef}
                        className={styles.input}
                        type="text"
                        placeholder="Chat with us—just start typing."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className={`${styles.sendBtn} ${input.trim() ? styles.sendBtnActive : ''}`}
                        onClick={handleSend}
                        disabled={!input.trim()}
                        aria-label="Send message"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};