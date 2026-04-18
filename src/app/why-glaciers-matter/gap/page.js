"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
    FaLightbulb, FaShieldAlt, FaFileAlt, FaDatabase, FaGraduationCap, FaSeedling, FaArrowRight, FaLink, FaSearch
} from 'react-icons/fa';

const GapPage = () => {
    // Exact 6 Gap Cards from the Brief
    const gapCards = [
        {
            title: "Imagination Gap",
            icon: <FaLightbulb />,
            desc: "Glaciers feel remote, not personal, not urgent to the public consciousness.",
            doodle: "spark"
        },
        {
            title: "Cultural & Knowledge Silos",
            icon: <FaShieldAlt />,
            desc: "Indigenous wisdom, science, art, and community narratives operate in separation.",
            doodle: "rings"
        },
        {
            title: "Policy Exclusion",
            icon: <FaFileAlt />,
            desc: "Cryosphere risk is excluded from most national climate adaptation plans.",
            doodle: "slope"
        },
        {
            title: "Data Inequity",
            icon: <FaDatabase />,
            desc: "Fragmented, inaccessible glacier data. Global South regions are severely underrepresented.",
            doodle: "grid"
        },
        {
            title: "Education Void",
            icon: <FaGraduationCap />,
            desc: "No integrated glacier curriculum in schools or universities.",
            doodle: "peak"
        },
        {
            title: "Reactive Capital",
            icon: <FaSeedling />,
            desc: "Funding activates post-disaster. Preparedness remains chronically underbuilt.",
            doodle: "current"
        }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />
            
            {/* 🏔️ OG Cinematic Hero Section */}
            <section className="relative h-screen flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/story/gap.png" 
                        alt="Gap Background" 
                        className="object-cover w-full h-full grayscale brightness-[0.2] scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/60"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="inline-block text-glacier-teal font-nohemi font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-12 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-xl">
                            Chapter 02: Preparedness
                        </span>
                        <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] font-nohemi text-white mb-10 leading-[0.8] tracking-tighter drop-shadow-2xl">
                            The Orphaned <br />
                            <span className="text-glacier-teal italic text-5xl md:text-[8rem]">Crisis</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 font-light font-cabin max-w-3xl mx-auto mt-10">
                            Preparedness for glacier loss sits between climate mitigation, disaster response, and development.
                        </p>

                        <motion.div 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="mt-20 flex flex-col items-center gap-4 text-white/20 cursor-pointer hover:text-glacier-teal transition-colors"
                        >
                            <span className="font-nohemi text-[10px] uppercase tracking-[0.3em]">Identify Gaps</span>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                <FaSearch className="text-lg" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/*  Analytical Grid: The 6 System Gaps in a 2x3 grid */}
            <section className="py-12 px-6 md:px-12 bg-white flex justify-center text-center relative overflow-hidden">
                <div className="absolute left-8 top-10 text-glacier-teal/10 pointer-events-none hidden md:block">
                    <GapDoodle type="peak" className="w-28 h-28 rotate-[-8deg]" />
                </div>
                <div className="absolute right-6 top-28 text-glacier-crimson/10 pointer-events-none hidden lg:block">
                    <GapDoodle type="spark" className="w-24 h-24 rotate-12" />
                </div>
                <div className="absolute left-1/2 bottom-10 -translate-x-1/2 text-glacier-navy/5 pointer-events-none hidden md:block">
                    <GapDoodle type="rings" className="w-40 h-40" />
                </div>

                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <div className="mb-10 relative">
                        <h2 className="text-2xl md:text-3xl font-nohemi text-glacier-navy tracking-tight leading-none">
                            The System <span className="text-glacier-teal italic">Gap</span>
                        </h2>
                        <div className="mt-5 flex justify-center">
                            <div className="text-glacier-teal/25">
                                <GapDoodle type="slope" className="w-28 h-10" />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {gapCards.map((gap, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-glacier-offwhite p-8 rounded-[2rem] shadow-2xl shadow-glacier-navy/5 border border-white text-left group hover:bg-glacier-navy hover:text-white transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-glacier-teal/10 rounded-full -mr-10 -mt-10 group-hover:scale-[3] transition-transform duration-1000"></div>
                                <div className="absolute right-4 bottom-4 text-glacier-teal/15 group-hover:text-white/10 transition-colors duration-500">
                                    <GapDoodle type={gap.doodle} className="w-16 h-16 md:w-20 md:h-20" />
                                </div>
                                <div className="absolute left-4 top-5 text-glacier-navy/10 group-hover:text-white/10 transition-colors duration-500">
                                    <GapDoodle type="trace" className="w-10 h-10" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-glacier-teal text-xl mb-4 shadow-sm group-hover:bg-glacier-teal group-hover:text-white transition-colors duration-300 border border-black/5">
                                        {gap.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-nohemi text-glacier-navy mb-2 group-hover:text-white transition-colors">{gap.title}</h3>
                                    <div className="mb-3 text-glacier-teal/40 group-hover:text-white/25 transition-colors duration-300">
                                        <GapDoodle type={gap.doodle} className="w-12 h-4" />
                                    </div>
                                    <p className="text-xs font-light font-cabin leading-relaxed group-hover:text-white/80 transition-colors">
                                        {gap.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-40 px-6 bg-glacier-navy text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-glacier-crimson via-transparent to-transparent"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                    <FaLink className="text-glacier-teal text-5xl mb-8" />
                    <h3 className="text-3xl md:text-5xl font-nohemi text-white mb-8 tracking-tight leading-[1.1]">
                        &quot;Preparedness has no clear owner, <br className="hidden md:block"/> and communities pay the price.&quot;
                    </h3>
                    <p className="text-glacier-teal text-xl md:text-2xl font-bold uppercase tracking-[0.2em] font-nohemi italic border-t border-white/10 pt-8 mt-4">
                        &quot;Investing upstream protects life downstream.&quot;
                    </p>
                </div>
            </section>

            {/* Navigation Strip to Prev/Next Section */}
            <div className="bg-white py-12 border-t border-glacier-navy/5 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="/why-glaciers-matter/crisis" className="flex items-center gap-4 text-glacier-navy/40 hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase">
                        <FaArrowRight className="text-lg rotate-180" />
                        <span>Prev: The Crisis</span>
                    </a>
                    <a href="/why-glaciers-matter/decade" className="flex items-center gap-4 text-glacier-navy hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase">
                        <span>Next: The Decisive Decade</span>
                        <FaArrowRight className="text-lg" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GapPage;

function GapDoodle({ type, className = "" }) {
    const base = "fill-none stroke-current stroke-[1.6] stroke-linecap-round stroke-linejoin-round";

    if (type === "spark") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M32 10v10M32 44v10M10 32h10M44 32h10M18 18l7 7M39 39l7 7M46 18l-7 7M25 39l-7 7" />
                <circle className={base} cx="32" cy="32" r="8" />
            </svg>
        );
    }

    if (type === "rings") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <circle className={base} cx="32" cy="32" r="10" />
                <circle className={base} cx="32" cy="32" r="19" />
                <circle className={base} cx="32" cy="32" r="28" />
            </svg>
        );
    }

    if (type === "slope") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M8 46c8-8 14-8 22 0s14 8 26-4" />
                <path className={base} d="M10 34c7-5 12-5 18 0s12 5 26-6" />
                <path className={base} d="M14 22c6-4 9-4 14 0s10 4 22-4" />
            </svg>
        );
    }

    if (type === "grid") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M16 14v36M32 14v36M48 14v36M14 16h36M14 32h36M14 48h36" />
                <circle className={base} cx="32" cy="32" r="4" />
            </svg>
        );
    }

    if (type === "peak") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M10 48 24 28l8 10 8-16 14 26" />
                <path className={base} d="M24 28 20 20M40 22l4-8" />
                <path className={base} d="M18 52h28" />
            </svg>
        );
    }

    if (type === "current") {
        return (
            <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
                <path className={base} d="M8 42c6-6 12-6 18 0s12 6 18 0 12-6 18 0" />
                <path className={base} d="M8 30c6-6 12-6 18 0s12 6 18 0 12-6 18 0" />
                <path className={base} d="M20 16c2 3 5 5 12 5s10-2 12-5" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
            <path className={base} d="M14 42c8-12 16-12 24 0s12 12 12 12" />
            <path className={base} d="M20 24c4-4 8-4 12 0" />
        </svg>
    );
}
