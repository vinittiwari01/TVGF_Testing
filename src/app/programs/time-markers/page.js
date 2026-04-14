import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

export default function TimeMarkersPage() {
    return (
        <main className="min-h-screen bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-glacier-navy border-b-4 border-glacier-teal overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glacier-teal/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10">
                    <div className="md:w-full">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-glacier-teal text-white text-[10px] font-bold px-3 py-1.5 tracking-[0.2em] uppercase">
                                Launching 2026
                            </span>
                            <span className="font-cabin text-xs font-bold text-glacier-offwhite/70 uppercase tracking-[0.3em]">
                                Pilot in Uttarakhand
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-white leading-[1.1] mb-6 tracking-tight">
                            Time Markers <br /><span className="text-glacier-lightTeal">& Glacier Memory</span>
                        </h1>
                        <p className="text-lg md:text-xl text-glacier-offwhite/80 max-w-3xl leading-relaxed font-cabin">
                            Permanent installations at historical glacier recession lines (1950–2020) at Gangotri, Dokriani, Pindari, and Milam glaciers. Making decades of ice loss visible to communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* What a Marker is */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">Installation Architecture</span>
                        <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">Inside a Time Marker</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="group bg-glacier-offwhite p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">Engraved Ice-Lines</h3>
                            <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                Physical markings showing exactly how far the glacier extended in each decade from 1950 to 2020.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-glacier-offwhite p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">Digital Stories</h3>
                            <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                QR-linked immersive content providing context on the changing landscape directly to visitors&apos; devices.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-glacier-offwhite p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">Data Visualisation</h3>
                            <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                Accessible climate data translating complex glaciological changes into understandable metrics.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="group bg-glacier-offwhite p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">Audio Archive</h3>
                            <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                A repository of local voices and indigenous knowledge capturing the cultural memory of the ice.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Year 1 Scope */}
            <section className="py-24 px-6 md:px-12 bg-glacier-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glacier-teal/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[10px] text-glacier-lightTeal font-bold tracking-[0.2em] uppercase mb-4 block">Pilot Scope</span>
                            <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-white mb-6">Year 1 Implementation</h2>
                            <p className="text-lg text-glacier-offwhite/80 font-cabin leading-relaxed max-w-xl">
                                The initial rollout focuses on precise execution in Uttarakhand to establish a scalable, community-integrated model.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="border-l-2 border-glacier-teal pl-6">
                                <h4 className="text-4xl font-nohemi font-bold text-glacier-lightTeal mb-2">02</h4>
                                <p className="text-sm font-cabin text-glacier-offwhite">Installations in Pilot Phase</p>
                            </div>
                            <div className="border-l-2 border-glacier-teal pl-6">
                                <h4 className="text-4xl font-nohemi font-bold text-glacier-lightTeal mb-2">100k+</h4>
                                <p className="text-sm font-cabin text-glacier-offwhite">Estimated Annual Engagement</p>
                            </div>
                            <div className="border-l-2 border-glacier-teal pl-6">
                                <h4 className="text-4xl font-nohemi font-bold text-glacier-lightTeal mb-2">10+</h4>
                                <p className="text-sm font-cabin text-glacier-offwhite">Local Fellows Involved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goal */}
            <section className="py-24 px-6 md:px-12 bg-glacier-offwhite">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">Strategic Goal</span>
                    <h2 className="text-3xl md:text-4xl font-nohemi font-bold text-glacier-navy mb-8">
                        The Climate Heritage Trail
                    </h2>
                    <p className="text-lg text-glacier-warmGrey font-cabin leading-relaxed mb-10">
                        The pilot in Uttarakhand is designed as a replicable model. The long-term vision is to create a continuous &quot;Climate Heritage Trail&quot; extending to <strong>Himachal Pradesh, Ladakh, and Sikkim</strong>—transforming the entire region into a living museum of climate action.
                    </p>
                    <div className="h-px w-24 bg-glacier-teal mx-auto opacity-50"></div>
                </div>
            </section>

            {/* Specific Project CTAs */}
            <section className="bg-glacier-navy w-full py-20 px-6 md:px-12 text-center border-t border-glacier-teal/30 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glacier-teal/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-nohemi font-bold text-white mb-6">
                        Help Us Build the Trail.
                    </h2>
                    <p className="text-lg text-glacier-offwhite/80 font-cabin mb-10 max-w-xl">
                        Support the pilot installations in Uttarakhand or follow our progress as we bring the Climate Heritage Trail to life.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                        <Link href="/get-involved/partner" className="bg-glacier-teal text-white px-8 py-4 rounded-sm font-cabin font-bold hover:bg-white hover:text-glacier-navy transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-center shadow-lg shadow-glacier-teal/20">
                            Support This Project
                        </Link>
                        <Link href="https://substack.com/@thevoiceofglaciers" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border border-glacier-lightTeal px-8 py-4 rounded-sm font-cabin font-bold hover:border-white transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-center">
                            Follow the Installations
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}