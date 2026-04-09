import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

export default function GlacierDialoguesPage() {
  return (
    <main className="min-h-screen bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-glacier-navy border-b-4 border-glacier-teal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="md:w-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-glacier-teal text-white text-[10px] font-bold px-3 py-1.5 tracking-[0.2em] uppercase">
                Active
              </span>
              <span className="font-cabin text-xs font-bold text-glacier-offwhite/70 uppercase tracking-[0.3em]">
                Running since February 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Glacier Dialogues
            </h1>
            <p className="text-lg md:text-xl text-glacier-offwhite/80 max-w-3xl leading-relaxed font-cabin">
              Monthly online policy dialogue series. Each session brings together scientists, policymakers, and community practitioners to address specific glacier and cryosphere challenges. Global reach.
            </p>
          </div>
        </div>
      </section>

      {/* Program Format Details */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-glacier-light">
            <div className="md:pr-8 pt-8 md:pt-0">
              <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">Format</span>
              <h3 className="text-2xl font-nohemi font-bold text-glacier-navy mb-3">90-minute online session</h3>
            </div>
            <div className="md:px-8 pt-8 md:pt-0">
              <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">Institutions</span>
              <h3 className="text-2xl font-nohemi font-bold text-glacier-navy mb-3">Panelists</h3>
              <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed">
                Drawn from institutions including Ministry of Earth Sciences, IIT Bhubaneswar (Cryosense Lab), NDMA, and UNDP.
              </p>
            </div>
            <div className="md:pl-8 pt-8 md:pt-0">
              <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">Outputs</span>
              <h3 className="text-2xl font-nohemi font-bold text-glacier-navy mb-3">Published Outcomes</h3>
              <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed">
                Each session produces a published Substack article and recording.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Session */}
      <section className="py-24 px-6 md:px-12 bg-glacier-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">Upcoming Session</h2>
          </div>

          <div className="group bg-white border border-glacier-light hover:border-glacier-crimson/30 shadow-glacier-card p-8 md:p-14 relative flex flex-col md:flex-row gap-10 justify-between items-start md:items-center overflow-hidden transition-all duration-500">
            {/* Ambient Hover Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-glacier-crimson/5 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
            
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-glacier-crimson"></div>
            
            <div className="flex-1 relative z-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-sm font-cabin font-bold text-glacier-crimson tracking-widest uppercase">Upcoming</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-nohemi text-glacier-navy mb-4 leading-tight">
                [Upcoming Session Topic]
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 font-cabin text-sm font-semibold text-glacier-navy">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-glacier-crimson"></span> Date: [Upcoming Session Date]
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto relative z-10">
              <Link href="#" className="block text-center bg-glacier-navy text-white px-8 py-4 font-cabin font-bold hover:bg-glacier-crimson transition-all whitespace-nowrap">
                Register for the next session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Sessions Archive */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-glacier-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
            <div>
              <p className="text-glacier-warmGrey text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Archive</p>
              <h2 className="text-3xl md:text-4xl font-nohemi font-bold text-glacier-navy">Sessions Archive</h2>
            </div>
            <Link href="/media/sessions" className="text-[11px] text-glacier-teal font-bold tracking-[0.15em] uppercase hover:text-glacier-navy transition-all flex items-center gap-2">
              View Full Archive <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Session 1 */}
            <div className="group bg-glacier-offwhite p-8 border border-transparent hover:border-glacier-light hover:shadow-glacier-card transition-all duration-500 relative flex flex-col h-full overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-glacier-teal/10 rounded-full blur-3xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
              
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-teal/50 group-hover:bg-glacier-teal transition-all duration-300"></div>
              <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-3 block relative z-10">Session 1 • Complete</span>
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-8 relative z-10">Bridging Science and Policy in Glacier Risk Reduction</h3>
              <div className="mt-auto pt-4 relative z-10">
                <Link href="/media/sessions" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-glacier-light text-[10px] text-glacier-navy font-bold tracking-[0.15em] uppercase hover:border-glacier-teal hover:text-glacier-teal transition-all duration-300 rounded-sm">
                  Session Summary <span className="transform transition-all duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Session 2 */}
            <div className="group bg-glacier-offwhite p-8 border border-transparent hover:border-glacier-light hover:shadow-glacier-card transition-all duration-500 relative flex flex-col h-full overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-glacier-teal/10 rounded-full blur-3xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
              
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-teal/50 group-hover:bg-glacier-teal transition-all duration-300"></div>
              <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-3 block relative z-10">Session 2 • Complete</span>
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-8 relative z-10">Content published on Substack and LinkedIn</h3>
              <div className="mt-auto pt-4 relative z-10">
                <Link href="/media/sessions" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-glacier-light text-[10px] text-glacier-navy font-bold tracking-[0.15em] uppercase hover:border-glacier-teal hover:text-glacier-teal transition-all duration-300 rounded-sm">
                  Session Summary <span className="transform transition-all duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Session 3 */}
            <div className="group bg-glacier-offwhite p-8 border border-transparent hover:border-glacier-light hover:shadow-glacier-card transition-all duration-500 relative flex flex-col h-full overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-glacier-teal/10 rounded-full blur-3xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
              
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-teal/50 group-hover:bg-glacier-teal transition-all duration-300"></div>
              <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-3 block relative z-10">Session 3 • Complete (UN Side Event)</span>
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">From Risk to Resilience: Co-Creating Community-Led GLOF Adaptation Frameworks for the Himalayas</h3>
              <p className="text-xs text-glacier-warmGrey font-cabin mb-8 relative z-10">
                <strong>Moderator:</strong> Anurag Maloo<br/>
                <strong>Panelists:</strong> Dr. Aparna Shukla, Dr. Ashim Sattar, Safi Ahsan Rizvi, Antony Joh Moothedan.
              </p>
              <div className="mt-auto pt-4 relative z-10">
                <Link href="/media/sessions" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-glacier-light text-[10px] text-glacier-navy font-bold tracking-[0.15em] uppercase hover:border-glacier-teal hover:text-glacier-teal transition-all duration-300 rounded-sm">
                  Session Summary <span className="transform transition-all duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
