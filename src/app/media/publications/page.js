import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

const publicationsData = [
  {
    id: 'pub-1',
    title: 'Dushanbe Glaciers Declaration: High-Level International Conference',
    authors: 'International Conference Framework',
    date: '2025-01-01',
    description: 'Official declaration document from the High-Level International Conference on Glacier Preservation, outlining global commitments to cryosphere monitoring and resilience funding.',
    type: 'Conference Declaration',
    downloadLink: '/Dushanbe-Glaciers-Declaration-High-Level-International-Conference.pdf'
  }
];

export default function PublicationsPage() {
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
            Publications.
          </h1>
          <p className="text-lg md:text-xl text-glacier-warmGrey leading-relaxed font-cabin max-w-2xl">
            Policy briefs, evidence-based reports, and research outputs produced by TVGF and our institutional partners.
          </p>
        </div>
      </section>

      {/* Publications list */}
      <section className="py-20 px-6 md:px-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            {publicationsData.map((pub) => (
              <article 
                key={pub.id} 
                className="bg-white p-8 md:p-12 border border-glacier-navy/10 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col gap-6"
              >
                <div className="flex justify-between items-start border-b border-glacier-navy/10 pb-6">
                  <div>
                    <span className="inline-block bg-glacier-offwhite text-glacier-navy text-[10px] font-bold px-3 py-1 uppercase tracking-wider border border-glacier-navy/5 mb-4">
                      {pub.type}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-nohemi font-bold text-glacier-navy leading-tight mb-3">
                      {pub.title}
                    </h2>
                    <p className="font-cabin text-sm text-glacier-navy/80">
                      <strong>Source:</strong> {pub.authors}
                    </p>
                  </div>
                  <span className="hidden md:block font-cabin text-sm text-glacier-warmGrey whitespace-nowrap ml-6">
                    {formatDate(pub.date)}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <p className="font-cabin text-glacier-warmGrey leading-relaxed max-w-3xl">
                    {pub.description}
                  </p>
                  
                  <a 
                    href={pub.downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-3 px-6 py-3 bg-glacier-navy text-white hover:bg-glacier-teal text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download PDF
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