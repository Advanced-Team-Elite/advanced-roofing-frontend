'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down' | 'center' | 'fade';
    distance?: number;
}

export const ScrollReveal = ({
                                 children,
                                 direction = 'center',
                                 distance = 100
                             }: ScrollRevealProps) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 95%", "start 45%"]
    });

    // MANEJO DE MOVIMIENTO
    // Si la dirección es 'center' o 'fade', el offset será 0, eliminando el movimiento
    const isNoMovement = direction === 'center' || direction === 'fade';

    const xOffset = isNoMovement ? 0 : (direction === 'left' ? -distance : direction === 'right' ? distance : 0);
    const yOffset = isNoMovement ? 0 : (direction === 'up' ? distance : direction === 'down' ? -distance : 0);

    /**
     * Opacidad: de 0.5 a 1.
     * Puedes cambiar el 0.5 a 0 si quieres que desaparezca por completo.
     */
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    const x = useTransform(scrollYProgress, [0, 1], [xOffset, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                x,
                y,
                willChange: "transform, opacity"
            }}
        >
            {children}
        </motion.div>
    );
};