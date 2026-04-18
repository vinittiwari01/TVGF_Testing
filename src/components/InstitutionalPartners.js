import Image from "next/image";

export const InstitutionalPartners = () => {
    return (
        <div className="bg-glacier-offwhite py-16 border-t border-glacier-navy/5">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Section Tag & Heading */}
                <div className="mb-12">
                    <span className="inline-block px-3 py-1 bg-glacier-navy/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-glacier-navy/40 font-nohemi mb-4">
                        Trusted By
                    </span>
                    <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy tracking-tight">
                        Partners & Institutional Affiliations
                    </h2>
                </div>

                {/* Logo Strip */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                    {/* Available Logos */}
                    <Image src="/footer/ICIMOD.png" alt="ICIMOD" width={180} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/footer/MoES.png" alt="Ministry of Earth Sciences" width={200} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/footer/WMO.png" alt="WMO" width={200} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/footer/unep.png" alt="UNEP" width={200} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/footer/iitb.png" alt="iitb" width={200} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/footer/ndma.png" alt="NDMA" width={200} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/footer/UNDP.webp" alt="UNDP" width={200} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/footer/UNESCO.png" alt="UNESCO" width={200} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/footer/COInt.png" alt="Conservation Int." width={200} height={100} className="object-contain h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="mt-16 inline-flex flex-col items-center">
                    <div className="bg-white px-8 py-4 rounded-2xl shadow-xl shadow-glacier-navy/5 border border-glacier-teal/10 flex items-center gap-4 hover:border-glacier-teal/30 transition-colors">
                        <Image
                            src="/partners/WEF.svg"
                            alt="World Economic Forum"
                            width={64}
                            height={64}
                            className=" h-auto object-contain"
                        />
                        <div className="text-left font-nohemi">
                            <h4 className="text-glacier-navy font-bold text-sm tracking-widest uppercase">Young Global Leader</h4>
                            <p className="text-glacier-navy/50 text-xs mt-1">World Economic Forum Recognition 2025</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
} 