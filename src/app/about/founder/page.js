"use client";

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaPlay, FaGraduationCap, FaCompass, FaAward, FaBuilding, FaQuoteLeft, FaGlobeAmericas } from 'react-icons/fa';
import { X } from "lucide-react";
import Image from 'next/image';

export default function FounderStory() {
    const [activeTalk, setActiveTalk] = useState(null);
    
    useEffect(() => {
        document.title = "Founder Story | The Voice of Glacier Foundation";
    }, []);
    
    useEffect(() => {
        if (!activeTalk) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setActiveTalk(null);
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeTalk]);

    const talks = [
        {
            label: "Featured TEDx Talk",
            title: "Against All Odds: A Mountaineer's Tale of Survival, Hope, and Courage",
            url: "https://youtu.be/0d673rf45mo?si=Y4uTAMJgvOMYBzZ7",
            embedId: "0d673rf45mo",
        },
        {
            label: "Founder Conversation",
            title: "Resilience After Annapurna",
            url: "https://www.youtube.com/watch?v=XerQnwgD4Xc",
            embedId: "XerQnwgD4Xc",
        },
        {
            label: "Founder Feature",
            title: "The Mission Beyond Survival",
            url: "https://youtu.be/K6Isd87VrVI",
            embedId: "K6Isd87VrVI",
        },
        {
            label: "Founder Interview",
            title: "Mountains, Meaning, and Recovery",
            url: "https://youtu.be/rOtiMUsdScA?si=ZpTQ-PEzVph32X9T",
            embedId: "rOtiMUsdScA",
        },
        {
            label: "Mountaineering Podcast",
            title: "Survival on Annapurna 1",
            url: "https://youtu.be/LjygxYJ2nbc?si=P_a5WMawDTpWC2Xy",
            embedId: "LjygxYJ2nbc",
        },
        {
            label: "Everest Mystery Documentary",
            title: "At Death's Door: The Miraculous Rescue",
            url: "https://youtu.be/wFeXfE4xLo0?si=i_vVxWZFe8kyu-ao",
            embedId: "wFeXfE4xLo0",
        },
        {
            label: "CNN-News18 Exclusive",
            title: "The Remarkable Recovery of a Mountaineer",
            url: "https://youtu.be/p6vfa_QC02s?si=PP2hIliZUYVS2TWL",
            embedId: "p6vfa_QC02s",
        },
        {
            label: "Humans of Bombay Feature",
            title: "Stranded in a Glacier for 3 Days",
            url: "https://youtu.be/i5BaGQb-dck",
            embedId: "i5BaGQb-dck",
        }
    ];

    const credentials = [
        {
            label: "WEF Young Global Leader 2025",
            detail: "Selected for pioneering work in climate resilience and global leadership.",
            icon: <FaAward />
        },
        {
            label: "15+ Years in VC & Startups",
            detail: "Driving innovation ecosystem building across APAC.",
            icon: <FaBuilding />
        },
        {
            label: "Professional Background",
            detail: "Previously: Regional Director, Seedstars; Regional Manager, Techstars.",
            icon: <FaGlobeAmericas />
        },
        {
            label: "Fellowships",
            detail: "Royal Society of Arts, ORF Raisina-QUAD, Australia-India Youth Dialogue.",
            icon: <FaGraduationCap />
        },
        {
            label: "Mission Expeditions",
            detail: "Antarctica to Annapurna, Thar to Polar — raising awareness for SDGs.",
            icon: <FaCompass />
        }
    ];

    const photos = [
        { url: "/annapurna.jpg", caption: "Mt. Annapurna Expedition, 2023" },
        { url: "/ladakh.jpg", caption: "High Altitude Monitoring, Ladakh" },
        { url: "/ukfootprint.jpg", caption: "Science Reconnaissance, Uttarakhand" },
        { url: "/sikkim.jpg", caption: "Community Dialogue, Sikkim" }
    ];

    const networks = [
        { name: "Techstars", placeholder: "/partners/techstars.jpg" },
        { name: "Startup Weekend", placeholder: "/partners/startup.jpg" },
        { name: "Global Shapers", placeholder: "/partners/GSC.avif" },
        { name: "2041 Foundation", placeholder: "/partners/2041F.jpg" },
        { name: "SEALA", placeholder: "/partners/SEALA.webp" },
        { name: "Terra.do", placeholder: "/partners/terrado.jpg" },
        { name: "Teach For India", placeholder: "/partners/TFI.jpg" },
        { name: "AIYD", placeholder: "/partners/aiyd.webp" },
        { name: "ORF", placeholder: "/partners/ORF.jpg" }
    ];

    return (
        <div className="min-h-screen bg-white font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* 🏔️ OG Cinematic Hero */}
            <section className="relative h-[60vh] flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/story/hkh.jpg"
                        alt="Founder Expedition Background"
                        fill
                        className="object-cover w-full h-full grayscale brightness-[0.3] scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/60"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-block text-glacier-teal font-nohemi font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-12 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-xl">
                            The Founder
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-nohemi text-white mb-10 leading-[0.8] tracking-tighter drop-shadow-2xl">
                            Anurag Maloo
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 📖 Simplified Single Visionary Section */}
            <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">

                    {/* Consolidated Story Header */}
                    <div className="grid lg:grid-cols-5 gap-16 md:gap-20 mb-32 items-center">
                        <motion.div
                            className="lg:col-span-3 space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-glacier-teal font-nohemi">From Survival to Responsibility</span>
                            <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy tracking-tight leading-[0.9]">
                                The <span className="text-glacier-teal italic">Annapurna</span> <br className="hidden md:block" /> Threshold
                            </h2>
                            <div className="text-lg md:text-xl text-glacier-navy/70 leading-relaxed font-light font-cabin space-y-6">
                                <p>
                                    In 2023, while descending from Mt. Annapurna (8,091m), Anurag Maloo suffered a near-fatal fall into a 6,000m deep icy crevasse.
                                </p>
                                <p>
                                    He spent <strong>72 excruciating hours</strong> trapped in the terrifying darkness of the glacier, without food, water, or oxygen.
                                </p>
                                <p>
                                    Survival became a mandate. His time deep within the ice crystallized a vision: that glaciers are not remote blocks of ice, but the primary infrastructure of life itself.
                                </p>
                            </div>

                            <div className="pt-12 border-t border-glacier-navy/5 mt-8">
                                <div className="w-12 h-1 bg-glacier-teal mb-8"></div>
                                <blockquote className="text-2xl md:text-3xl lg:text-4xl text-glacier-navy font-nohemi italic leading-tight tracking-tight relative pr-4 md:pr-12">
                                    <FaQuoteLeft className="text-glacier-teal/10 text-6xl md:text-8xl absolute -top-8 -left-4 md:-top-12 md:-left-8 z-0 pointer-events-none" />
                                    <span className="relative z-10">"If we can build national financial and digital infrastructure at scale, we can build resilience infrastructure for glaciers."</span>
                                </blockquote>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-2 relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="aspect-[1/1] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[8px] border-glacier-offwhite">
                                <Image
                                    src="https://lh3.googleusercontent.com/pw/AP1GczPDj4Z7yW-YETl5rAyR6EVWoQ9Fdv2Lifm7qzBo95XYQQah7uq-9TP4O3FNhOeC_QnxMMrjCt7wDH1wZZaVo1dnuyrMl_hPJKUfbUyLxoPeDm1m0ZX1n4efrSYuKsCpxEuUWdvtWULcdQgm8Y4Rsv5ZNw=w1366-h912-s-no-gm?authuser=0"
                                    alt="Anurag Maloo - Founder TVGF"
                                    fill
                                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -z-10"></div>
                        </motion.div>
                    </div>

                    {/* Talks, Interviews & Features */}
                    <div className="py-24 border-t border-glacier-navy/5">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div className="max-w-2xl">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-glacier-teal font-nohemi">
                                    Public Voice
                                </span>
                                <h2 className="text-3xl md:text-5xl font-nohemi text-glacier-navy mt-6 tracking-tight">
                                    Talks, Interviews <span className="text-glacier-teal italic">& Features</span>
                                </h2>
                                <p className="text-base md:text-lg text-glacier-navy/60 leading-relaxed font-light mt-6">
                                    A growing archive of keynote talks, interviews, documentaries, and founder conversations tracing the journey from survival to systems change.
                                </p>
                            </div>
                        </div>

                        <div className="founder-carousel relative overflow-hidden pt-2 pb-12">
                            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 md:w-12 bg-gradient-to-r from-white to-transparent"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 md:w-12 bg-gradient-to-l from-white to-transparent"></div>

                            <div className="founder-carousel-track flex w-max gap-4 md:gap-5 px-4">
                                {[...talks, ...talks].map((talk, i) => (
                                    <motion.button
                                        key={`${talk.embedId}-${i}`}
                                        type="button"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: Math.min(i, talks.length - 1) * 0.04, duration: 0.4 }}
                                        onClick={() => setActiveTalk(talk)}
                                        className="group relative w-[16.5rem] md:w-[18.5rem] xl:w-[19.5rem] flex-shrink-0 rounded-2xl border border-gray-100 bg-white p-3 text-left shadow-sm transition-all duration-300 hover:border-gray-200 hover:shadow-[0_28px_45px_-30px_rgba(0,128,128,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier-teal/40"
                                    >
                                        <div className="mb-3 px-1">
                                            <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                                                {talk.label}
                                            </p>
                                            <h3 className="text-sm md:text-[15px] font-medium leading-relaxed text-gray-900 transition-colors group-hover:text-glacier-teal">
                                                {talk.title}
                                            </h3>
                                        </div>

                                        <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-50">
                                            <Image
                                                src={`https://img.youtube.com/vi/${talk.embedId}/hqdefault.jpg`}
                                                alt={talk.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                            />

                                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-transform duration-300 group-hover:scale-105">
                                                    <FaPlay className="ml-1 text-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Clean Credentials List */}
                    <div className="py-24 border-t border-glacier-navy/5">
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-1">
                            {credentials.map((cred, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                    className="p-8 flex flex-col items-start hover:bg-glacier-offwhite transition-colors group cursor-default"
                                >
                                    <div className="text-glacier-teal text-2xl mb-8 group-hover:scale-110 transition-transform">{cred.icon}</div>
                                    <h4 className="text-xs font-nohemi font-bold text-glacier-navy mb-4 leading-tight uppercase tracking-widest">{cred.label}</h4>
                                    <p className="text-[10px] text-glacier-navy/40 font-light leading-relaxed font-cabin uppercase">{cred.detail}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Partners & Networks Content */}
                    <div className="py-24 border-t border-glacier-navy/5">
                        <div className="text-center mb-16">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier-teal font-nohemi px-4 py-1.5 border border-glacier-teal/20 rounded-full mb-6 inline-block">Global Ecosystem</span>
                            <h2 className="text-4xl md:text-5xl font-nohemi text-glacier-navy tracking-tight">Affiliations & <span className="text-glacier-teal italic">Networks</span></h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                            {networks.map((net, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="flex flex-col items-center group cursor-default"
                                >
                                    <div className="w-full aspect-[4/3] bg-white rounded-[1.5rem] border border-glacier-navy/5 flex items-center justify-center shadow-sm shadow-glacier-navy/5 p-4 group-hover:bg-white group-hover:border-glacier-teal/20 group-hover:shadow-xl transition-all duration-500 mb-4 text-glacier-teal/20 group-hover:text-glacier-teal relative overflow-hidden">
                                        <Image
                                            src={net.placeholder}
                                            alt={net.name}
                                            width={140}
                                            height={100}
                                            className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                    <h4 className="text-[10px] md:text-xs font-nohemi text-glacier-navy/70 text-center tracking-widest uppercase font-bold">{net.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Photo Gallery - Expedition Archives */}
                    <div className="py-24 border-t border-glacier-navy/5">
                        <div className="text-center mb-16">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier-teal font-nohemi px-4 py-1.5 border border-glacier-teal/20 rounded-full mb-6 inline-block">Expedition Archives</span>
                            <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy mt-8 tracking-tight italic">Polar & Himalayan <span className="text-glacier-teal">Footprints</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {photos.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="group relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-glacier-navy shadow-2xl"
                                >
                                    <Image src={p.url} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={p.caption} fill />
                                    <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white font-nohemi text-[10px] uppercase tracking-widest">{p.caption}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {activeTalk && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8">
                    <button
                        type="button"
                        aria-label="Close talk modal"
                        className="absolute inset-0 backdrop-blur-sm"
                        onClick={() => setActiveTalk(null)}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-3xl rounded-[1.6rem] border border-white/10 bg-black/90 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)]"
                    >
                        <button
                            type="button"
                            onClick={() => setActiveTalk(null)}
                            className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition-colors hover:bg-white hover:text-glacier-navy"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="relative overflow-hidden rounded-[1.25rem] bg-glacier-navy shadow-inner" style={{ paddingTop: "56.25%" }}>
                            <iframe
                                className="absolute left-0 top-0 h-full w-full border-0"
                                src={`https://www.youtube.com/embed/${activeTalk.embedId}?rel=0&modestbranding=1`}
                                title={activeTalk.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            )}

            <style jsx>{`
                .founder-carousel:hover .founder-carousel-track {
                    animation-play-state: paused;
                }

                .founder-carousel-track {
                    animation: founder-marquee 56s linear infinite;
                }

                @keyframes founder-marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-50% - 0.75rem));
                    }
                }
            `}</style>


            <Footer />
        </div>
    );
}