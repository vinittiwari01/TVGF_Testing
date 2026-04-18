"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ─── COLOUR TOKENS ────────────────────────────────────────────
const C = {
  navy:        "#042A33",
  teal:        "#2A787C",
  crimson:     "#8B0333",
  offwhite:    "#F2F4F4",
  lightTeal:   "#9CBBF0",
  warmGrey:    "#6B7280",
  tealDim:     "rgba(42,120,124,0.12)",
  tealBorder:  "rgba(42,120,124,0.35)",
  tealGlow:    "rgba(42,120,124,0.25)",
  navyDim:     "rgba(4,42,51,0.10)",
  crimsonDim:  "rgba(139,3,51,0.10)",
  crimsonBorder:"rgba(139,3,51,0.35)",
};

const cards = [
  {
    index: "01",
    title: "Partner With Us",
    subtitle: "Institutional & Funding Partnerships",
    description:
      "Align your institution, foundation, or corporation with the most urgent conservation mission of our era. Co-create impact at the scale glaciers demand.",
    href: "/get-involved/partner-with-us",
    accent: C.teal,
    accentDim: C.tealDim,
    accentBorder: C.tealBorder,
    accentGlow: C.tealGlow,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 36 L24 10 L42 36" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 36 L24 18 L34 36" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeOpacity="0.5" />
        <line x1="6" y1="36" x2="42" y2="36" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    stat: { value: "42+", label: "Partners Worldwide" },
    tags: ["Institutions", "Foundations", "Corporations"],
  },
  {
    index: "02",
    title: "Volunteer & Internships",
    subtitle: "Contribute Your Skills to the Cause",
    description:
      "Whether you map glaciers, craft stories, or build systems — every skill has a place in the cryosphere conservation movement. Join us on the ground or remotely.",
    href: "/get-involved/volunteer-internship",
    accent: C.navy,
    accentDim: C.navyDim,
    accentBorder: "rgba(4,42,51,0.35)",
    accentGlow: "rgba(4,42,51,0.20)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 40 C8 30 40 30 40 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 22 C36 20 42 24 42 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
    stat: { value: "9", label: "Open Positions" },
    tags: ["Field Research", "Media", "Operations"],
  },
  {
    index: "03",
    title: "Join as Glacier Guardian",
    subtitle: "Become Part of the Community",
    description:
      "A glacier guardian is a witness, a voice, and a financial pillar. Become part of a global community protecting Earth's cryosphere — one rupee, one story at a time.",
    href: "/get-involved/join-us-glacier-guardian",
    accent: C.crimson,
    accentDim: C.crimsonDim,
    accentBorder: C.crimsonBorder,
    accentGlow: "rgba(139,3,51,0.20)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6 L28 18 L42 18 L31 26 L35 38 L24 30 L13 38 L17 26 L6 18 L20 18 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    stat: { value: "12,400+", label: "Active Guardians" },
    tags: ["Community", "Monthly Support", "Impact"],
  },
];

const marqueeItems = [
  "Partner With Us", "·", "Volunteer", "·", "Internships", "·",
  "Glacier Guardian", "·", "Contribute", "·", "Conserve", "·",
  "Partner With Us", "·", "Volunteer", "·", "Internships", "·",
  "Glacier Guardian", "·", "Contribute", "·", "Conserve", "·",
];

export default function GetInvolvedPage() {
  const pageRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroDividerRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const footerCtaRef = useRef(null);
  const counterRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };
    window.addEventListener("mousemove", handleMouse);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      const heading = heroHeadingRef.current;
      if (heading) {
        const words = heading.querySelectorAll(".h-word");
        tl.fromTo(
          words,
          { y: "105%", opacity: 0, rotateZ: 2 },
          { y: "0%", opacity: 1, rotateZ: 0, stagger: 0.07, duration: 1.1, ease: "expo.out" }
        );
      }
      tl.fromTo(
        heroSubRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      ).fromTo(
        heroDividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.2, ease: "expo.inOut" },
        "-=0.7"
      );

      if (counterRef.current) {
        gsap.fromTo(
          counterRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 1.1, ease: "power2.out" }
        );
      }

      if (marqueeTrackRef.current) {
        gsap.to(marqueeTrackRef.current, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
      }

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 110, opacity: 0, scale: 0.96 },
          {
            y: 0, opacity: 1, scale: 1, duration: 1.05, ease: "expo.out", delay: i * 0.14,
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
        const idx = card.querySelector(".card-index");
        if (idx) {
          gsap.to(idx, {
            y: -40, ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1.5 },
          });
        }
      });

      if (footerCtaRef.current) {
        gsap.fromTo(
          footerCtaRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: footerCtaRef.current, start: "top 90%" },
          }
        );
      }
    }, pageRef);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const handleCardEnter = (e, i) => {
    setHoveredCard(i);
    gsap.to(e.currentTarget, { y: -10, scale: 1.015, duration: 0.45, ease: "power2.out" });
    const arrow = e.currentTarget.querySelector(".card-arrow");
    const line = e.currentTarget.querySelector(".card-line");
    if (arrow) gsap.to(arrow, { x: 8, opacity: 1, duration: 0.3, ease: "power2.out" });
    if (line) gsap.to(line, { scaleX: 1, duration: 0.4, ease: "expo.out" });
  };

  const handleCardLeave = (e, i) => {
    setHoveredCard(null);
    gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.45, ease: "power2.out" });
    const arrow = e.currentTarget.querySelector(".card-arrow");
    const line = e.currentTarget.querySelector(".card-line");
    if (arrow) gsap.to(arrow, { x: 0, opacity: 0.4, duration: 0.3 });
    if (line) gsap.to(line, { scaleX: 0, duration: 0.3 });
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-x-hidden"
      style={{ background: C.offwhite, fontFamily: "'Cormorant Garamond', serif", color: C.navy }}
    >
      {/* AMBIENT SPOTLIGHT */}
      <div
        ref={spotlightRef}
        className="fixed pointer-events-none z-0 w-[700px] h-[700px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: `radial-gradient(circle, ${C.tealDim} 0%, transparent 65%)`, top: 0, left: 0 }}
      />

      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hatch" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="32" stroke={C.teal} strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hatch)" />
        </svg>
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-20"
          style={{ background: `radial-gradient(ellipse, ${C.tealDim} 0%, transparent 70%)` }}
        />
      </div>

      {/* NAVBAR ACCENT LINE */}
      <div className="relative z-10 w-full h-1" style={{ background: C.teal }} />

      {/* HERO — teal band */}
      <div className="relative z-10" style={{ background: C.teal }}>
        <section className="pt-16 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.5)" }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            </div>
            <span className="text-white/80 text-[11px] tracking-[0.35em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              The Voice of Glaciers Foundation
            </span>
          </div>

          {/* Heading */}
          <div className="overflow-hidden mb-6" style={{ perspective: "800px" }}>
            <h1
              ref={heroHeadingRef}
              className="font-light leading-[0.88] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(4rem,11vw,10rem)" }}
            >
              {["Get", " "].map((w, i) => (
                <span
                  key={i}
                  className="h-word inline-block"
                  style={{ display: "inline-block", opacity: 0, marginRight: w === " " ? "0.25em" : "0" }}
                >
                  {w !== " " ? w : ""}
                </span>
              ))}
              <br />
              <span
                className="h-word inline-block italic"
                style={{ display: "inline-block", opacity: 0, color: C.lightTeal }}
              >
                Involved
              </span>
            </h1>
          </div>

          {/* Divider */}
          <div
            ref={heroDividerRef}
            className="w-full h-px mb-8"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 40%, transparent 100%)", transform: "scaleX(0)" }}
          />

          {/* Sub + counter row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p
              ref={heroSubRef}
              className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed opacity-0"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.75)" }}
            >
              Three pathways. One mission. Choose how you want to defend Earth's
              last great ice — through partnership, skill, or community.
            </p>
            <div
              ref={counterRef}
              className="shrink-0 opacity-0 flex flex-col items-center justify-center rounded-2xl px-8 py-5"
              style={{ border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.1)" }}
            >
              <span className="text-4xl font-light text-white leading-none">3</span>
              <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                Ways to Act
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* MARQUEE — navy band */}
      <div className="relative z-10 w-full overflow-hidden py-4 mb-20" style={{ background: C.navy, borderTop: `2px solid ${C.crimson}` }}>
        <div ref={marqueeTrackRef} className="flex gap-10 whitespace-nowrap" style={{ width: "200%" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-sm tracking-[0.2em] uppercase shrink-0"
              style={{ fontFamily: "'Inter', sans-serif", color: item === "·" ? C.crimson : "rgba(255,255,255,0.35)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <section ref={cardsContainerRef} className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-32">
        <p className="text-[11px] tracking-[0.35em] uppercase mb-12" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
          Choose Your Pathway
        </p>
        <div className="flex flex-col gap-5">
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer opacity-0 block"
              style={{ border: `1px solid rgba(42,120,124,0.18)`, background: "white" }}
              onMouseEnter={(e) => handleCardEnter(e, i)}
              onMouseLeave={(e) => handleCardLeave(e, i)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(ellipse at 0% 50%, ${card.accentDim} 0%, transparent 60%)` }}
              />
              <div
                className="card-line absolute top-0 left-0 h-[3px] w-full origin-left"
                style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)`, transform: "scaleX(0)" }}
              />
              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex items-center gap-6 md:w-[140px] shrink-0">
                  <span
                    className="card-index text-[5rem] font-light leading-none select-none"
                    style={{ color: "rgba(42,120,124,0.08)", fontVariantNumeric: "tabular-nums" }}
                  >
                    {card.index}
                  </span>
                  <div
                    className="p-3 rounded-xl border transition-all duration-500 group-hover:scale-110"
                    style={{
                      color: card.accent,
                      borderColor: card.accentBorder,
                      background: card.accentDim,
                      boxShadow: hoveredCard === i ? `0 0 24px ${card.accentGlow}` : "none",
                    }}
                  >
                    {card.icon}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="text-[11px] tracking-[0.3em] uppercase mb-2 transition-colors duration-300"
                    style={{ color: hoveredCard === i ? card.accent : C.warmGrey, fontFamily: "'Inter', sans-serif" }}
                  >
                    {card.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light mb-3 leading-tight" style={{ color: C.navy }}>
                    {card.title}
                  </h2>
                  <p className="text-sm leading-relaxed max-w-xl" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {card.tags.map((tag, t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border transition-all duration-300"
                        style={{
                          borderColor: hoveredCard === i ? card.accentBorder : "rgba(42,120,124,0.2)",
                          color: hoveredCard === i ? card.accent : C.teal,
                          background: hoveredCard === i ? card.accentDim : "transparent",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end gap-6 md:gap-4">
                  <div className="text-right">
                    <p className="text-2xl md:text-3xl font-light leading-none" style={{ color: card.accent }}>
                      {card.stat.value}
                    </p>
                    <p className="text-[10px] tracking-widest uppercase mt-1" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
                      {card.stat.label}
                    </p>
                  </div>
                  <div
                    className="card-arrow w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      borderColor: card.accentBorder,
                      color: card.accent,
                      background: hoveredCard === i ? card.accentDim : "transparent",
                      opacity: 0.5,
                    }}
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VISUAL SEPARATOR */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 mb-32">
        <div className="relative h-[1px] w-full overflow-hidden">
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, transparent, ${C.teal}, transparent)`, opacity: 0.3 }} />
        </div>
        <div className="flex justify-between mt-4">
          {["Witness", "Act", "Protect", "Preserve"].map((word, i) => (
            <span key={i} className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: C.lightTeal }}>
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER CTA — teal band */}
      <section ref={footerCtaRef} className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-40 opacity-0">
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{ background: C.navy, border: `1px solid ${C.teal}` }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(42,120,124,0.25) 0%, transparent 65%)` }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${C.teal}, transparent)` }}
          />
          <div className="relative z-10">
            <p className="text-[11px] tracking-[0.35em] uppercase mb-8" style={{ fontFamily: "'Inter', sans-serif", color: C.lightTeal }}>
              Every Action Matters
            </p>
            <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight text-white">
              The glaciers can't wait.
              <br />
              <span className="italic" style={{ color: C.lightTeal }}>Neither can we.</span>
            </h2>
            <p className="max-w-xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)" }}>
              Over 50% of the world's glaciers are projected to vanish by 2100.
              Every partnership, every volunteer hour, every guardian subscription extends the timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/join-us-glacier-guardian"
                className="group relative px-12 py-4 rounded-full text-sm tracking-widest uppercase font-medium overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ background: C.teal, color: "white", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { boxShadow: `0 0 50px rgba(42,120,124,0.5)`, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { boxShadow: "0 0 0px rgba(42,120,124,0)", duration: 0.3 })}
              >
                Join as Glacier Guardian
              </Link>
              <Link
                href="/get-involved/partner-with-us"
                className="px-12 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300"
                style={{ border: `1px solid rgba(255,255,255,0.2)`, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.teal; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
              >
                Explore Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
