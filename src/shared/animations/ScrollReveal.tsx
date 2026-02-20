'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down' | 'center' | 'fade' | 'zoom';
    distance?: number;
    initialOpacity?: number;
    className?: string;
}

export const ScrollReveal = ({
                                 children,
                                 direction = 'center',
                                 distance = 100,
                                 initialOpacity = 0,
                                 className,
                             }: ScrollRevealProps) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 1280);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 95%", "start 45%"]
    });

    const isNoMovement = ['center', 'fade', 'zoom'].includes(direction);

    const xOffset = isNoMovement ? 0 : (direction === 'left' ? -distance : direction === 'right' ? distance : 0);
    const yOffset = isNoMovement ? 0 : (direction === 'up' ? distance : direction === 'down' ? -distance : 0);

    const opacityAnim = useTransform(scrollYProgress, [0, 1], [initialOpacity, 1]);
    const xAnim = useTransform(scrollYProgress, [0, 1], [xOffset, 0]);
    const yAnim = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);
    const scaleStart = direction === 'zoom' ? 0.9 : 1;
    const scaleAnim = useTransform(scrollYProgress, [0, 1], [scaleStart, 1]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                opacity: isMobile ? 1 : opacityAnim,
                x: isMobile ? 0 : xAnim,
                y: isMobile ? 0 : yAnim,
                scale: isMobile ? 1 : scaleAnim,
                willChange: isMobile ? "auto" : "transform, opacity"
            }}
        >
            {children}
        </motion.div>
    );
};