export const ReputationAwards = () => {
    const trustLogos = [
        { src: '/logos/bbb.svg', alt: 'BBB Accredited' },
        { src: '/logos/nextdoor.svg', alt: 'Nextdoor Fave' },
        { src: '/logos/angi-2015.svg', alt: 'Angie Super Service 2015' },
        { src: '/logos/angi-2019.svg', alt: 'Angie Super Service 2019' },
        { src: '/logos/vsi.svg', alt: 'VSI Certified' }, // Quinto elemento para llenar
    ];

    return (
        <section className="bg-slate-50 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12">
                    Top-Rated Professional Contractor
                </h2>

                <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                    {trustLogos.map((logo, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center justify-center transition-transform hover:-translate-y-2 
                ${i === 4 ? 'w-full mt-4' : 'w-[calc(50%-2.5rem)] md:w-auto'}`}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-20 md:h-28 w-auto object-contain drop-shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};