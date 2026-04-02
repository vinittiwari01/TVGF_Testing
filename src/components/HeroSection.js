"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const skyRef = useRef(null);
  const mountainRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(skyRef.current, {
        yPercent: 15,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(mountainRef.current, {
        yPercent: 5,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(foregroundRef.current, {
        yPercent: -5,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-glacier-navy"
    >
      {/* Layer 1 */}
      <div 
        ref={skyRef}
        className="absolute left-0 top-0 w-full z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/home/bg-main.jpg')",
          height: "120%", 
        }}
      />

      {/* Layer 2 */}
      <div 
        ref={mountainRef}
        className="absolute left-0 top-0 w-full z-10 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/home/mid-mountains.png')",
          height: "120%",
        }}
      />

      {/* Layer 3 */}
      <div 
        ref={foregroundRef}
        className="absolute left-0 w-full z-20 bg-cover bg-bottom bg-no-repeat"
        style={{ 
          backgroundImage: "url('/home/front-green.png')",
          height: "120%",
          bottom: "-20%",
        }}
      />

      {/* Color Grading Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-glacier-teal/10 mix-blend-overlay" />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-glacier-navy/90 to-transparent z-30 pointer-events-none" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-white px-6">

        {/* 🧊 Hero Logo */}
        {/* <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Image
            src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/comapny-hero-logo.webp"
            alt="Voice of Glacier Logo"
            width={220}
            height={120}
            className="w-40 md:w-56 lg:w-64 h-auto object-contain"
            priority
          />
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl font-nohemi drop-shadow-lg"
        >
          Protecting Glaciers.
          <br />
          Preparing Communities.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-sm md:text-xl text-white max-w-2xl font-medium font-cabin drop-shadow-md"
        >
          A Section 8 nonprofit building preparedness and institutional capacity in glacier-dependent regions of the Hindu Kush Himalaya.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-wrap md:flex-nowrap gap-4 md:gap-5 justify-center"
        >
          {/* Primary CTA */}
          <Link href="/get-involved/glacier-guardian">
            <Button className="group bg-glacier-navy hover:bg-glacier-navy/95 text-white font-cabin text-base font-medium rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] shadow-md">
              <span className="flex items-center gap-2">
                Join as Glacier Guardian
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>

          {/* Secondary CTA */}
          <Link href="/get-involved/partner">
            <Button className="group bg-white/1 backdrop-blur-sm border-2 border-glacier-teal/80 hover:border-glacier-teal text-white hover:bg-glacier-teal/20 font-cabin text-base font-medium rounded-lg p-6 transition-all duration-300 hover:scale-[1.02]">
              <span className="flex items-center gap-2">
                <Handshake className="w-4 h-4 opacity-80" />
                Partner With Us
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}