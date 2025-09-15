"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What services does FieldNet offer?",
    answer:
      "FieldNet provides comprehensive market research solutions including data collection, analysis, and reporting for a wide range of industries.",
  },
  {
    question: "How can I start a project with FieldNet?",
    answer:
      "Simply contact us through our website or email, and our team will guide you through the process from consultation to project delivery.",
  },
  {
    question: "Where is FieldNet located?",
    answer:
      "Our headquarters are in Mumbai, India, with global operations to serve clients worldwide.",
  },
  {
    question: "What makes FieldNet different?",
    answer:
      "We combine proven methodologies, experienced professionals, and a client-focused approach to deliver exceptional value and quality.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20 px-4 border-t border-cyan-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-800 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="divide-y divide-cyan-100 rounded-xl shadow-lg bg-cyan-50/40">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className={
                  `w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none transition-colors ` +
                  (openIndex === idx
                    ? "bg-cyan-100 text-cyan-900"
                    : "hover:bg-cyan-100 text-cyan-800")
                }
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg
                  className={`ml-4 h-5 w-5 transform transition-transform duration-200 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-5 text-cyan-900 text-base leading-relaxed transition-all duration-200 ease-in-out overflow-hidden ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                style={{
                  transitionProperty: 'max-height, opacity',
                }}
              >
                {openIndex === idx && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}