'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 95%", "start 45%"]
    });

    const isNoMovement = ['center', 'fade', 'zoom'].includes(direction);

    const xOffset = isNoMovement ? 0 : (direction === 'left' ? -distance : direction === 'right' ? distance : 0);
    const yOffset = isNoMovement ? 0 : (direction === 'up' ? distance : direction === 'down' ? -distance : 0);

    const opacity = useTransform(scrollYProgress, [0, 1], [initialOpacity, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [xOffset, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);

    const scaleStart = direction === 'zoom' ? 0.9 : 1;
    const scale = useTransform(scrollYProgress, [0, 1], [scaleStart, 1]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                opacity,
                x,
                y,
                scale,
                willChange: "transform, opacity"
            }}
        >
            {children}
        </motion.div>
    );
};