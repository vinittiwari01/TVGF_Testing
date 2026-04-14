"use client";

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Link from 'next/link';

const galleryData = [
  {
    id: 1,
    src: "/home/himalyanGlacier.jpg",
    title: "Himalayan Panorama",
    location: "Hindu Kush Himalaya",
    category: "Ladakh",
    featured: true
  },
  {
    id: 2,
    src: "/1.jpg", 
    title: "Glacier System Detail",
    location: "Uttarakhand",
    category: "Uttarakhand"
  },
  {
    id: 3,
    src: "/2.jpg",
    title: "Mountain Terrain",
    location: "HKH Region",
    category: "Ladakh"
  },
  {
    id: 4,
    src: "/3.jpg",
    title: "High Altitude Base",
    location: "Expedition Camp",
    category: "Nepal"
  },
  {
    id: 5,
    src: "/4.jpg",
    title: "Ice Formations",
    location: "Crevasse Assessment",
    category: "Nepal"
  },
  {
    id: 6,
    src: "/SumitValleyTrail.jpg",
    title: "Summit-Valley Trail",
    location: "Himalayas",
    category: "Uttarakhand"
  }
];

export default function VisualMediaPage() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Ladakh', 'Uttarakhand', 'Nepal'];

  const filteredGallery = activeTab === 'All' ? galleryData : galleryData.filter(img => img.category === activeTab);

  return (
    <main className="bg-glacier-offwhite selection:bg-glacier-navy selection:text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-glacier-navy/10 w-full">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Link href="/media" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-glacier-navy/60 hover:text-glacier-navy transition-colors mb-8">
            <span>←</span> Back to Media
          </Link>
          <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-glacier-navy leading-tight tracking-tight mb-6">
            Photography & Film.
          </h1>
          <p className="text-lg md:text-xl text-glacier-warmGrey leading-relaxed font-cabin max-w-2xl">
            Curated galleries of expedition photography from the Hindu Kush Himalayas, alongside documentaries and field narratives.
          </p>
        </div>
      </section>

      {/* Featured Film (TEDx) */}
      <section className="pt-20 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold text-glacier-teal uppercase tracking-widest block mb-2">Featured Talk</span>
            <h2 className="text-3xl font-nohemi font-bold text-glacier-navy">TEDxGateway: The Miraculous Rescue</h2>
          </div>
          
          <div className="w-full aspect-video bg-glacier-navy rounded-sm overflow-hidden shadow-lg border border-glacier-navy/10 relative">
            <iframe 
              src="https://www.youtube.com/embed/FJ0R7HJmDrs?si=bajN09ZaK6PIq9E6&amp;start=19462" 
              title="TEDxGateway Talk - Anurag Maloo"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 border-b border-glacier-navy/10 pb-12">
            <p className="font-cabin text-glacier-warmGrey max-w-3xl leading-relaxed">
              In this TEDxGateway talk, TVGF Founder Anurag Maloo shares his 72-hour survival story inside a crevasse on Mt. Annapurna and how it birthed the mission to protect the world's glaciers.
            </p>
          </div>
        </div>
      </section>

      {/* Global Coverage & Documentaries */}
      <section className="pb-20 pt-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-nohemi font-bold text-glacier-navy mb-2">Global Coverage & Documentaries</h2>
              <p className="font-cabin text-glacier-warmGrey">Extensive media coverage and in-depth interviews detailing the expedition and our mission.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            
            {/* Everest Mystery */}
            <div className="flex flex-col gap-4 group">
              <div className="w-full aspect-video bg-glacier-navy rounded-sm overflow-hidden shadow-sm border border-glacier-navy/10 relative">
                <iframe 
                  src="https://www.youtube.com/embed/wFeXfE4xLo0" 
                  title="At Death's Door: The MIRACULOUS Rescue"
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.02] transition-transform duration-500"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <span className="text-[10px] font-bold text-glacier-teal uppercase tracking-widest block mb-1">Everest Mystery Documentary</span>
                <h3 className="text-lg font-nohemi font-bold text-glacier-navy leading-tight">At Death's Door: The Miraculous Rescue</h3>
              </div>
            </div>

            {/* Humans of Bombay */}
            <div className="flex flex-col gap-4 group">
              <div className="w-full aspect-video bg-glacier-navy rounded-sm overflow-hidden shadow-sm border border-glacier-navy/10 relative">
                <iframe 
                  src="https://www.youtube.com/embed/i5BaGQb-dck" 
                  title="Humans of Bombay Interview"
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.02] transition-transform duration-500"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <span className="text-[10px] font-bold text-glacier-teal uppercase tracking-widest block mb-1">Humans of Bombay Feature</span>
                <h3 className="text-lg font-nohemi font-bold text-glacier-navy leading-tight">Stranded in a Glacier for 3 Days</h3>
              </div>
            </div>

            {/* CNN-News18 */}
            <div className="flex flex-col gap-4 group">
              <div className="w-full aspect-video bg-glacier-navy rounded-sm overflow-hidden shadow-sm border border-glacier-navy/10 relative">
                <iframe 
                  src="https://www.youtube.com/embed/p6vfa_QC02s" 
                  title="CNN-News18 Interview"
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.02] transition-transform duration-500"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <span className="text-[10px] font-bold text-glacier-teal uppercase tracking-widest block mb-1">CNN-News18 Exclusive</span>
                <h3 className="text-lg font-nohemi font-bold text-glacier-navy leading-tight">The Remarkable Recovery of a Mountaineer</h3>
              </div>
            </div>

            {/* On The Mic With Parth */}
            <div className="flex flex-col gap-4 group">
              <div className="w-full aspect-video bg-glacier-navy rounded-sm overflow-hidden shadow-sm border border-glacier-navy/10 relative">
                <iframe 
                  src="https://www.youtube.com/embed/LjygxYJ2nbc" 
                  title="On The Mic With Parth"
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.02] transition-transform duration-500"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <span className="text-[10px] font-bold text-glacier-teal uppercase tracking-widest block mb-1">Mountaineering Podcast</span>
                <h3 className="text-lg font-nohemi font-bold text-glacier-navy leading-tight">Survival on Annapurna 1</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Expedition Gallery */}
      <section className="py-12 px-6 md:px-12 flex-grow bg-white border-y border-glacier-navy/10">
        <div className="max-w-7xl mx-auto pt-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-nohemi font-bold text-glacier-navy mb-2">Expedition Gallery</h2>
              <p className="font-cabin text-glacier-warmGrey">Field photography documenting the changing cryosphere.</p>
            </div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm border ${
                    activeTab === category 
                      ? 'bg-glacier-navy text-white border-glacier-navy' 
                      : 'bg-transparent text-glacier-navy/60 border-glacier-navy/20 hover:border-glacier-navy/50 hover:text-glacier-navy'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredGallery.map((img) => (
              <div key={img.id} className={`group flex flex-col gap-3 ${img.featured && activeTab === 'All' ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <div className={`bg-glacier-navy/5 overflow-hidden rounded-sm relative border border-glacier-navy/10 ${img.featured && activeTab === 'All' ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="flex justify-between items-start px-1">
                  <div>
                    <p className="font-cabin text-sm text-glacier-navy font-bold">{img.title}</p>
                    <p className="font-cabin text-xs text-glacier-warmGrey">{img.location}</p>
                  </div>
                  <span className="text-[10px] text-glacier-navy/60 font-bold uppercase tracking-widest bg-glacier-navy/5 px-2 py-1 rounded-sm">
                    © TVGF
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Usage Policy */}
      <section className="py-20 px-6 md:px-12 bg-glacier-offwhite">
        <div className="max-w-4xl mx-auto bg-white border border-glacier-navy/10 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 rounded-sm shadow-sm">
          <div className="w-12 h-12 flex-shrink-0 bg-glacier-offwhite border border-glacier-navy/10 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-glacier-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <h3 className="text-lg font-bold font-nohemi text-glacier-navy mb-2">Photography Usage Policy</h3>
            <p className="font-cabin text-sm text-glacier-warmGrey leading-relaxed">
              All images and video content in this gallery are the property of The Voice of Glaciers Foundation. Media outlets and journalists may use these images for editorial coverage provided they are explicitly credited as: <strong>"Photography courtesy of The Voice of Glaciers Foundation"</strong>. For high-resolution files or commercial inquiries, please contact our press desk.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}