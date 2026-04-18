"use client";
import { useEffect, useRef } from "react";
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

const partners = [
  {
    tier: "Glacier Patron",
    icon: "◈",
    price: "$50,000+",
    perks: [
      "Lead sponsor recognition on all expeditions",
      "Annual impact report with your branding",
      "Exclusive glacier site visit for your team",
      "Speaking slot at TVGF annual summit",
    ],
    accent: C.teal,
  },
  {
    tier: "Ice Architect",
    icon: "◇",
    price: "$20,000+",
    perks: [
      "Co-branded research publications",
      "Quarterly briefings with science team",
      "Logo on TVGF digital platforms",
      "VIP access to media launches",
    ],
    accent: C.navy,
  },
  {
    tier: "Snowline Ally",
    icon: "△",
    price: "$5,000+",
    perks: [
      "Partner recognition on website",
      "Invitation to annual stakeholder event",
      "Access to glacier monitoring data",
      "Social media collaboration",
    ],
    accent: C.crimson,
  },
];

const stats = [
  { value: "42+", label: "Institutional Partners" },
  { value: "18", label: "Countries Reached" },
  { value: "$2.4M", label: "Raised Together" },
  { value: "97%", label: "Partner Retention" },
];

export default function PartnerWithUs() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef([]);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);
  const iceLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, skewY: 3 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: "expo.out", delay: 0.2 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
      );
      gsap.fromTo(
        iceLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.4, ease: "expo.inOut", delay: 0.8 }
      );

      statsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 85%" },
            delay: i * 0.1,
          }
        );
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotateX: 15 },
          {
            y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "expo.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
            delay: i * 0.15,
          }
        );
      });

      gsap.fromTo(
        ctaRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%" },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (e, enter) => {
    gsap.to(e.currentTarget, { y: enter ? -8 : 0, scale: enter ? 1.02 : 1, duration: 0.4, ease: "power2.out" });
    const glow = e.currentTarget.querySelector(".card-glow");
    gsap.to(glow, { opacity: enter ? 1 : 0, duration: 0.3 });
  };

  return (
    <div
      ref={heroRef}
      className="min-h-screen overflow-hidden"
      style={{ background: C.offwhite, fontFamily: "'Cormorant Garamond', serif", color: C.navy }}
    >
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232A787C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[600px]"
          style={{ background: `linear-gradient(to bottom, rgba(42,120,124,0.06), transparent)` }} />
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
        <section className="pt-16 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Institutional & Funding Partnerships
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-light leading-[0.9] tracking-tight mb-8 opacity-0 text-white"
            style={{ fontSize: "clamp(3.5rem,10vw,9rem)", fontVariantLigatures: "common-ligatures" }}
          >
            Partner
            <br />
            <span className="italic" style={{ color: C.lightTeal }}>With Us</span>
          </h1>

          <div
            ref={iceLineRef}
            className="w-full h-[1px] mb-8"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3), transparent)", opacity: 0.7 }}
          />

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed opacity-0"
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.75)" }}
          >
            Join a coalition of institutions, corporations, and foundations working to preserve Earth's vanishing glaciers through science, storytelling, and systemic change.
          </p>
        </section>
      </div>

      {/* STATS */}
      <section className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-28 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden shadow-lg" style={{ background: C.navy }}>
          {stats.map((s, i) => (
            <div
              key={i}
              ref={(el) => (statsRef.current[i] = el)}
              className="px-8 py-10 group cursor-default opacity-0 transition-colors duration-500"
              style={{ background: C.navy }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.teal)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.navy)}
            >
              <div className="text-4xl md:text-5xl font-light mb-2 text-white transition-colors">
                {s.value}
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif", color: C.lightTeal }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERSHIP TIERS */}
      <section className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-32">
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
            Partnership Tiers
          </p>
          <h2 className="text-5xl md:text-6xl font-light" style={{ color: C.navy }}>
            Choose Your <span className="italic" style={{ color: C.teal }}>Impact</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative border rounded-2xl p-8 cursor-pointer opacity-0 overflow-hidden"
              style={{ perspective: "1000px", background: "white", borderColor: "rgba(42,120,124,0.18)" }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div
                className="card-glow absolute inset-0 rounded-2xl opacity-0 transition-opacity"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${p.accent}18 0%, transparent 70%)`,
                  border: `1px solid ${p.accent}30`,
                }}
              />
              <div className="relative z-10">
                <div className="text-4xl mb-6" style={{ color: p.accent }}>{p.icon}</div>
                <h3 className="text-2xl font-light mb-1" style={{ color: C.navy }}>{p.tier}</h3>
                <p className="text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
                  Starting at{" "}
                  <span className="font-semibold" style={{ color: p.accent }}>{p.price}</span>
                  {" "}/ year
                </p>
                <ul className="space-y-3">
                  {p.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
                      <span style={{ color: p.accent }} className="mt-1 text-xs">▸</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-8 w-full py-3 rounded-lg text-sm tracking-widest uppercase transition-all duration-300 border font-medium"
                  style={{ borderColor: p.accent, color: p.accent, fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = p.accent; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = p.accent; }}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — navy band */}
      <section ref={ctaRef} className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-32 opacity-0">
        <div className="relative overflow-hidden rounded-3xl p-16 text-center" style={{ background: C.navy }}>
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(42,120,124,0.3) 0%, transparent 65%)` }} />
          <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: `linear-gradient(90deg, ${C.teal}, ${C.crimson}, ${C.teal})` }} />
          <div className="relative z-10">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Inter', sans-serif", color: C.lightTeal }}>
              Custom Partnership
            </p>
            <h3 className="text-4xl md:text-5xl font-light mb-6 text-white">Have a unique vision?</h3>
            <p className="max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.55)" }}>
              We co-create bespoke partnerships for foundations, research institutions, and corporations with specific conservation mandates.
            </p>
            <button
              className="group relative px-12 py-4 rounded-full text-sm tracking-widest uppercase font-medium overflow-hidden transition-all duration-300 hover:scale-105"
              style={{ background: C.teal, color: "white", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { boxShadow: `0 0 40px rgba(42,120,124,0.5)`, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { boxShadow: "none", duration: 0.3 })}
            >
              Schedule a Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
