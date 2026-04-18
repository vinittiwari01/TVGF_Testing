"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaGavel, FaHammer, FaUniversalAccess, FaGraduationCap, FaArrowRight, FaBalanceScale, FaMicroscope, FaCompass } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
    const flowRef = useRef(null);
    const cursorRef = useRef(null);
    const [isHoveringFramework, setIsHoveringFramework] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.title = "Our Story | The Voice of Glacier Foundation";

        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const framework = [
        { k: "S", t: "Science", d: "Open real-time data & citizen science", icon: <FaMicroscope /> },
        { k: "P", t: "Policy", d: "Embedding protection in governance", icon: <FaGavel /> },
        { k: "A", t: "Action", d: "GlacierX & Glacier Guardians Network", icon: <FaHammer /> },
        { k: "C", t: "Culture", d: "Films, rituals & resacralizing ice", icon: <FaUniversalAccess /> },
        { k: "E", t: "Education", d: "Curriculum for future custodians", icon: <FaGraduationCap /> }
    ];

    const theorySteps = [
        { title: "Movement", img: "/1.jpg", desc: "Building a global constituency for glaciers and mobilizing action from the ground up." },
        { title: "Pilots & Proof", img: "/pilotsnproof.jpg", desc: "Demonstrating actionable, scalable adaptation solutions within highly vulnerable mountain communities." },
        { title: "Catalytic Capital", img: "/3.jpg", desc: "Unlocking structured financing and global investments for deep resilience infrastructure." },
        { title: "Impact & Resilience", img: "/4.jpg", desc: "Securing critical ecosystems, strengthening water security, and increasing adaptive capacity." },
        { title: "Systems Change", img: "/SysChnage.jpg", desc: "A permanent shift in global policy architecture recognizing glaciers as living entities." }
    ];

    return (
        <div className="min-h-screen bg-white font-cabin selection:bg-glacier-teal selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Custom Cursor Follower - Simplified (No text) */}
            <AnimatePresence>
                {isHoveringFramework && (
                    <motion.div
                        ref={cursorRef}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference"
                        style={{
                            left: cursorPos.x - 16,
                            top: cursorPos.y - 16,
                        }}
                    >
                        <div className="w-full h-full bg-glacier-teal rounded-full" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 🏔️ OG Cinematic Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/story/gap.png"
                        alt="Our Mission Background"
                        className="object-cover w-full h-full grayscale brightness-[0.25] scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/60"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-block text-glacier-teal font-nohemi font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-xl">
                            The Movement Origin
                        </span>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-nohemi text-white mb-6 leading-[0.8] tracking-tighter drop-shadow-2xl">
                            Our Story
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 🏗️ Core Identity Section */}
            <section className="py-24 px-4 md:px-12 bg-white relative">
                <div className="max-w-6xl mx-auto">

                    {/* Mission & Vision Redesign - Balanced & Professional */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="bg-glacier-offwhite p-10 md:p-14 rounded-[3.5rem] border border-glacier-navy/5 flex flex-col items-start h-full group hover:bg-glacier-navy hover:text-white transition-all duration-500 shadow-2xl shadow-glacier-navy/5"
                        >
                            <div className="w-10 h-10 rounded-xl bg-glacier-teal flex items-center justify-center text-white text-lg mb-10 shadow-lg shadow-glacier-teal/20 group-hover:bg-white group-hover:text-glacier-navy transition-colors">
                                <FaCompass />
                            </div>
                            <h2 className="text-[10px] font-nohemi text-glacier-teal tracking-[0.4em] uppercase mb-8 opacity-60 group-hover:text-white transition-opacity">The Vision</h2>
                            <p className="text-2xl md:text-3xl text-glacier-navy font-nohemi italic leading-tight group-hover:text-white transition-colors">
                                &quot;A world where protected glaciers secure water security, climate stability, and resilient futures.&quot;
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-glacier-navy p-10 md:p-14 rounded-[3.5rem] text-white flex flex-col items-start h-full shadow-2xl shadow-glacier-navy/20 relative overflow-hidden group hover:bg-glacier-teal transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 backdrop-blur-3xl"></div>
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-glacier-teal text-lg mb-10 border border-white/10 shadow-lg group-hover:bg-white transition-colors">
                                <FaBalanceScale />
                            </div>
                            <h2 className="text-[10px] font-nohemi text-glacier-teal tracking-[0.4em] uppercase mb-8 opacity-60 group-hover:text-white transition-opacity">The Mission</h2>
                            <p className="text-lg md:text-xl text-white font-cabin font-light leading-relaxed group-hover:text-white opacity-90 transition-opacity">
                                To enable mountain communities to adapt and lead in a changing cryosphere by connecting rigorous science, local knowledge, and collective action.
                            </p>
                        </motion.div>
                    </div>

                    {/* SPACE Framework - Balanced Grid */}
                    <div
                        className="mb-32 max-w-7xl mx-auto px-4"
                        onMouseEnter={() => setIsHoveringFramework(true)}
                        onMouseLeave={() => setIsHoveringFramework(false)}
                    >
                        <h2 className="text-2xl md:text-5xl font-nohemi text-glacier-navy text-center mb-16 tracking-tight">
                            The <span className="text-glacier-teal italic">SPACE</span> Framework
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                            {framework.map((f, i) => (
                                <motion.div
                                    key={f.k}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-white p-6 lg:p-8 rounded-[2rem] border border-glacier-navy/5 shadow-2xl shadow-glacier-navy/5 text-center group hover:bg-glacier-navy hover:text-white transition-all duration-500 cursor-none relative overflow-hidden flex flex-col justify-between h-full"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-glacier-teal/10 group-hover:bg-glacier-teal transition-all duration-500"></div>

                                    <div>
                                        <div className="text-glacier-teal text-4xl mb-6 group-hover:text-white transition-colors flex justify-center drop-shadow-sm group-hover:scale-110 duration-500">
                                            {f.icon}
                                        </div>

                                        <h3 className="text-3xl font-nohemi text-glacier-navy mb-2 group-hover:text-white transition-colors">
                                            {f.k}
                                        </h3>

                                        <span className="block text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-glacier-teal mb-4 group-hover:text-white/60 transition-colors">
                                            {f.t}
                                        </span>
                                    </div>

                                    <p className="text-xs md:text-sm font-light leading-relaxed font-cabin text-glacier-navy/70 group-hover:text-white/90 transition-colors mt-2">
                                        {f.d}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Summit-Valley Approach - More Dynamic on Mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 bg-glacier-offwhite rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
                        <div className="order-2 lg:order-1">
                            <span className="inline-block text-glacier-teal font-nohemi font-bold text-[8px] uppercase tracking-widest mb-4">Action model</span>
                            <h2 className="text-3xl md:text-4xl font-nohemi mb-8 leading-tight tracking-tight text-glacier-navy">The <span className="text-glacier-teal italic">Summit-Valley</span> Approach</h2>
                            <p className="text-base md:text-lg text-glacier-navy/60 leading-relaxed font-cabin font-light mb-12">
                                Our dual force action model connects the highest global policy rooms with the heartbeat of mountain communities. Real resilience flows both ways.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="font-nohemi uppercase tracking-[0.4em] text-[10px] text-glacier-teal mb-4 flex items-center gap-2">
                                        <FaArrowRight className="-rotate-45" /> Top-Down
                                    </h4>
                                    <p className="text-[11px] text-glacier-navy/50 font-light leading-relaxed max-w-[220px]">UN, COP, NDCs — Policy, Finance, Legal Frameworks.</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-nohemi uppercase tracking-[0.4em] text-[10px] text-glacier-teal mb-4 flex items-center gap-2">
                                        <FaArrowRight className="rotate-45" /> Bottom-Up
                                    </h4>
                                    <p className="text-[11px] text-glacier-navy/50 font-light leading-relaxed max-w-[220px]">Communities, Youth, Educators — Campaigns, Local Storytelling.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src="/SumitValleyTrail.jpg" alt="Summit Valley Experience" className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100" />
                        </div>
                    </div>

                    {/* Professional Theory of Change - Zig-Zag Scroll Flow */}
                    <div className="mb-32 theory-container border-t border-glacier-navy/5 pt-24">
                        <div className="text-center mb-24">
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-glacier-teal font-nohemi mb-4 inline-block">Evolution Model</span>
                            <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy tracking-tight">Theory of <span className="text-glacier-teal italic">Change</span></h2>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                            {theorySteps.map((step, i) => (
                                <TheoryStepCard key={step.title} step={step} index={i} />
                            ))}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center border-t border-glacier-navy/5 pt-24">
                        <div className="mb-24 px-6">
                            <h2 className="text-xl md:text-3xl font-nohemi text-glacier-navy mb-12 tracking-tight italic opacity-60 leading-relaxed max-w-2xl mx-auto">
                                &quot;Glaciers protected legally and culturally as living entities.&quot;
                            </h2>
                            <div className="inline-flex items-center gap-4 py-3 px-8 bg-glacier-teal text-white rounded-full font-nohemi text-[10px] uppercase tracking-[0.4em] font-bold shadow-xl shadow-glacier-teal/20">
                                <FaBalanceScale className="text-sm" />
                                North Star
                            </div>
                        </div>
                        <div className="text-[10px] text-glacier-navy/20 font-nohemi uppercase tracking-[0.5em] font-medium">
                            Section 8 Company | Registered in India
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function TheoryStepCard({ step, index }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 30%"],
    });

    const clipPathLeft = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    const clipPathRight = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]
    );

    const isReverse = index % 2 !== 0;

    return (
        <div ref={ref} className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 mb-24 md:mb-40 ${isReverse ? 'md:flex-row-reverse' : ''}`}>

            {/* Image unmasking via Framer Motion useScroll */}
            <motion.div
                style={{ clipPath: isReverse ? clipPathRight : clipPathLeft }}
                className="w-full md:w-1/2 aspect-[4/3] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,128,128,0.2)] relative overflow-hidden will-change-transform"
            >
                <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover brightness-95 hover:brightness-100 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 border-[0.5px] border-white/30 rounded-[2.5rem] z-10 pointer-events-none"></div>
            </motion.div>

            {/* Content fading in normally */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 flex flex-col justify-center text-left ${isReverse ? 'md:pl-10' : 'md:pr-10'}`}
            >
                <span className="text-glacier-teal font-nohemi tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">Phase 0{index + 1}</span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-nohemi text-glacier-navy mb-6 tracking-tight leading-none">{step.title}</h3>
                <p className="text-lg md:text-xl text-glacier-navy/60 font-cabin font-light leading-relaxed max-w-md">
                    {step.desc}
                </p>
            </motion.div>

        </div>
    );
}