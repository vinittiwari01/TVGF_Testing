import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HCSNPage() {
    return (
        <main className="min-h-screen bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* Hero Section*/}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-glacier-navy border-b-4 border-glacier-warmGrey overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glacier-lightTeal/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10">
                    <div className="md:w-full">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-glacier-warmGrey text-white text-[10px] font-bold px-3 py-1.5 tracking-[0.2em] uppercase">
                                In Development
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-nohemi font-bold text-white leading-[1.1] mb-6 tracking-tight">
                            Himalayan Climate <br />Sentinels Network — HCSN
                        </h1>
                        <p className="text-xl md:text-2xl text-glacier-lightTeal font-cabin font-semibold mb-6">
                            Community-powered climate intelligence for the Third Pole.
                        </p>
                        <p className="text-lg md:text-xl text-glacier-offwhite/80 max-w-4xl leading-relaxed font-cabin">
                            This is not a weather station project — it is Himalayan Climate Intelligence Infrastructure. A distributed observation network hosted by trusted mountain institutions including monasteries, high-altitude schools, mountaineering institutes, and community centres across the HKH.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-glacier-offwhite">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">System Architecture</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="group bg-white p-12 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
                            {/* Border */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-teal/50 group-hover:w-2 group-hover:bg-glacier-teal transition-all duration-300"></div>
                            {/* Ambient Glow */}
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-glacier-teal/10 rounded-full blur-3xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block relative z-10">
                                Human Layer
                            </span>
                            <h3 className="text-3xl font-nohemi font-bold text-glacier-navy mb-6 relative z-10">
                                Citizen Cryosphere Observers
                            </h3>
                            <p className="text-lg text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                Local custodians trained to monitor and record climate and glacier data in real time, turning passive communities into active data generators.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white p-12 border border-glacier-light hover:border-glacier-navy shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
                            {/* Border */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-lightTeal group-hover:w-2 group-hover:bg-glacier-navy transition-all duration-300"></div>
                            {/* Ambient Glow */}
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-glacier-lightTeal/20 rounded-full blur-3xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block relative z-10">
                                Data Layer
                            </span>
                            <h3 className="text-3xl font-nohemi font-bold text-glacier-navy mb-6 relative z-10">
                                Open Data Platform
                            </h3>
                            <p className="text-lg text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                Sentinel nodes host AWS units, sensors, and time-lapse cameras feeding directly into a publicly accessible, open-source database.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Year 1 MVP Goals & Key Partners */}
            <section className="py-24 px-6 md:px-12 bg-glacier-navy text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glacier-lightTeal/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-white mb-6">Year 1 MVP Goals</h2>
                        <p className="text-lg text-glacier-offwhite/80 font-cabin leading-relaxed max-w-2xl">
                            Focusing on establishing the hardware, training the first cohort of observers, and launching the digital infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {/* Target */}
                        <div className="border-l-2 border-glacier-lightTeal pl-6">
                            <span className="text-[10px] text-glacier-lightTeal font-bold tracking-[0.2em] uppercase mb-3 block">Target</span>
                            <h4 className="text-4xl font-nohemi font-bold text-white mb-3">3–5</h4>
                            <p className="text-sm font-cabin text-glacier-offwhite/80 uppercase tracking-wider mb-2">Sentinel Stations</p>
                            <p className="text-xs font-cabin text-glacier-lightTeal/60">Across Ladakh, Spiti, Zanskar, Uttarakhand, and Sikkim</p>
                        </div>

                        {/* Training */}
                        <div className="border-l-2 border-glacier-lightTeal pl-6">
                            <span className="text-[10px] text-glacier-lightTeal font-bold tracking-[0.2em] uppercase mb-3 block">Training</span>
                            <h4 className="text-4xl font-nohemi font-bold text-white mb-3">25</h4>
                            <p className="text-sm font-cabin text-glacier-offwhite/80 uppercase tracking-wider mb-2">Observers Trained</p>
                            <p className="text-xs font-cabin text-glacier-lightTeal/60">Local monks, teachers, and students</p>
                        </div>

                        {/* Output */}
                        <div className="border-l-2 border-glacier-lightTeal pl-6">
                            <span className="text-[10px] text-glacier-lightTeal font-bold tracking-[0.2em] uppercase mb-3 block">Output</span>
                            <h4 className="text-4xl font-nohemi font-bold text-white mb-3">1st</h4>
                            <p className="text-sm font-cabin text-glacier-offwhite/80 uppercase tracking-wider mb-2">Report & Portal</p>
                            <p className="text-xs font-cabin text-glacier-lightTeal/60">First Sentinel Climate Report + Open Data Portal Launch</p>
                        </div>

                        {/* Budget */}
                        <div className="border-l-2 border-glacier-teal pl-6">
                            <span className="text-[10px] text-glacier-teal font-bold tracking-[0.2em] uppercase mb-3 block">Estimated Budget</span>
                            <h4 className="text-4xl font-nohemi font-bold text-glacier-teal mb-3">$150K</h4>
                            <p className="text-sm font-cabin text-glacier-offwhite/80 uppercase tracking-wider mb-2">MVP Implementation</p>
                        </div>
                    </div>

                    {/* Institutional Partners specific to HCSN */}
                    <div className="mt-24 border-t border-white/5 pt-16">
                        <div className="text-center mb-12">
                            <span className="text-[10px] text-glacier-teal font-bold tracking-[0.3em] uppercase block">Trusted By</span>
                            <h3 className="text-3xl font-nohemi font-bold text-white mt-4">Key Institutional Partners</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-white/10 transition-colors group">
                                <Image
                                    src="/footer/MoES.png"
                                    alt="Ministry of Earth Sciences"
                                    width={160}
                                    height={48}
                                    className="h-12 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-white/10 transition-colors group">
                                <Image
                                    src="/footer/ICIMOD.png"
                                    alt="ICIMOD"
                                    width={160}
                                    height={48}
                                    className="h-12 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-white/10 transition-colors group">
                                <Image
                                    src="/footer/ndma.png"
                                    alt="NDMA"
                                    width={160}
                                    height={48}
                                    className="h-12 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-white/10 transition-colors group">
                                <span className="font-nohemi text-sm tracking-widest text-white/50 uppercase group-hover:text-white transition-colors">Wadia Institute</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-white/10 transition-colors group">
                                <span className="font-nohemi text-sm tracking-widest text-white/50 uppercase group-hover:text-white transition-colors">IMD</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-white/10 transition-colors group">
                                <span className="font-nohemi text-sm tracking-widest text-white/50 uppercase group-hover:text-white transition-colors">IIT Roorkee</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-white/10 transition-colors group">
                                <span className="font-nohemi text-sm tracking-widest text-white/50 uppercase group-hover:text-white transition-colors">ISRO</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-white/10 transition-colors group">
                                <Image
                                    src="/footer/iitb.png"
                                    alt="IIT B"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className="bg-white w-full py-24 px-6 md:px-12 text-center border-t border-glacier-light relative overflow-hidden">
                <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-nohemi font-bold text-glacier-navy mb-6">
                        Help Build the Infrastructure.
                    </h2>
                    <p className="text-lg text-glacier-warmGrey font-cabin mb-10 max-w-xl">
                        We are actively seeking institutional and funding partners to deploy the MVP sentinel stations across the HKH.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                        <Link href="/get-involved/partner" className="bg-glacier-navy text-white px-8 py-4 rounded-sm font-cabin font-bold hover:bg-glacier-teal transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-center shadow-lg shadow-glacier-navy/10">
                            Partner with the HCSN
                        </Link>
                        <Link href="https://substack.com" target="_blank" rel="noopener noreferrer" className="bg-transparent text-glacier-navy border border-glacier-navy px-8 py-4 rounded-sm font-cabin font-bold hover:bg-glacier-offwhite transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-center">
                            Stay updated
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
