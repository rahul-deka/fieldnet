export const metadata = {
  title: "Careers | FieldNet Global Research",
  description: "Explore career opportunities at FieldNet. Join our team and help shape the future of market research.",
};
"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BackToTopButton from "@/components/back-to-top";
import Reveal from "@/components/reveal";


import { useEffect, useState } from "react";
import { fetchCareers } from "@/lib/careers";
import { PortableText, PortableTextComponents } from '@portabletext/react';
const portableTextComponents: PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside ml-4">{children}</ul>
    ),
  },
};

type PortableBlock = any;
type Career = {
  _id: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  qualification: string;
  about: PortableBlock[];
  responsibilities: PortableBlock[];
  ideal: PortableBlock[];
  why: PortableBlock[];
};


export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCareers()
      .then((data) => {
        setCareers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load careers.');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Careers</h1>
            <p className="text-lg text-slate-600">Join our team — explore current openings and apply.</p>
          </div>
          <div>
            {loading ? (
              <div>
                {[...Array(3)].map((_, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-3 md:py-6 cursor-pointer rounded-md transition-colors bg-gray-50 animate-pulse">
                      <div className="ml-4 md:ml-8">
                        <div className="h-6 w-2/3 bg-gray-200 rounded mb-2" />
                        <div className="h-4 w-1/3 bg-gray-100 rounded" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="px-2 py-1 text-xs md:px-3 md:py-2 md:text-base bg-white border border-gray-300 rounded-md text-black font-normal transition-colors select-none mr-4 md:mr-8 ml-4 md:ml-0">
                          <span className="h-4 w-16 bg-gray-100 rounded block" />
                        </span>
                      </div>
                    </div>
                    {idx !== 2 && (
                      <hr className="border-0 border-t border-dashed border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center text-red-500 py-12">{error}</div>
            ) : careers.length === 0 ? (
              <div className="text-center text-slate-500 py-12">No open roles at this time.</div>
            ) : (
              careers.map((job, idx) => {
                const expanded = openIndex === idx;
                return (
                  <div key={job._id}>
                    <div
                      className={
                        `flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-3 md:py-6 cursor-pointer rounded-md transition-colors ${expanded ? 'bg-gray-50' : 'hover:bg-gray-50'}`
                      }
                      onClick={() => setOpenIndex(expanded ? null : idx)}
                      aria-expanded={expanded}
                      aria-controls={`job-details-${idx}`}
                      tabIndex={0}
                      role="button"
                    >
                      <div className="ml-4 md:ml-8">
                        <div className="text-xl font-semibold text-slate-900">{job.title}</div>
                        <div className="text-sm text-slate-600">{job.location} • {job.type}</div>
                      </div>
                      <div className="flex gap-2 items-center">
                        {!expanded && (
                          <span
                            className="px-2 py-1 text-xs md:px-3 md:py-2 md:text-base bg-white border border-gray-300 rounded-md text-black font-normal transition-colors select-none mr-4 md:mr-8 ml-4 md:ml-0"
                          >
                            Read More
                          </span>
                        )}
                      </div>
                    </div>
                    {expanded && (
                      <div id={`job-details-${idx}`} className="mb-6 mt-6 flex flex-col gap-4 animate-fade-in mx-2 sm:mx-2 md:mx-4 lg:mx-8">
                        <div className="mb-1"><span className="font-semibold">Experience:</span> {job.experience}</div>
                        <div className="mb-1"><span className="font-semibold">Qualification:</span> {job.qualification}</div>
                        <div className="mb-1">
                          <div className="font-semibold">About the Role:</div>
                          <div className="text-justify">
                            <PortableText value={job.about} components={portableTextComponents} />
                          </div>
                        </div>
                        <div className="mb-1">
                          <div className="font-semibold">Key Responsibilities:</div>
                          <div className="text-justify">
                            <PortableText value={job.responsibilities} components={portableTextComponents} />
                          </div>
                        </div>
                        <div className="mb-1">
                          <div className="font-semibold">Ideal Candidate Profile:</div>
                          <div className="text-justify">
                            <PortableText value={job.ideal} components={portableTextComponents} />
                          </div>
                        </div>
                        <div className="mb-1">
                          <div className="font-semibold">Why FieldNet?</div>
                          <div className="text-justify">
                            <PortableText value={job.why} components={portableTextComponents} />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <a
                            href={`mailto:info@fieldnetglobal.com?subject=Application for ${encodeURIComponent(job.title)}`}
                            className="mt-4 inline-flex items-center px-2 py-1 text-xs md:px-4 md:py-2 md:text-base bg-cyan-600 text-white font-medium rounded hover:bg-cyan-700 w-max mr-4 md:mr-8"
                          >
                            Apply
                          </a>
                        </div>
                      </div>
                    )}
                    {idx !== careers.length - 1 && (
                      <hr className="border-0 border-t border-dashed border-gray-300" />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </Reveal>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
