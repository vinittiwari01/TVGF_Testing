"use client";

import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TeamPage() {
    useEffect(() => {
        document.title = "Team & Advisors | The Voice of Glacier Foundation";
    }, []);

    const placeholderImg = "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/hero-image.webp";

    const coreTeam = [
        { name: "Anurag Maloo", title: "Founder & CEO", desc: "Mountaineer, survivalist, and innovation ecosystem builder.", img: placeholderImg },
        { name: "Sruthi Karthikeyan", title: "Operations & Strategy", desc: "Ex-Microsoft (9 years), driving institutional scaling.", img: placeholderImg },
        { name: "Shriya Harshe", title: "Climate Adaptation", desc: "Environmental planner specialized in mountain ecosystems.", img: placeholderImg },
        { name: "Deepthi Rao", title: "Fellowship Manager", desc: "Orchestrating community engagement and leadership programs.", img: placeholderImg },
        { name: "Soham Punde", title: "Filmmaker", desc: "Capturing the cinematic narrative of our changing cryosphere.", img: placeholderImg },
        { name: "Harshit Rautela", title: "Storyteller & Content", desc: "Crafting impactful media for glacier awareness.", img: placeholderImg },
        { name: "Divya Nawale", title: "Policy Specialist", desc: "UNEP, ex-ADB, ex-UNFCCC climate policy expert.", img: placeholderImg }
    ];

    const expertPanel = [
        { name: "Dr. Arun Shrestha", institution: "ex-ICIMOD, Nepal", niche: "Sr. Glaciologist", img: placeholderImg },
        { name: "Dr. Ashim Sattar", institution: "IIT Bhubaneswar", niche: "GLOF Expert (Cryosense)", img: placeholderImg },
        { name: "Dr. Farooq Azam", institution: "ICIMOD / IIT Indore", niche: "Cryosphere Specialist", img: placeholderImg },
        { name: "Dr. Anjan Ray", institution: "IIT Delhi & CBRI", niche: "Sr. Scientist", img: placeholderImg },
        { name: "Ronak Sutaria", institution: "Respirer Living Sciences", niche: "Founder & CEO", img: placeholderImg },
        { name: "Dr. Suman Sahai", institution: "Gene Campaign", niche: "Founder Chairperson", img: placeholderImg },
        { name: "Anoop Nautiyal", institution: "SDC Foundation", niche: "Founder", img: placeholderImg },
        { name: "Dr. Vishal Singh", institution: "CEDAR", niche: "Executive Director", img: placeholderImg },
        { name: "Safi Ahsan Rizvi", institution: "Former IPS", niche: "Disaster Risk Analyst", img: placeholderImg },
        { name: "Dr. Rasik Ravindra", institution: "Chairman SaGAA", niche: "Former Director, NCPOR", img: placeholderImg },
        { name: "Dr. Bryan Mark", institution: "Ohio State University", niche: "Byrd Polar Research", img: placeholderImg },
        { name: "Laxman Srikanth", institution: "Deltares, Netherlands", niche: "Advisor, DRM", img: placeholderImg }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* 🏔️ OG Cinematic Hero */}
            <section className="relative h-[60vh] flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/story/decade.png" 
                        alt="Team & Advisors Background" 
                        className="object-cover w-full h-full grayscale brightness-[0.25] scale-105"
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
                            Our Collective IQ
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-nohemi text-white mb-6 leading-none tracking-tighter">
                            Team & Advisors
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 🔳 Team Sections */}
            <section className="py-32 px-6 md:px-12 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Core Team - Larger, Professional Grid */}
                    <div className="mb-48">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy tracking-tight">Core <span className="text-glacier-teal italic">Team</span></h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                            {coreTeam.map((member, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.6 }}
                                    className="flex flex-col group"
                                >
                                    <div className="w-[78%] md:w-[80%] mx-auto block aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-glacier-navy/10 relative">
                                        <img 
                                            src={member.img} 
                                            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                                            alt={member.name} 
                                        />
                                        <div className="absolute inset-0 bg-glacier-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
                                    </div>
                                    <div className="px-4 text-center">
                                        <h3 className="text-3xl font-nohemi text-glacier-navy mb-2">{member.name}</h3>
                                        <div className="w-8 h-[2px] bg-glacier-teal my-4 mx-auto"></div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier-navy/60 mb-4">{member.title}</p>
                                        <p className="text-sm text-glacier-navy/60 font-light leading-relaxed">{member.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Expert Panel - Scaling up images */}
                    <div className="border-t border-glacier-navy/5 pt-32">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-6xl font-nohemi text-glacier-navy tracking-tight">Expert <span className="text-glacier-teal italic">Panel</span></h2>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-14">
                            {expertPanel.map((exp, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="group text-center max-w-[240px] mx-auto w-full"
                                >
                                    <div className="w-[76%] md:w-[80%] mx-auto aspect-[4/5] rounded-[1.75rem] overflow-hidden mb-5 shadow-[0_20px_40px_-15px_rgba(0,128,128,0.1)] relative">
                                        <img 
                                            src={exp.img} 
                                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                                            alt={exp.name} 
                                        />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-nohemi text-glacier-navy mb-2 group-hover:text-glacier-teal transition-colors leading-tight">{exp.name}</h4>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-glacier-navy/50 mb-3">{exp.niche}</p>
                                    <p className="text-[10px] text-glacier-teal font-medium leading-tight uppercase tracking-widest">{exp.institution}</p>
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
