"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaUsers, FaLeaf, FaGlobe, FaCubes } from 'react-icons/fa';

const CrisisPage = () => {
    // 1. The Cascade Effect (visual flow diagram)
    const actualCascade = [
        "Glacier Loss",
        "Water Insecurity",
        "Food & Agri Crisis",
        "Energy Volatility",
        "Public Health Risk",
        "Economic Disruption"
    ];

    // 2. Four impact quadrants with exact brief statistics
    const impactQuadrants = [
        {
            title: "Economic & Livelihood",
            content: [
                "$30B tourism losses projected by 2050",
                "129M farmers depend on glacier-fed irrigation in HKH",
                "$200B ecosystem service value of glaciers in Qinghai-Tibet Plateau"
            ],
            icon: <FaChartLine />
        },
        {
            title: "Social & Human",
            content: [
                "27M displaced in Dhaka & Kolkata alone (1–3m sea-rise)",
                "Increased regional instability, migration, and conflict zones"
            ],
            icon: <FaUsers />
        },
        {
            title: "Environmental Cascade",
            content: [
                "70% biodiversity loss over the last century",
                "Drastic alteration of flood timing, slope stability, and basin hazards"
            ],
            icon: <FaLeaf />
        },
        {
            title: "Cultural & Knowledge Loss",
            content: [
                "Glaciers anchor identity and spiritual landscapes across HKH communities",
                "Loss erases traditional knowledge systems and causes ecological grief (solastalgia)"
            ],
            icon: <FaGlobe />
        }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* 🏔️ OG Cinematic Hero Section */}
            <section className="relative h-screen flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/story/crisis.png" 
                        alt="Crisis Background" 
                        className="object-cover w-full h-full grayscale brightness-[0.25] scale-105"
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
                            Chapter 01: The Cascade
                        </span>
                        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-nohemi text-white mb-10 leading-[0.8] tracking-tighter drop-shadow-2xl">
                            The Cascading <br />
                            <span className="text-glacier-teal italic text-4xl md:text-8xl">Reality of Ice Loss</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 font-light font-cabin max-w-3xl mx-auto mt-10">
                            Glacier risk is systemic risk. When water infrastructure destabilises, entire systems spiral.
                        </p>

                        <motion.div 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="mt-20 flex flex-col items-center gap-4 text-white/20 cursor-pointer hover:text-glacier-teal transition-colors"
                        >
                            <span className="font-nohemi text-[10px] uppercase tracking-[0.3em]">Explore Impact</span>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                <FaChartLine className="text-lg" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 🏗️ The Cascade Effect Flow */}
            <section className="py-32 px-6 md:px-12 bg-glacier-offwhite relative overflow-hidden">
                {/* Background Decorative Gradient */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-glacier-teal/5 blur-[100px] rounded-full -translate-y-1/4 translate-x-1/3 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-nohemi text-glacier-navy leading-none mb-6">
                            The Cascade <span className="text-glacier-teal italic">Effect</span>
                        </h2>
                        <p className="text-glacier-navy/60 max-w-2xl text-lg md:text-xl font-light mx-auto">
                            A visual sequence of systemic breakdown. As the ice vanishes, the dominoes fall across human and ecological security.
                        </p>
                    </div>

                    {/* The Cascade Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative pb-12 lg:pb-32">
                        
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[30%] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-glacier-teal to-glacier-crimson z-0 opacity-40 blur-[1px]"></div>

                        {actualCascade.map((step, index) => {
                            // Creates a physical "Staircase/Cascade" layout on desktop
                            const cascadeOffset = 
                                index % 3 === 0 ? "lg:translate-y-0" : 
                                index % 3 === 1 ? "lg:translate-y-16" : 
                                "lg:translate-y-32";

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: index * 0.15, 
                                        ease: "easeOut" 
                                    }}
                                    className={`relative bg-white rounded-[2rem] p-8 md:p-10 border border-glacier-navy/5 shadow-xl shadow-glacier-navy/5 group hover:border-glacier-teal/30 hover:shadow-2xl hover:shadow-glacier-teal/10 transition-all duration-500 z-10 ${cascadeOffset}`}
                                >
                                    {/* Premium Watermark Numbering */}
                                    <div className="absolute -bottom-4 -right-2 text-[140px] font-nohemi font-bold text-glacier-navy/[0.03] group-hover:text-glacier-teal/[0.08] transition-colors duration-700 pointer-events-none leading-none select-none">
                                        0{index + 1}
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative z-10 flex flex-col h-full min-h-[160px] justify-between">
                                        <div className="flex justify-between items-start">
                                            {/* Animated Directional Icon */}
                                            <div className="w-12 h-12 rounded-full bg-glacier-offwhite border border-glacier-navy/5 flex items-center justify-center text-glacier-navy/40 group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500 shadow-sm">
                                                <FaArrowRight className="rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                            
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-glacier-crimson/70 group-hover:text-glacier-crimson transition-colors">
                                                Phase {index + 1}
                                            </span>
                                        </div>
                                        
                                        <h3 className="font-nohemi text-2xl md:text-3xl text-glacier-navy font-bold leading-tight mt-12 group-hover:text-glacier-teal transition-colors duration-300">
                                            {step}
                                        </h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 📣 Key Callout */}
            <section className="py-32 px-6 bg-glacier-crimson relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <FaCubes className="text-white/20 text-6xl mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-nohemi text-white leading-[1.1] tracking-tight">
                            &quot;Glacier Risk Is Systemic Risk.<br />
                            <span className="text-white/80 italic font-light">When water infrastructure destabilises, entire systems spiral.</span>&quot;
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* 🔳 Impact Quadrants */}
            <section className="py-32 px-6 md:px-12 bg-glacier-offwhite">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        {impactQuadrants.map((quad, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-glacier-navy/5 border border-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-glacier-teal/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="flex items-start gap-6 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-glacier-offwhite flex items-center justify-center text-glacier-teal text-3xl group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500 shadow-sm">
                                        {quad.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-nohemi text-glacier-navy mb-8 leading-none">{quad.title}</h3>
                                        <ul className="space-y-4">
                                            {quad.content.map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 text-glacier-navy/70 leading-relaxed group-hover:text-glacier-navy transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-glacier-teal mt-2.5 flex-shrink-0"></div>
                                                    <span className="text-sm md:text-base font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation Strip to Next Section */}
            <div className="bg-white py-12 border-t border-glacier-navy/5 px-6">
                <div className="max-w-7xl mx-auto flex justify-end">
                    <a href="/why-glaciers-matter/gap" className="flex items-center gap-4 text-glacier-navy hover:text-glacier-teal transition-colors font-nohemi font-bold tracking-widest text-[10px] uppercase">
                        <span>Next: The Preparedness Gap</span>
                        <FaArrowRight className="text-lg" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CrisisPage;