import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

export default function MediaPage() {
  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-glacier-light">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-glacier-lightTeal/10 to-transparent pointer-events-none -z-10"></div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          <div className="lg:w-3/5">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-nohemi font-bold text-glacier-navy leading-[0.85] tracking-tight">
              Media.
            </h1>
          </div>
          <div className="lg:w-2/5 lg:pl-10 lg:border-l-2 border-glacier-lightTeal/40 pb-2">
            <p className="text-lg md:text-xl text-glacier-warmGrey leading-relaxed font-cabin">
              TVGF is a thought-producing organisation. Explore our{' '}
              <span className="text-glacier-teal font-semibold">session archives, press coverage, research publications, and visual media.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Media Categories Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">Directory</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            {/* Card 1 */}
            <div className="group bg-white p-10 lg:p-12 relative flex flex-col h-full border border-glacier-light/60 md:hover:border-glacier-teal/40 shadow-sm md:hover:shadow-xl md:hover:shadow-glacier-teal/5 md:hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute top-0 left-0 h-1 bg-glacier-teal w-full md:w-0 md:group-hover:w-full transition-all duration-700 ease-out"></div>

              <div className="flex justify-between items-start mb-8 z-10">
                <span className="bg-glacier-teal text-white md:bg-glacier-navy/5 md:text-glacier-navy md:group-hover:bg-glacier-teal md:group-hover:text-white transition-colors duration-300 text-xs font-bold px-3 py-1.5 tracking-widest uppercase">
                  Archive
                </span>
              </div>

              <h3 className="text-3xl font-bold font-nohemi text-glacier-navy mb-4 z-10">Glacier Dialogues Sessions</h3>
              <p className="text-base text-glacier-warmGrey mb-8 leading-relaxed font-cabin z-10">
                Full archive of completed policy dialogue sessions. Includes key insights, panelist details, and event recordings.
              </p>

              <div className="flex flex-col gap-4 mb-10 flex-grow pt-6 border-t border-glacier-light/50 z-10">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Content</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Recordings & Summaries</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Availability</span>
                  <span className="text-sm font-cabin text-glacier-teal font-bold">Sessions 1 & 2 Live</span>
                </div>
              </div>

              <Link href="/media/sessions" className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-glacier-navy text-white hover:bg-glacier-teal rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 w-fit group/btn z-10">
                View Archive <span className="transform transition-transform duration-300 md:group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-10 lg:p-12 relative flex flex-col h-full border border-glacier-light/60 md:hover:border-glacier-teal/40 shadow-sm md:hover:shadow-xl md:hover:shadow-glacier-teal/5 md:hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute top-0 left-0 h-1 bg-glacier-teal w-full md:w-0 md:group-hover:w-full transition-all duration-700 ease-out"></div>

              <div className="flex justify-between items-start mb-8 z-10">
                <span className="bg-glacier-teal text-white md:bg-glacier-navy/5 md:text-glacier-navy md:group-hover:bg-glacier-teal md:group-hover:text-white transition-colors duration-300 text-xs font-bold px-3 py-1.5 tracking-widest uppercase">
                  Coverage
                </span>
              </div>

              <h3 className="text-3xl font-bold font-nohemi text-glacier-navy mb-4 z-10">Press & News</h3>
              <p className="text-base text-glacier-warmGrey mb-8 leading-relaxed font-cabin z-10">
                Media appearances, founder features, WEF Young Global Leader announcements, and official press kits.
              </p>

              <div className="flex flex-col gap-4 mb-10 flex-grow pt-6 border-t border-glacier-light/50 z-10">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Resources</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Press Kit Download</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Featured</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">WEF 2025</span>
                </div>
              </div>

              <Link href="/media/press" className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-glacier-navy text-white hover:bg-glacier-teal rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 w-fit group/btn z-10">
                Read News <span className="transform transition-transform duration-300 md:group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-10 lg:p-12 relative flex flex-col h-full border border-glacier-light/60 md:hover:border-glacier-teal/40 shadow-sm md:hover:shadow-xl md:hover:shadow-glacier-teal/5 md:hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute top-0 left-0 h-1 bg-glacier-teal w-full md:w-0 md:group-hover:w-full transition-all duration-700 ease-out"></div>

              <div className="flex justify-between items-start mb-8 z-10">
                <span className="bg-glacier-teal text-white md:bg-glacier-navy/5 md:text-glacier-navy md:group-hover:bg-glacier-teal md:group-hover:text-white transition-colors duration-300 text-xs font-bold px-3 py-1.5 tracking-widest uppercase">
                  Research
                </span>
              </div>

              <h3 className="text-3xl font-bold font-nohemi text-glacier-navy mb-4 z-10">Publications & Reports</h3>
              <p className="text-base text-glacier-warmGrey mb-8 leading-relaxed font-cabin z-10">
                Policy briefs, evidence-based reports, and research outputs produced by TVGF and our knowledge partners.
              </p>

              <div className="flex flex-col gap-4 mb-10 flex-grow pt-6 border-t border-glacier-light/50 z-10">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Format</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Open Access PDFs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Authors</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">TVGF & Partners</span>
                </div>
              </div>

              <Link href="/media/publications" className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-glacier-navy text-white hover:bg-glacier-teal rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 w-fit group/btn z-10">
                View Publications <span className="transform transition-transform duration-300 md:group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-10 lg:p-12 relative flex flex-col h-full border border-glacier-light/60 md:hover:border-glacier-teal/40 shadow-sm md:hover:shadow-xl md:hover:shadow-glacier-teal/5 md:hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute top-0 left-0 h-1 bg-glacier-teal w-full md:w-0 md:group-hover:w-full transition-all duration-700 ease-out"></div>

              <div className="flex justify-between items-start mb-8 z-10">
                <span className="bg-glacier-teal text-white md:bg-glacier-navy/5 md:text-glacier-navy md:group-hover:bg-glacier-teal md:group-hover:text-white transition-colors duration-300 text-xs font-bold px-3 py-1.5 tracking-widest uppercase">
                  Visuals
                </span>
              </div>

              <h3 className="text-3xl font-bold font-nohemi text-glacier-navy mb-4 z-10">Photography & Film</h3>
              <p className="text-base text-glacier-warmGrey mb-8 leading-relaxed font-cabin z-10">
                Curated galleries of HKH expedition photography, field documentaries, and the TEDxGateway survival story.
              </p>

              <div className="flex flex-col gap-4 mb-10 flex-grow pt-6 border-t border-glacier-light/50 z-10">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Geography</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">Hindu Kush Himalayas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-glacier-warmGrey font-bold tracking-widest uppercase">Featured</span>
                  <span className="text-sm font-cabin text-glacier-navy font-bold">TEDxGateway</span>
                </div>
              </div>

              <Link href="/media/visual" className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-glacier-navy text-white hover:bg-glacier-teal rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 w-fit group/btn z-10">
                Explore Visuals <span className="transform transition-transform duration-300 md:group-hover/btn:translate-x-2">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Content Strip */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-glacier-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-nohemi font-bold text-glacier-navy mb-2">Featured Content</h2>
              <p className="text-glacier-warmGrey font-cabin">The latest updates across all our programs.</p>
            </div>
            <span className="hidden md:block text-xs font-bold text-glacier-navy uppercase tracking-widest bg-glacier-offwhite border border-glacier-navy/10 px-5 py-2.5 rounded-full">
              Latest Releases
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Strip Item 1 */}
            <Link href="/media/sessions" className="group flex flex-col bg-glacier-offwhite p-8 rounded-xl transition-all duration-300 border border-transparent hover:border-glacier-navy/20 hover:shadow-lg hover:-translate-y-1">
              <span className="text-glacier-navy/60 text-xs font-bold tracking-widest uppercase mb-3 block">Glacier Dialogues</span>
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-3 group-hover:text-glacier-teal transition">Session 2: Bridging Science & Policy</h3>
              <p className="text-sm font-cabin text-glacier-warmGrey mb-8 flex-grow leading-relaxed">Insights from our latest panel featuring experts from IIT Bhubaneswar and NDMA.</p>
              <div className="text-xs font-cabin font-bold text-glacier-navy flex items-center justify-between pt-5 border-t border-glacier-navy/10">
                <span>Mar 12, 2026</span>
                <span className="group-hover:translate-x-1 transition-transform">Read →</span>
              </div>
            </Link>

            {/* Strip Item 2 */}
            <Link href="/media/press" className="group flex flex-col bg-glacier-offwhite p-8 rounded-xl transition-all duration-300 border border-transparent hover:border-glacier-navy/20 hover:shadow-lg hover:-translate-y-1">
              <span className="text-glacier-navy/60 text-xs font-bold tracking-widest uppercase mb-3 block">Press & News</span>
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-3 group-hover:text-glacier-teal transition">WEF Young Global Leader 2025</h3>
              <p className="text-sm font-cabin text-glacier-warmGrey mb-8 flex-grow leading-relaxed">Anurag Maloo recognized by the World Economic Forum for cryosphere advocacy.</p>
              <div className="text-xs font-cabin font-bold text-glacier-navy flex items-center justify-between pt-5 border-t border-glacier-navy/10">
                <span>Jan 15, 2026</span>
                <span className="group-hover:translate-x-1 transition-transform">Read →</span>
              </div>
            </Link>

            {/* Strip Item 3 */}
            <Link href="/media/visual" className="group flex flex-col bg-glacier-offwhite p-8 rounded-xl transition-all duration-300 border border-transparent hover:border-glacier-navy/20 hover:shadow-lg hover:-translate-y-1">
              <span className="text-glacier-navy/60 text-xs font-bold tracking-widest uppercase mb-3 block">Film</span>
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-3 group-hover:text-glacier-teal transition">TEDxGateway: Against All Odds</h3>
              <p className="text-sm font-cabin text-glacier-warmGrey mb-8 flex-grow leading-relaxed">A mountaineer's tale of survival, hope, and the birth of TVGF.</p>
              <div className="text-xs font-cabin font-bold text-glacier-navy flex items-center justify-between pt-5 border-t border-glacier-navy/10">
                <span>Watch Video</span>
                <span className="group-hover:translate-x-1 transition-transform">Watch →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSTACK CTA */}
      <section className="bg-glacier-offwhite py-24 px-6 md:px-12 border-t border-glacier-navy/10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy mb-5">
            Stay Informed.
          </h2>
          <p className="md:text-lg text-base text-glacier-warmGrey font-cabin mb-10 leading-relaxed">
            Receive our latest policy briefs, Glacier Dialogues session summaries, and expedition updates directly in your inbox.
          </p>

          <Link
            href="https://substack.com/@thevoiceofglaciers"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-glacier-navy text-white hover:bg-gray-800 rounded-full text-sm font-bold font-cabin tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Subscribe on Substack
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>


      <Footer />
    </main>
  );
}