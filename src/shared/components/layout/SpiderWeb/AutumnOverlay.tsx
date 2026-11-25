"use client";

export function AutumnOverlay() {
    // 5 hojas en desktop, 3 en mobile (mobileHidden: true → se oculta en pantallas ≤ 768px)
    const leaves = [
        { id: 1, img: "/assets/images/shared/overlays/img1.webp", left: "10%", duration: "8s",  delay: "0s", mobileHidden: false },
        { id: 3, img: "/assets/images/shared/overlays/img3.webp", left: "30%", duration: "12s", delay: "4s", mobileHidden: true  },
        { id: 5, img: "/assets/images/shared/overlays/img5.webp", left: "50%", duration: "7s",  delay: "3s", mobileHidden: false },
        { id: 7, img: "/assets/images/shared/overlays/img7.webp", left: "70%", duration: "10s", delay: "5s", mobileHidden: true  },
        { id: 8, img: "/assets/images/shared/overlays/img8.webp", left: "85%", duration: "9s",  delay: "2s", mobileHidden: false },
    ];

    return (
        <>
            <style>{`
                @keyframes fall {
                    0%   { transform: translateY(-10%) rotate(0deg)   translateX(0px);  opacity: 0.9; }
                    25%  { transform: translateY(25vh)  rotate(90deg)  translateX(30px); }
                    50%  { transform: translateY(50vh)  rotate(180deg) translateX(-20px);}
                    75%  { transform: translateY(75vh)  rotate(270deg) translateX(25px); }
                    100% { transform: translateY(110vh) rotate(360deg) translateX(0px);  opacity: 0.6; }
                }
                .autumn-leaf {
                    position: fixed;
                    top: -60px;
                    width: 50px;
                    height: 50px;
                    pointer-events: none;
                    z-index: 9998;
                    animation: fall linear infinite;
                    will-change: transform;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                    filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.15));
                }
                @media (max-width: 768px) {
                    .autumn-leaf-mobile-hidden {
                        display: none;
                    }
                }
            `}</style>

            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className={`autumn-leaf${leaf.mobileHidden ? " autumn-leaf-mobile-hidden" : ""}`}
                    style={{
                        left: leaf.left,
                        animationDuration: leaf.duration,
                        animationDelay: leaf.delay,
                        backgroundImage: `url(${leaf.img})`,
                    }}
                />
            ))}
        </>
    );
}