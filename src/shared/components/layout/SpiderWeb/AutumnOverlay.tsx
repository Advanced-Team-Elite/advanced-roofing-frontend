"use client";

export function AutumnOverlay() {
    const leaves = [
        { id: 1, img: "/assets/images/shared/overlays/img1.webp", left: "10%", duration: "8s",  delay: "0s"   },
        { id: 2, img: "/assets/images/shared/overlays/img2.webp",  left: "22%", duration: "10s", delay: "2s"   },
        { id: 3, img: "/assets/images/shared/overlays/img3.webp",  left: "33%", duration: "12s", delay: "4s"   },
        { id: 4, img: "/assets/images/shared/overlays/img4.webp", left: "45%", duration: "9s",  delay: "1s"   },
        { id: 5, img: "/assets/images/shared/overlays/img5.webp",  left: "55%", duration: "7s",  delay: "3s"   },
        { id: 6, img: "/assets/images/shared/overlays/img6.webp",  left: "65%", duration: "11s", delay: "3.5s" },
        { id: 7, img: "/assets/images/shared/overlays/img7.webp", left: "75%", duration: "10s", delay: "5s"   },
        { id: 8, img: "/assets/images/shared/overlays/img8.webp",  left: "85%", duration: "9s",  delay: "2s"   },
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
            `}</style>

            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className="autumn-leaf"
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