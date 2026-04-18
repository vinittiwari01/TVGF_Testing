"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ─── COLOUR TOKENS ────────────────────────────────────────────
const C = {
  navy:       "#042A33",
  teal:       "#2A787C",
  crimson:    "#8B0333",
  offwhite:   "#F2F4F4",
  lightTeal:  "#9CBBF0",
  warmGrey:   "#6B7280",
};

const tiers = [
  {
    name: "Ice Witness",
    price: "Free",
    color: C.teal,
    description: "Begin your journey as a glacier guardian.",
    perks: ["Monthly glacier dispatches", "Access to TVGF community forum", "Digital guardian certificate", "Annual impact newsletter"],
    cta: "Join Free",
    featured: false,
  },
  {
    name: "Cryosphere Keeper",
    price: "₹499 / mo",
    color: C.navy,
    description: "The core tier for committed guardians.",
    perks: [
      "Everything in Ice Witness",
      "Exclusive glacier monitoring updates",
      "Monthly Q&A with TVGF scientists",
      "Name on glacier memorial wall",
      "30% off TVGF merchandise",
    ],
    cta: "Become a Keeper",
    featured: true,
  },
  {
    name: "Summit Sentinel",
    price: "₹1,499 / mo",
    color: C.crimson,
    description: "For those who want maximum impact.",
    perks: [
      "Everything in Cryosphere Keeper",
      "Annual personalized impact report",
      "Early access to expeditions & events",
      "Direct line to founder Anurag Maloo",
      "Physical Guardian kit (sent annually)",
      "Vote on TVGF project priorities",
    ],
    cta: "Become a Sentinel",
    featured: false,
  },
];

const testimonials = [
  { name: "Priya S.", location: "Mumbai", tier: "Cryosphere Keeper", quote: "Getting those monthly scientist dispatches transformed how I understand the climate crisis. It feels real now." },
  { name: "Lukas M.", location: "Zurich", tier: "Summit Sentinel", quote: "Being part of the memorial wall knowing my name is linked to real conservation action is something I cherish deeply." },
  { name: "Aiko T.", location: "Tokyo", tier: "Ice Witness", quote: "I started with the free tier and was so moved by the community that I upgraded within a week." },
];

const impactNumbers = [
  { value: "12,400+", label: "Active Guardians" },
  { value: "3", label: "Glaciers Monitored" },
  { value: "₹2.1Cr", label: "Funded by Guardians" },
  { value: "64", label: "Countries Represented" },
];

export default function JoinGlacierGuardian() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const glacierPathRef = useRef(null);
  const [selectedTier, setSelectedTier] = useState(1);
  const tierCardsRef = useRef([]);
  const impactRef = useRef([]);
  const testimonialRef = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (glacierPathRef.current) {
        gsap.fromTo(
          glacierPathRef.current,
          { strokeDashoffset: 2000 },
          { strokeDashoffset: 0, duration: 3, ease: "power2.inOut", delay: 0.5 }
        );
      }

      const heroWords = heroRef.current?.querySelectorAll(".hero-word");
      if (heroWords?.length) {
        gsap.fromTo(
          heroWords,
          { y: "120%", rotateX: -20, opacity: 0 },
          { y: "0%", rotateX: 0, opacity: 1, stagger: 0.08, duration: 1.1, ease: "expo.out", delay: 0.3 }
        );
      }

      tierCardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
            delay: i * 0.12,
          }
        );
      });

      impactRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 85%" },
            delay: i * 0.1,
          }
        );
      });

      testimonialRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
            delay: i * 0.15,
          }
        );
      });
    }, containerRef);

    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { x: e.clientX - 16, y: e.clientY - 16, duration: 0.15, ease: "power1.out" });
      }
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-hidden relative"
      style={{ background: C.offwhite, fontFamily: "'Cormorant Garamond', serif", color: C.navy }}
    >
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{ top: 0, left: 0, border: `2px solid ${C.teal}`, mixBlendMode: "multiply" }}
      />

      {/* SVG glacier background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ opacity: 0.04 }}
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            ref={glacierPathRef}
            d="M0 700 C200 620 250 500 400 480 C550 460 600 540 720 520 C840 500 900 400 1050 380 C1200 360 1300 440 1440 420 L1440 900 L0 900 Z"
            stroke={C.teal}
            strokeWidth="2"
            fill={`rgba(42,120,124,0.15)`}
            strokeDasharray="2000"
            strokeDashoffset="2000"
          />
          <path
            d="M0 780 C300 760 400 700 600 680 C800 660 900 720 1100 700 C1200 690 1350 650 1440 640 L1440 900 L0 900 Z"
            fill={`rgba(4,42,51,0.06)`}
          />
        </svg>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[160px]"
          style={{ background: "rgba(42,120,124,0.05)" }} />
      </div>

      {/* TOP TEAL BAR */}
      <div className="relative z-10 w-full h-1" style={{ background: C.teal }} />

      {/* BACK NAV */}
      <div className="relative z-10 pt-8 px-6 md:px-20 max-w-7xl mx-auto">
        <Link
          href="/get-involved"
          className="inline-flex items-center gap-2 transition-colors duration-300 text-sm tracking-widest uppercase"
          style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.teal)}
          onMouseLeave={(e) => (e.currentTarget.style.color = C.warmGrey)}
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
            <path d="M16 10H4M9 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Get Involved
        </Link>
      </div>

      {/* HERO — teal band */}
      <div className="relative z-10" style={{ background: C.teal }}>
        <section className="pt-16 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-white" style={{ opacity: 1 - i * 0.25 }} />
              ))}
            </div>
            <span className="text-white/80 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Become Part of the Community
            </span>
          </div>

          <div ref={heroRef} className="overflow-hidden" style={{ perspective: "1000px" }}>
            <h1 className="font-light leading-[0.88] tracking-tight text-white" style={{ fontSize: "clamp(3rem,9vw,8.5rem)" }}>
              {["Join", "as"].map((w, i) => (
                <span key={i} className="hero-word inline-block mr-4 opacity-0" style={{ display: "inline-block" }}>{w}</span>
              ))}
              <br />
              <span className="hero-word inline-block mr-4 opacity-0" style={{ display: "inline-block" }}>Glacier</span>
              <br />
              <span className="hero-word inline-block italic opacity-0" style={{ display: "inline-block", color: C.lightTeal }}>Guardian</span>
            </h1>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
            <p className="text-xl max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.75)" }}>
              A glacier guardian is more than a donor — you become a witness, a voice, and a vital thread in the network protecting Earth's cryosphere.
            </p>
            <div className="shrink-0 rounded-2xl p-6 text-center min-w-[180px]"
              style={{ border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.1)" }}>
              <p className="text-4xl font-light text-white mb-1">12,400+</p>
              <p className="text-white/60 text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                Current Guardians
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* TIER SELECTOR */}
      <section className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-32 pt-16">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
              Guardian Tiers
            </p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.navy }}>
              Choose Your <span className="italic" style={{ color: C.teal }}>Commitment</span>
            </h2>
          </div>
          <div className="flex gap-2">
            {tiers.map((t, i) => (
              <button
                key={i}
                onClick={() => setSelectedTier(i)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{
                  background: selectedTier === i ? t.color : "rgba(42,120,124,0.2)",
                  transform: selectedTier === i ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <div
              key={i}
              ref={(el) => (tierCardsRef.current[i] = el)}
              onClick={() => setSelectedTier(i)}
              className="relative rounded-2xl p-8 cursor-pointer transition-all duration-500 overflow-hidden opacity-0"
              style={{
                border: selectedTier === i ? `2px solid ${tier.color}` : "1px solid rgba(42,120,124,0.18)",
                background: selectedTier === i ? `${tier.color}08` : "white",
                transform: selectedTier === i ? "scale(1.02)" : "scale(1)",
              }}
              onMouseEnter={(e) => { if (selectedTier !== i) gsap.to(e.currentTarget, { y: -8, duration: 0.3, ease: "power2.out" }); }}
              onMouseLeave={(e) => { gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" }); }}
            >
              {tier.featured && (
                <div
                  className="absolute top-4 right-4 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold"
                  style={{ background: tier.color, color: "white", fontFamily: "'Inter', sans-serif" }}
                >
                  Most Popular
                </div>
              )}
              {selectedTier === i && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)` }}
                />
              )}
              <div className="relative z-10">
                <p className="text-xl font-light mb-1" style={{ color: C.navy }}>{tier.name}</p>
                <p className="text-3xl font-light mb-2" style={{ color: tier.color }}>{tier.price}</p>
                <p className="text-sm mb-8" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
                      <span style={{ color: tier.color }} className="mt-0.5 text-xs shrink-0">✦</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3.5 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 font-medium"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: selectedTier === i ? tier.color : "transparent",
                    color: selectedTier === i ? "white" : tier.color,
                    border: `1px solid ${tier.color}`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = tier.color; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { if (selectedTier !== i) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = tier.color; } }}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT STATS — navy band */}
      <section className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-32">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-16"
          style={{ background: C.navy }}
        >
          <div className="absolute top-0 left-0 w-full h-[3px]"
            style={{ background: `linear-gradient(90deg, ${C.teal}, ${C.crimson}, ${C.teal})` }} />
          <p className="text-xs tracking-[0.3em] uppercase mb-10 text-center" style={{ fontFamily: "'Inter', sans-serif", color: C.lightTeal }}>
            Guardian Impact So Far
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((item, i) => (
              <div key={i} ref={(el) => (impactRef.current[i] = el)} className="text-center group cursor-default opacity-0">
                <p className="text-3xl md:text-4xl font-light mb-2 text-white transition-colors duration-300"
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.lightTeal)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {item.value}
                </p>
                <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.4)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-32">
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
          Guardian Stories
        </p>
        <h2 className="text-4xl md:text-5xl font-light mb-14" style={{ color: C.navy }}>
          Voices from the <span className="italic" style={{ color: C.teal }}>Community</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => (testimonialRef.current[i] = el)}
              className="group rounded-2xl p-8 cursor-default opacity-0 transition-all duration-500"
              style={{ border: `1px solid rgba(42,120,124,0.18)`, background: "white" }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: "power2.out" });
                e.currentTarget.style.borderColor = C.teal;
                e.currentTarget.style.boxShadow = `0 8px 30px rgba(42,120,124,0.12)`;
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
                e.currentTarget.style.borderColor = "rgba(42,120,124,0.18)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="text-4xl mb-4 font-serif leading-none" style={{ color: C.teal }}>"</div>
              <p className="text-base leading-relaxed mb-6 italic" style={{ fontFamily: "'Cormorant Garamond', serif", color: C.warmGrey }}>
                {t.quote}
              </p>
              <div className="pt-5 flex items-center justify-between" style={{ borderTop: `1px solid rgba(42,120,124,0.12)` }}>
                <div>
                  <p className="text-sm font-medium" style={{ color: C.navy }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>{t.location}</p>
                </div>
                <span
                  className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-medium"
                  style={{ fontFamily: "'Inter', sans-serif", background: `rgba(42,120,124,0.1)`, color: C.teal, border: `1px solid rgba(42,120,124,0.25)` }}
                >
                  {t.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA — navy band */}
      <section className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-40 text-center">
        <div className="rounded-3xl p-16 md:p-24" style={{ background: C.navy }}>
          <div className="inline-block relative">
            <h3 className="text-5xl md:text-7xl font-light mb-8 leading-tight text-white">
              The glacier is{" "}
              <span className="italic relative" style={{ color: C.lightTeal }}>
                melting
                <svg className="absolute -bottom-2 left-0 w-full" height="3" viewBox="0 0 300 3">
                  <path d="M0 1.5 Q75 0 150 1.5 Q225 3 300 1.5" stroke={C.lightTeal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              .
              <br />
              Will you watch?
            </h3>
          </div>
          <p className="max-w-xl mx-auto mb-12 text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)" }}>
            Every guardian matters. Every rupee matters. Every voice matters.
          </p>
          <button
            className="group relative px-14 py-5 rounded-full text-sm tracking-widest uppercase font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
            style={{ background: C.teal, color: "white", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { boxShadow: `0 0 60px rgba(42,120,124,0.5)`, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { boxShadow: "none", duration: 0.3 })}
          >
            <span className="relative z-10">Join the Guardian Community</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
}
