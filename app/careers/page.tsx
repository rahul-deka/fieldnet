"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BackToTopButton from "@/components/back-to-top";
import Reveal from "@/components/reveal";

const jobs = [
  { title: 'Senior Researcher', location: 'Mumbai', type: 'Full-time', apply: '#' },
  { title: 'Field Supervisor', location: 'Pan-India', type: 'Contract', apply: '#' },
  { title: 'Data Analyst', location: 'Remote', type: 'Full-time', apply: '#' },
];

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Careers</h1>
          <p className="text-lg text-slate-600">Join our team — explore current openings and apply.</p>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.title} className="border border-slate-200 p-6 bg-white flex items-center justify-between">
              <div>
                <div className="text-xl font-semibold text-slate-900">{job.title}</div>
                <div className="text-sm text-slate-600">{job.location} • {job.type}</div>
              </div>
              <a href={job.apply} className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white font-medium rounded hover:bg-cyan-700">Apply</a>
            </div>
          ))}
        </div>
        </Reveal>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
