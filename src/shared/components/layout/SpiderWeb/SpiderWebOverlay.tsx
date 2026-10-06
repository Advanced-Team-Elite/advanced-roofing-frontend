"use client";

export function SpiderWebOverlay() {
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    // 7 radios entre 0° y 90°
    const angles = [0, 15, 30, 45, 60, 75, 90];
    // Anillos reducidos para recortar el radio exterior
    const rings  = [35, 70, 105, 140];
    const SIZE   = 180;

    const pt = (angleDeg: number, dist: number) => ({
        x: parseFloat((dist * Math.cos(toRad(angleDeg))).toFixed(2)),
        y: parseFloat((dist * Math.sin(toRad(angleDeg))).toFixed(2)),
    });

    // Anclaje reubicado dentro de la telaraña más pequeña
    const anchor = pt(45, 70);

    return (
        <>
            <style>{`
                @keyframes spiderDrop {
                    0%        { height: 0px;   opacity: 0; }
                    5%        { opacity: 1; }
                    40%       { height: 180px; }
                    58%       { height: 195px; }
                    72%       { height: 0px;   opacity: 1; }
                    78%, 100% { height: 0px;   opacity: 0; }
                }
                @keyframes spiderWiggle {
                    0%,100% { transform: rotate(0deg)  scale(1);    }
                    25%     { transform: rotate(-4deg) scale(1.02); }
                    50%     { transform: rotate(3deg)  scale(0.98); }
                    75%     { transform: rotate(-2deg) scale(1.01); }
                }
                .spider-drop   { animation: spiderDrop   14s cubic-bezier(0.45,0.05,0.55,0.95) infinite; will-change: height, opacity; }
                .spider-wiggle { 
                    animation: spiderWiggle 3s ease-in-out infinite;
                    transform-origin: top center;
                }
            `}</style>

            <div style={{
                position: "absolute !important" as any,
                top: "0 !important" as any,
                left: "0 !important" as any,
                width: `${SIZE}px`,
                height: `${SIZE}px`,
                zIndex: "30 !important" as any,
                pointerEvents: "none",
                userSelect: "none",
            }}>

                {/* ── TELARAÑA RECORTADA ──────────────────────────────────── */}
                <svg
                    viewBox={`0 0 ${SIZE} ${SIZE}`}
                    width={SIZE} height={SIZE}
                    fill="none"
                    style={{ position: "absolute", top: 0, left: 0 }}
                >
                    <g stroke="#1a1a1a" opacity="0.5">

                        {/* Hilos radiales */}
                        {angles.map((a) => {
                            const end = pt(a, SIZE);
                            return (
                                <line
                                    key={`ray-${a}`}
                                    x1="0" y1="0"
                                    x2={end.x} y2={end.y}
                                    strokeWidth="0.85"
                                />
                            );
                        })}

                        {/* Anillos */}
                        {rings.map((r, ri) =>
                            angles.map((a, ai) => {
                                if (ai === angles.length - 1) return null;
                                const p1 = pt(a,             r);
                                const p2 = pt(angles[ai + 1], r);
                                return (
                                    <line
                                        key={`seg-${ri}-${ai}`}
                                        x1={p1.x} y1={p1.y}
                                        x2={p2.x} y2={p2.y}
                                        strokeWidth={Math.max(0.4, 0.85 - ri * 0.1)}
                                        opacity={Math.max(0.3, 1 - ri * 0.15)}
                                    />
                                );
                            })
                        )}

                        {/* Gotitas de intersección */}
                        {rings.map((r, ri) =>
                            angles.map((a, ai) => {
                                const p = pt(a, r);
                                return (
                                    <circle
                                        key={`dot-${ri}-${ai}`}
                                        cx={p.x} cy={p.y}
                                        r={ri < 2 ? 1.6 : 1.1}
                                        fill="#1a1a1a"
                                        opacity="0.45"
                                    />
                                );
                            })
                        )}
                    </g>

                    {/* Punto de anclaje de la araña */}
                    <circle cx={anchor.x} cy={anchor.y} r="2.2" fill="#1a1a1a" opacity="0.5"/>
                </svg>

                {/* ── HILO + ARAÑA ────────────────────────────────── */}
                <div
                    className="spider-drop"
                    style={{
                        position: "absolute !important" as any,
                        top: `${anchor.y}px !important` as any,
                        left: `${anchor.x}px !important` as any,
                        transform: "translateX(-50%) !important" as any,
                        display: "flex !important" as any,
                        flexDirection: "column !important" as any,
                        alignItems: "center !important" as any,
                        boxSizing: "border-box !important" as any,
                    }}
                >
                    {/* Hilo con height flexible */}
                    <div style={{
                        width: "1px !important" as any,
                        flex: "1 1 auto !important" as any,
                        minHeight: "0px !important" as any,
                        background: "linear-gradient(to bottom, #1a1a1a, #444) !important" as any,
                        opacity: "0.55 !important" as any,
                    }}/>

                    {/* Araña */}
                    <div
                        className="spider-wiggle"
                        style={{
                            flex: "0 0 auto !important" as any,
                            marginTop: "-16px !important" as any,
                            display: "flex !important" as any,
                            justifyContent: "center !important" as any,
                            lineHeight: "0 !important" as any,
                        }}
                    >
                        <svg viewBox="0 0 60 60" width="36" height="36" fill="none"
                             style={{ overflow: "visible !important" as any }}>

                            {/* Patas izquierdas */}
                            <path d="M21 23 Q13 16 5 10"  stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M21 27 Q11 25 3 23"  stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M21 31 Q12 35 5 40"  stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M22 35 Q15 43 9 50"  stroke="#0d0d0d" strokeWidth="1.3" strokeLinecap="round"/>

                            {/* Patas derechas */}
                            <path d="M39 23 Q47 16 55 10" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M39 27 Q49 25 57 23" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M39 31 Q48 35 55 40" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M38 35 Q45 43 51 50" stroke="#0d0d0d" strokeWidth="1.3" strokeLinecap="round"/>

                            {/* Abdomen — grande */}
                            <ellipse cx="30" cy="39" rx="12" ry="15" fill="#0a0a0a" stroke="#252525" strokeWidth="0.8"/>
                            <ellipse cx="30" cy="35" rx="5.5" ry="4.5" fill="#181818" opacity="0.8"/>
                            <ellipse cx="30" cy="44" rx="4.5" ry="3.5" fill="#181818" opacity="0.6"/>
                            <line x1="30" y1="26" x2="30" y2="52" stroke="#222" strokeWidth="0.7" opacity="0.5"/>

                            {/* Cefalotórax */}
                            <ellipse cx="30" cy="22" rx="10" ry="9" fill="#0f0f0f" stroke="#252525" strokeWidth="0.8"/>

                            {/* 6 ojos rojos */}
                            <circle cx="25" cy="19"   r="1.6" fill="#cc0000"/>
                            <circle cx="30" cy="17.5" r="1.6" fill="#cc0000"/>
                            <circle cx="35" cy="19"   r="1.6" fill="#cc0000"/>
                            <circle cx="25.5" cy="23" r="1.1" fill="#880000"/>
                            <circle cx="34.5" cy="23" r="1.1" fill="#880000"/>
                            {/* Brillo */}
                            <circle cx="25.5" cy="18.4" r="0.45" fill="white" opacity="0.75"/>
                            <circle cx="30.5" cy="17"   r="0.45" fill="white" opacity="0.75"/>
                            <circle cx="35.5" cy="18.4" r="0.45" fill="white" opacity="0.75"/>

                            {/* Quelíceros */}
                            <path d="M27 27 Q26 30 25 32" stroke="#0d0d0d" strokeWidth="1.3" strokeLinecap="round"/>
                            <path d="M33 27 Q34 30 35 32" stroke="#0d0d0d" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}