export const ManufacturingAwards = () => {
    const manufacturers = [
        { src: '/logos/gaf-certified.svg', alt: 'GAF Certified' },
        { src: '/logos/owens-corning.svg', alt: 'Owens Corning Preferred' },
        { src: '/logos/haag-res.svg', alt: 'Haag Residential Inspector' },
        { src: '/logos/haag-comm.svg', alt: 'Haag Commercial Inspector' },
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Texto que llena el espacio vacío */}
                <div className="md:w-1/3 text-center md:text-left">
                    <h3 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">Certified Excellence</h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Built by Industry Leaders</h2>
                    <p className="text-slate-600 leading-relaxed">
                        We partner with the world's most trusted manufacturers to provide warranties and installations that stand the test of time.
                    </p>
                </div>

                {/* Grid de 2x2 para los 4 items */}
                <div className="md:w-2/3 grid grid-cols-2 gap-8 md:gap-16">
                    {manufacturers.map((logo, i) => (
                        <div key={i} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                            <img src={logo.src} alt={logo.alt} className="max-h-24 w-auto object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};