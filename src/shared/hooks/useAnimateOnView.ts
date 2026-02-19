import { useEffect, useRef } from 'react';

export function useAnimateOnView(animationClass: string, threshold = 0.3) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [animationClass, threshold]);

    return ref;
}