"use client";

import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaPlay, FaGraduationCap, FaCompass, FaAward, FaBuilding, FaQuoteLeft, FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';

export default function FounderStory() {
    useEffect(() => {
        document.title = "Founder Story | The Voice of Glacier Foundation";
    }, []);

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

    return (
        <div className="min-h-screen bg-white font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* 🏔️ OG Cinematic Hero */}
            <section className="relative h-[60vh] flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/story/hkh.jpg" 
                        alt="Founder Expedition Background" 
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
                                The <span className="text-glacier-teal italic">Annapurna</span> <br className="hidden md:block"/> Threshold
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
                                    <span className="relative z-10">&quot;If we can build national financial and digital infrastructure at scale, we can build resilience infrastructure for glaciers.&quot;</span>
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
                                <img 
                                    src="https://lh3.googleusercontent.com/pw/AP1GczPDj4Z7yW-YETl5rAyR6EVWoQ9Fdv2Lifm7qzBo95XYQQah7uq-9TP4O3FNhOeC_QnxMMrjCt7wDH1wZZaVo1dnuyrMl_hPJKUfbUyLxoPeDm1m0ZX1n4efrSYuKsCpxEuUWdvtWULcdQgm8Y4Rsv5ZNw=w1366-h912-s-no-gm?authuser=0" 
                                    alt="Anurag Maloo - Founder TVGF" 
                                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -z-10"></div>
                        </motion.div>
                    </div>

                    {/* REDUCED SIZE & ACTUAL VIDEO EMBED */}
                    <div className="mb-32">
                        <div className="max-w-4xl mx-auto shadow-2xl shadow-glacier-navy/20 rounded-[2rem] overflow-hidden">
                            <div className="bg-glacier-navy p-4 flex items-center justify-between">
                                <span className="text-[10px] text-white/40 uppercase font-nohemi tracking-widest font-bold">Against All Odds | TEDx Talk</span>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                            {/* Force aspect ratio using inline styles for guaranteed iframe visibility */}
                            <div className="w-full bg-black relative" style={{ paddingTop: '56.25%' }}>
                                <iframe 
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                    src="https://www.youtube.com/embed/0d673rf45mo?rel=0&modestbranding=1" 
                                    title="Against All Odds: A Mountaineer's Tale of Survival, Hope, and Courage" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Clean Credentials List - More Professional */}
                    <div className="mb-32">
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-1 border-t border-glacier-navy/5 pt-20">
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

                    {/* Photo Gallery - Expedition Archives */}
                    <div className="mb-12">
                        <div className="text-center mb-24">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier-teal font-nohemi px-4 py-1.5 border border-glacier-teal/20 rounded-full">Expedition Archives</span>
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
                                    <img src={p.url} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={p.caption} />
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

            <Footer />
        </div>
    );
}