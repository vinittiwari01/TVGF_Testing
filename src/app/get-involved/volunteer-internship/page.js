"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── COLOUR TOKENS ────────────────────────────────────────────
const C = {
  navy:          "#042A33",
  teal:          "#2A787C",
  crimson:       "#8B0333",
  offwhite:      "#F2F4F4",
  lightTeal:     "#9CBBF0",
  warmGrey:      "#6B7280",
  tealDim:       "rgba(42,120,124,0.10)",
  tealBorder:    "rgba(42,120,124,0.35)",
  tealGlow:      "rgba(42,120,124,0.20)",
  navyDim:       "rgba(4,42,51,0.08)",
  crimsonDim:    "rgba(139,3,51,0.08)",
  crimsonBorder: "rgba(139,3,51,0.30)",
};

const roles = [
  {
    category: "Field & Research",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 36 L24 10 L42 36" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 36 L24 18 L34 36" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeOpacity="0.5" />
        <line x1="6" y1="36" x2="42" y2="36" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    positions: [
      { title: "Glacier Research Intern",        type: "Internship", duration: "3–6 months",    location: "On-site · Nepal / Switzerland" },
      { title: "Field Documentation Volunteer",  type: "Volunteer",  duration: "2–4 weeks",     location: "On-site · Various Glaciers" },
      { title: "Climate Data Analyst",           type: "Internship", duration: "6 months",      location: "Remote / Hybrid" },
    ],
  },
  {
    category: "Media & Storytelling",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="6"  stroke="currentColor" strokeWidth="1"   strokeOpacity="0.5" />
        <line x1="24" y1="4"  x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4"  y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    positions: [
      { title: "Visual Storyteller",                  type: "Volunteer",  duration: "Ongoing",       location: "Remote" },
      { title: "Social Media & Content Intern",       type: "Internship", duration: "3 months",      location: "Remote" },
      { title: "Documentary Production Assistant",    type: "Volunteer",  duration: "Project-based", location: "On-site · Kathmandu" },
    ],
  },
  {
    category: "Operations & Outreach",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="7"  stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 40 C8 30 40 30 40 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 22 C36 20 42 24 42 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
    positions: [
      { title: "Community Engagement Coordinator", type: "Volunteer",  duration: "Ongoing",  location: "Remote" },
      { title: "Grant Research Intern",            type: "Internship", duration: "4 months", location: "Remote" },
      { title: "Event & Campaign Volunteer",       type: "Volunteer",  duration: "Flexible", location: "Remote / On-site" },
    ],
  },
];

const processSteps = [
  { step: "01", title: "Apply Online",      desc: "Submit your application with a brief statement of purpose and your relevant skills or experience." },
  { step: "02", title: "Initial Interview", desc: "A 30-min conversation with our team to understand your goals and match you to the right opportunity." },
  { step: "03", title: "Onboarding",        desc: "Join orientation, receive resources, and get introduced to your team and project scope." },
  { step: "04", title: "Make Impact",       desc: "Begin contributing to active glacier conservation initiatives from day one." },
];

export default function VolunteerInternships() {
  const containerRef       = useRef(null);
  const heroTitleRef       = useRef(null);
  const heroBadgeRef       = useRef(null);
  const heroDescRef        = useRef(null);
  const processItemsRef    = useRef([]);
  const roleListRef        = useRef(null);
  const footerCtaRef       = useRef(null);
  const spotlightRef       = useRef(null);

  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredRole,    setHoveredRole]    = useState(null);

  // ── Spotlight follow ──
  useEffect(() => {
    const handleMouse = (e) => {
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power2.out" });
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // ── Entrance animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(heroBadgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      ).fromTo(
        heroTitleRef.current.querySelectorAll(".word"),
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, stagger: 0.1, duration: 1, ease: "expo.out" },
        "-=0.3"
      ).fromTo(
        heroDescRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

      processItemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            delay: i * 0.1,
          }
        );
      });

      if (footerCtaRef.current) {
        gsap.fromTo(footerCtaRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: footerCtaRef.current, start: "top 90%" } }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // ── Role list animation on tab switch ──
  useEffect(() => {
    if (!roleListRef.current) return;
    gsap.fromTo(
      roleListRef.current.querySelectorAll(".role-item"),
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" }
    );
  }, [activeCategory]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-x-hidden"
      style={{ background: C.offwhite, fontFamily: "'Cormorant Garamond', serif", color: C.navy }}
    >
      {/* AMBIENT SPOTLIGHT */}
      <div
        ref={spotlightRef}
        className="fixed pointer-events-none z-0 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: `radial-gradient(circle, ${C.tealDim} 0%, transparent 65%)`, top: 0, left: 0 }}
      />

      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hatch" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="32" stroke={C.teal} strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hatch)" />
        </svg>
      </div>

      {/* NAVBAR ACCENT LINE */}
      <div className="relative z-10 w-full h-1" style={{ background: C.teal }} />

      {/* BACK NAV */}
      <div className="relative z-10 pt-8 px-6 md:px-20 max-w-7xl mx-auto">
        <Link
          href="/get-involved"
          className="inline-flex items-center gap-2 transition-colors duration-300 text-sm tracking-widest uppercase"
          style={{ fontFamily: "'Inter', sans-serif", color: "rgba(4,42,51,0.35)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.teal)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(4,42,51,0.35)")}
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
            <path d="M16 10H4M9 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Get Involved
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-14 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Badge */}
        <div
          ref={heroBadgeRef}
          className="inline-flex items-center gap-3 rounded-full px-5 py-2 mb-10 opacity-0"
          style={{ border: `1px solid ${C.tealBorder}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.teal }} />
          <span className="text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: C.teal }}>
            Contribute Your Skills
          </span>
        </div>

        {/* Heading */}
        <div ref={heroTitleRef} className="overflow-hidden mb-8" style={{ perspective: "800px" }}>
          <h1
            className="font-light leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3.5rem,9vw,8rem)", color: C.navy }}
          >
            {["Volunteer", "&"].map((word, i) => (
              <span key={i} className="word inline-block mr-4 opacity-0" style={{ display: "inline-block" }}>
                {word}
              </span>
            ))}
            <br />
            <span className="word inline-block opacity-0" style={{ display: "inline-block" }}>Intern</span>
            <span className="word inline-block italic opacity-0" style={{ display: "inline-block", color: C.teal }}>ships</span>
          </h1>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: `linear-gradient(90deg, ${C.teal}, rgba(42,120,124,0.2), transparent)` }}
        />

        <p
          ref={heroDescRef}
          className="text-xl max-w-2xl leading-relaxed opacity-0"
          style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}
        >
          Whether you're a scientist, storyteller, strategist, or student — there's a place for
          your skills in the fight to preserve Earth's glaciers.
        </p>
      </section>

      {/* ── ROLE EXPLORER ── */}
      <section className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-32">
        <p
          className="text-[11px] tracking-[0.35em] uppercase mb-10"
          style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}
        >
          Open Opportunities
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Category tabs */}
          <div className="md:w-72 shrink-0 space-y-2">
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(4,42,51,0.3)" }}
            >
              Opportunity Areas
            </p>
            {roles.map((r, i) => (
              <button
                key={i}
                className="w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4"
                style={{
                  background:   activeCategory === i ? C.tealDim   : "white",
                  border:       activeCategory === i ? `1px solid ${C.tealBorder}` : "1px solid rgba(42,120,124,0.12)",
                  boxShadow:    activeCategory === i ? `0 4px 20px ${C.tealGlow}` : "none",
                }}
                onClick={() => setActiveCategory(i)}
                onMouseEnter={(e) => { if (activeCategory !== i) gsap.to(e.currentTarget, { x: 5, duration: 0.2 }); }}
                onMouseLeave={(e) => { if (activeCategory !== i) gsap.to(e.currentTarget, { x: 0, duration: 0.2 }); }}
              >
                <div
                  className="p-2 rounded-lg border"
                  style={{
                    color:        activeCategory === i ? C.teal : C.warmGrey,
                    borderColor:  activeCategory === i ? C.tealBorder : "rgba(42,120,124,0.15)",
                    background:   activeCategory === i ? C.tealDim : "transparent",
                  }}
                >
                  {r.icon}
                </div>
                <div>
                  <p
                    className="text-base font-light transition-colors duration-300"
                    style={{ color: activeCategory === i ? C.teal : C.warmGrey }}
                  >
                    {r.category}
                  </p>
                  <p
                    className="text-[10px] mt-0.5"
                    style={{ fontFamily: "'Inter', sans-serif", color: "rgba(4,42,51,0.3)" }}
                  >
                    {r.positions.length} positions
                  </p>
                </div>
                <span
                  className="ml-auto text-xs transition-all duration-300"
                  style={{
                    color:     C.teal,
                    opacity:   activeCategory === i ? 1 : 0,
                    transform: activeCategory === i ? "translateX(0)" : "translateX(-6px)",
                  }}
                >
                  ▸
                </span>
              </button>
            ))}
          </div>

          {/* Positions */}
          <div className="flex-1 min-w-0" ref={roleListRef}>
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(4,42,51,0.3)" }}
            >
              Open Positions
            </p>
            <div className="space-y-3">
              {roles[activeCategory].positions.map((pos, j) => (
                <div
                  key={j}
                  className="role-item relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                  style={{
                    border:     hoveredRole === `${activeCategory}-${j}` ? `1px solid ${C.tealBorder}` : "1px solid rgba(42,120,124,0.12)",
                    background: hoveredRole === `${activeCategory}-${j}` ? C.tealDim : "white",
                    boxShadow:  hoveredRole === `${activeCategory}-${j}` ? `0 8px 32px ${C.tealGlow}` : "none",
                  }}
                  onMouseEnter={() => setHoveredRole(`${activeCategory}-${j}`)}
                  onMouseLeave={() => setHoveredRole(null)}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 h-[2px] transition-all duration-400"
                    style={{
                      width:      hoveredRole === `${activeCategory}-${j}` ? "100%" : "0%",
                      background: `linear-gradient(90deg, ${C.teal}, transparent)`,
                    }}
                  />
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-light mb-2" style={{ color: C.navy }}>{pos.title}</h3>
                      <div className="flex flex-wrap gap-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span
                          className="text-[10px] tracking-widest uppercase border rounded-full px-3 py-0.5"
                          style={{
                            borderColor: pos.type === "Internship" ? C.tealBorder : C.crimsonBorder,
                            color:       pos.type === "Internship" ? C.teal       : C.crimson,
                            background:  pos.type === "Internship" ? C.tealDim    : C.crimsonDim,
                          }}
                        >
                          {pos.type}
                        </span>
                        <span className="text-xs flex items-center gap-1" style={{ color: C.warmGrey }}>
                          ◷ {pos.duration}
                        </span>
                        <span className="text-xs flex items-center gap-1" style={{ color: C.warmGrey }}>
                          ◎ {pos.location}
                        </span>
                      </div>
                    </div>
                    <button
                      className="shrink-0 px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300"
                      style={{
                        border:     `1px solid ${C.tealBorder}`,
                        color:      C.teal,
                        background: "transparent",
                        fontFamily: "'Inter', sans-serif",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = C.teal; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.teal; }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISUAL SEPARATOR ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 mb-28">
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${C.teal}, transparent)`, opacity: 0.3 }} />
        <div className="flex justify-between mt-4">
          {["Witness", "Act", "Protect", "Preserve"].map((w, i) => (
            <span key={i} className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: C.lightTeal }}>
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ── PROCESS ── */}
      <section className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-32">
        <p
          className="text-[11px] tracking-[0.35em] uppercase mb-4"
          style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}
        >
          How It Works
        </p>
        <h2
          className="font-light mb-16"
          style={{ fontSize: "clamp(2rem,6vw,4.5rem)", color: C.navy }}
        >
          Your path to{" "}
          <span className="italic" style={{ color: C.teal }}>Impact</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {processSteps.map((item, i) => (
            <div
              key={i}
              ref={(el) => (processItemsRef.current[i] = el)}
              className="group relative rounded-2xl p-8 cursor-default opacity-0 transition-all duration-500"
              style={{ border: "1px solid rgba(42,120,124,0.14)", background: "white" }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: "power2.out" });
                e.currentTarget.style.borderColor = C.tealBorder;
                e.currentTarget.style.boxShadow   = `0 12px 40px ${C.tealGlow}`;
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
                e.currentTarget.style.borderColor = "rgba(42,120,124,0.14)";
                e.currentTarget.style.boxShadow   = "none";
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${C.tealDim} 0%, transparent 70%)` }}
              />
              <div className="relative z-10">
                <span
                  className="block mb-5 font-light leading-none transition-colors duration-500"
                  style={{ fontSize: "3.5rem", color: "rgba(42,120,124,0.1)" }}
                >
                  {item.step}
                </span>
                <h3 className="text-xl font-light mb-2" style={{ color: C.navy }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: C.warmGrey }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section
        ref={footerCtaRef}
        className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto mb-40 text-center opacity-0"
      >
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20"
          style={{ background: C.navy, border: `1px solid ${C.teal}` }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(42,120,124,0.22) 0%, transparent 65%)` }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${C.teal}, transparent)` }}
          />
          <div className="relative z-10">
            <p
              className="text-[11px] tracking-[0.35em] uppercase mb-8"
              style={{ fontFamily: "'Inter', sans-serif", color: C.lightTeal }}
            >
              Every Action Matters
            </p>
            <h2
              className="font-light mb-5 leading-tight text-white"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
            >
              Ready to make a{" "}
              <span className="italic" style={{ color: C.lightTeal }}>difference</span>?
            </h2>
            <p
              className="max-w-xl mx-auto mb-12 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)" }}
            >
              Applications are open year-round. No application is too small —
              every skill has a home here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
                style={{ background: C.teal, color: "white", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { boxShadow: `0 0 50px rgba(42,120,124,0.45)`, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { boxShadow: "none", duration: 0.3 })}
              >
                View All Openings
              </button>
              <button
                className="px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.teal; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
