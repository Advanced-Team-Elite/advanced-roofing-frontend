import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export default function SeniorDiscount() {
    return (
        <ScrollReveal direction="center" className="py-16 px-6 md:px-[100px] lg:px-[32px] max-w-[1600] mx-auto">
            {/* Título de sección */}
            <div className="mb-10">
                <h2 className="text-[32px] md:text-[36px] lg:text-[64px] text-prompt font-extrabold text-[#04599C] mb-4">
                    Senior Appreciation Discount
                </h2>
            </div>

            {/* Contenedor principal */}
            <div className="bg-[#04599C] text-white p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-lg">

                {/* Texto y beneficios */}
                <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-bold">
                        Trusted Roofing for a Lifetime Home
                    </h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                        At Advanced Roofing Team, we honor those who have built our community.
                        We offer exclusive benefits and special roofing savings for homeowners
                        aged 65 and older.
                    </p>

                    {/* Lista de beneficios estilo check */}
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center gap-3 font-semibold">
                            <span>✓</span> Extra Savings for Seniors
                        </div>
                        <div className="flex items-center gap-3 font-semibold">
                            <span>✓</span> Free Professional Inspection
                        </div>
                        <div className="flex items-center gap-3 font-semibold">
                            <span>✓</span> Prioritized Scheduling
                        </div>
                        <div className="flex items-center gap-3 font-semibold">
                            <span>✓</span> Expert Consultation
                        </div>
                    </div>
                </div>

                {/* Badge lateral */}
                <div className="bg-white text-[#0B2545] p-6 rounded-lg text-center min-w-[200px]">
                    <span className="text-5xl font-black block">65+</span>
                    <span className="text-sm font-bold uppercase tracking-widest mt-2 block">
                        Age Requirement
                    </span>
                </div>
            </div>
        </ScrollReveal>
    );
}