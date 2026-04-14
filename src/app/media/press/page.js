import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

const pressData = [
  {
    id: 'press-2',
    title: 'Anurag Maloo Recognized as WEF Young Global Leader 2025',
    publication: 'World Economic Forum',
    date: '2026-01-15T00:00:00Z',
    summary: 'TVGF Founder Anurag Maloo joins the 2025 cohort of Young Global Leaders, recognized for his work in cryosphere advocacy and mountain resilience.',
    link: '#',
    type: 'Official Announcement'
  },
  {
    id: 'press-1',
    title: "Against All Odds: A Mountaineer's Tale of Survival, Hope, and Courage",
    publication: 'TEDxGateway',
    date: '2025-11-20T00:00:00Z',
    summary: "In this TEDx talk, Anurag shares his 72-hour survival story inside a crevasse on Mt. Annapurna and how it birthed the mission to protect the world's glaciers.",
    link: '#',
    type: 'Talk / Video'
  }
];

export default function PressAndNewsPage() {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-navy selection:text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto border-b border-glacier-navy/10 w-full">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Link href="/media" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-glacier-navy/60 hover:text-glacier-navy transition-colors mb-8">
            <span>←</span> Back to Media
          </Link>
          <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-glacier-navy leading-tight tracking-tight mb-6">
            Press & News.
          </h1>
          <p className="text-lg md:text-xl text-glacier-warmGrey leading-relaxed font-cabin max-w-2xl">
            Official announcements, media appearances, and coverage of The Voice of Glaciers Foundation and our leadership.
          </p>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-12 px-6 md:px-12 border-b border-glacier-navy/10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-xl font-nohemi font-bold text-glacier-navy mb-2">Media & Press Inquiries</h2>
            <p className="font-cabin text-sm text-glacier-warmGrey mb-4">
              For interviews, comments, or press materials, please contact our media desk.
            </p>
            <div className="flex flex-col gap-1">
              <span className="font-bold font-cabin text-glacier-navy text-sm">Media Contact: Romola Butalia</span>
              <a href="mailto:thevoiceofglaciers@gmail.com" className="text-sm font-cabin text-glacier-teal hover:underline">
                thevoiceofglaciers@gmail.com
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              href="#"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-glacier-offwhite border border-glacier-navy/10 text-glacier-navy hover:bg-glacier-navy hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Press Kit
            </a>
          </div>
        </div>
      </section>

      {/* Coverage archive */}
      <section className="py-20 px-6 md:px-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            {pressData.map((item) => (
              <article
                key={item.id}
                className="bg-white p-8 md:p-10 border border-glacier-navy/10 hover:border-glacier-navy/30 hover:shadow-md transition-all duration-300 group flex flex-col md:flex-row gap-8 md:gap-12"
              >
                {/* Meta Column */}
                <div className="md:w-1/4 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-glacier-navy/10 pb-6 md:pb-0 md:pr-8">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-glacier-navy/50 block mb-1">Publication</span>
                    <strong className="font-cabin text-glacier-navy text-base">{item.publication}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-glacier-navy/50 block mb-1">Date</span>
                    <span className="font-cabin text-glacier-warmGrey text-sm">{formatDate(item.date)}</span>
                  </div>
                  <div className="mt-auto pt-4">
                    <span className="inline-block bg-glacier-offwhite text-glacier-navy text-[10px] font-bold px-3 py-1 uppercase tracking-wider border border-glacier-navy/5">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:w-3/4 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-nohemi font-bold text-glacier-navy mb-4 group-hover:text-glacier-teal transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-cabin text-glacier-warmGrey leading-relaxed mb-8">
                    {item.summary}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-glacier-navy hover:text-glacier-teal transition-colors w-fit"
                  >
                    Read Full Feature <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}