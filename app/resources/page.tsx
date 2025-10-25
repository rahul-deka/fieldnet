"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BackToTopButton from "@/components/back-to-top";
import Reveal from "@/components/reveal";

const resources = [
  { title: 'Industry Reports', desc: 'Quarterly and annual market research reports across sectors.', href: '#' },
  { title: 'Methodology Notes', desc: 'Our approach to quantitative and qualitative research.', href: '#' },
  { title: 'Case Studies', desc: 'Selected case studies showcasing our work with clients.', href: '/case-studies' },
];

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Resources</h1>
          <p className="text-lg text-slate-600">Helpful whitepapers, reports and methodology notes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((r) => (
            <a key={r.title} href={r.href} className="block p-6 border border-slate-200 bg-white hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{r.title}</h3>
              <p className="text-slate-600">{r.desc}</p>
            </a>
          ))}
        </div>
        </Reveal>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
