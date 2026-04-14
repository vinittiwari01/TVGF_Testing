"use client";

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import Image from 'next/image';

const Footer = () => {

    return (

        <footer className="bg-glacier-navy text-white pt-24 pb-8 px-6 md:px-12 border-t border-white/5 font-cabin">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                {/* LEFT COLUMN: Logo & Tagline */}
                <div className="md:col-span-3 space-y-6 flex flex-col items-start pr-0 md:pr-10">
                    <Image
                        src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/comapny-dark-logo.webp"
                        alt="The Voice of Glaciers"
                        width={180}
                        height={60}
                        className="brightness-0 invert object-contain"
                    />
                    <p className="text-sm text-glacier-warmGrey/70 leading-relaxed font-light mt-4">
                        Establishing a permanent bridge between Mountain Knowledge and Global Policy.
                    </p>
                </div>

                {/* MIDDLE: 4-Column Link Structure */}
                <div className="md:col-span-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">About</h4>
                        <ul className="space-y-3 text-sm font-light text-glacier-warmGrey/80">
                            <li><Link href="/about/story" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/about/founder" className="hover:text-white transition-colors">Founder Story</Link></li>
                            <li><Link href="/about/team" className="hover:text-white transition-colors">Team & Advisors</Link></li>
                            <li><Link href="/about/partners" className="hover:text-white transition-colors">Partners & Networks</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Programs</h4>
                        <ul className="space-y-3 text-sm font-light text-glacier-warmGrey/80">
                            <li><Link href="/programs/glacier-dialogues" className="hover:text-white transition-colors">Glacier Dialogues</Link></li>
                            <li><Link href="/programs/glacier-guardians-fellowship" className="hover:text-white transition-colors">Fellowship</Link></li>
                            <li><Link href="/programs/glacierx-festival" className="hover:text-white transition-colors">GlacierX Festival</Link></li>
                            <li><Link href="/programs/time-markers" className="hover:text-white transition-colors">Time Markers</Link></li>
                            <li><Link href="/programs/hcsn" className="hover:text-white transition-colors">H.C.S.N Network</Link></li>
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Get Involved</h4>
                        <ul className="space-y-3 text-sm font-light text-glacier-warmGrey/80">
                            <li><Link href="/get-involved" className="hover:text-white transition-colors">Overview</Link></li>
                            <li><Link href="/get-involved/partner" className="hover:text-white transition-colors">Partner With Us</Link></li>
                            <li><Link href="/get-involved/volunteer" className="hover:text-white transition-colors">Volunteer / Intern</Link></li>
                            <li><Link href="/get-involved/glacier-guardian" className="hover:text-white transition-colors">Glacier Guardians</Link></li>
                        </ul>
                    </div>

                    {/* Media */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Media</h4>
                        <ul className="space-y-3 text-sm font-light text-glacier-warmGrey/80">
                            <li><Link href="/media" className="hover:text-white transition-colors">Media Hub</Link></li>
                            <li><Link href="/media/press" className="hover:text-white transition-colors">Press & News</Link></li>
                            <li><Link href="/media/publications" className="hover:text-white transition-colors">Publications</Link></li>
                            <li><Link href="/media/sessions" className="hover:text-white transition-colors">Session Archive</Link></li>
                            <li><Link href="/media/visual" className="hover:text-white transition-colors">Visual Media</Link></li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN: Social, Email, Org Info */}
                <div className="md:col-span-3 space-y-8 flex flex-col md:items-end text-left md:text-right">

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Connect</h4>
                        <div className="flex gap-5 md:justify-end">
                            <a href="https://www.linkedin.com/company/the-voice-of-glaciers-foundation/" className="text-white hover:text-glacier-teal transition-all hover:scale-110"><FaLinkedin className="text-2xl" /></a>
                            <a href="https://substack.com/@thevoiceofglaciers" className="text-white hover:text-glacier-teal transition-all hover:scale-110"><SiSubstack className="text-2xl" /></a>
                            <a href="https://www.instagram.com/thevoiceofglaciers/" className="text-white hover:text-glacier-teal transition-all hover:scale-110"><FaInstagram className="text-2xl" /></a>
                            <a href="https://www.youtube.com/@TheVoiceofGlaciers" className="text-white hover:text-glacier-teal transition-all hover:scale-110"><FaYoutube className="text-2xl" /></a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-glacier-teal font-nohemi">Dedicated Contact</h4>
                        <a href="mailto:thevoiceofglaciers@gmail.com" className="text-white hover:text-glacier-teal transition-colors flex items-center gap-3 md:justify-end font-light text-sm">
                            <FaEnvelope className="text-lg opacity-60" /> <span>thevoiceofglaciers@gmail.com</span>
                        </a>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-white/10 md:w-full md:ml-auto">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-glacier-warmGrey font-nohemi leading-loose">
                            THE VOICE OF GLACIERS FOUNDATION <br />
                            <span className="opacity-60 text-[8px]">Reg: Section 8 Nonprofit | CI: U01100DL2024NPL429811 <br /> Registered Address: C-8/8361, Vasant Kunj, New Delhi, India</span>
                        </p>
                    </div>

                </div>
            </div>

            {/* BOTTOM BAR: Legal & Credit */}
            <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 pb-2">
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-[10px] text-glacier-warmGrey/50 uppercase tracking-[0.2em] font-light">
                    <p>© 2026 TVGF</p>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>

                <div className="text-[9px] sm:text-[10px] text-glacier-warmGrey/40 uppercase tracking-[0.2em] text-center lg:text-right font-light leading-relaxed">
                    Made with purpose for the glaciers <br className="lg:hidden" />
                    <span className="hidden lg:inline mx-3 opacity-30">|</span>
                    Created by <a href="https://www.linkedin.com/in/adarsh-tiwari-a521401a0/" target="_blank" rel="noopener noreferrer" className="text-glacier-teal font-bold hover:underline transition-all">Adarsh Tiwari</a> with love for glaciers
                </div>
            </div>
        </footer>

    );
};

export default Footer;