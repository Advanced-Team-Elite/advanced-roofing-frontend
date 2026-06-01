'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './ChatInterface.module.css';

interface Message {
    id: number;
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

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: input,
            sender: 'user',
            time: getTime(),
        };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const botMsg: Message = {
                id: Date.now() + 1,
                text: "Thanks for reaching out! Our team will get back to you shortly regarding your roofing inquiry.",
                sender: 'bot',
                time: getTime(),
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1200);

        inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className={styles.chatContainer}>
            {/* Messages area */}
            <div className={styles.messagesArea} ref={scrollRef}>
                {messages.map(msg => (
                    <div key={msg.id} className={`${styles.messageRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}>
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

                {/* Typing indicator */}
                {isTyping && (
                    <div className={`${styles.messageRow} ${styles.botRow}`}>
                        <div className={`${styles.bubble} ${styles.botBubble} ${styles.typingBubble}`}>
                            <span className={styles.dot} />
                            <span className={styles.dot} />
                            <span className={styles.dot} />
                        </div>
                        <div className={`${styles.meta} ${styles.metaLeft}`}>
                            <div className={styles.avatarSmall} aria-hidden="true">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.73V7h3a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-1a3 3 0 0 1 3-3h3V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zm-3 9a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm-3 4h-.01c-.83 0-1.5.22-2 .55.5.33 1.17.45 2 .45s1.5-.12 2-.45c-.5-.33-1.17-.55-2-.55z"/>
                                </svg>
                            </div>
                            <span className={styles.timeText}>Advanced Roofing Team Construction AI is responding...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
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