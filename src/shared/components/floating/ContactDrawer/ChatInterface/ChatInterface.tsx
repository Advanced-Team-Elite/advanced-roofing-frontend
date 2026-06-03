'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './ChatInterface.module.css';

interface Message {
    id: string | number;
    text: string;
    sender: 'user' | 'bot';
    time?: string;
}

const getTime = () => {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, '0');
    const ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
};

export const ChatInterface = () => {
    const [conversationId, setConversationId] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! Welcome to Advanced Roofing Team Construction. How can we help you?",
            sender: 'bot',
            time: getTime(),
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Efecto único para inicializar la conversación y cargar el historial
    useEffect(() => {
        const initChat = async () => {
            let id = localStorage.getItem('chat_conversation_id');

            if (!id) {
                id = crypto.randomUUID();
                localStorage.setItem('chat_conversation_id', id);
            }
            setConversationId(id);

            try {
                const res = await fetch(`/api/chat?conversationId=${id}`);
                if (res.ok) {
                    const data = await res.json();
                    // Si recibimos historial, lo agregamos (respetando el mensaje inicial)
                    if (data && data.length > 0) {
                        setMessages(data);
                    }
                }
            } catch (error) {
                console.error("Error al cargar historial:", error);
            }
        };

        initChat();
    }, []);

    // Scroll automático
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || !conversationId) return;

        const userText = input;
        setInput('');
        setIsTyping(true);

        const userMsg: Message = { id: Date.now(), text: userText, sender: 'user', time: getTime() };
        setMessages(prev => [...prev, userMsg]);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userText,
                    conversationId: conversationId
                }),
            });

            const botMsg = await res.json();
            setIsTyping(false);
            setMessages(prev => [...prev, { ...botMsg, time: getTime() }]);
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