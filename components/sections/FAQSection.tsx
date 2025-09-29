"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
  return (
    <section className="bg-white py-20 px-4 border-t border-cyan-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-800 mb-10 text-center">Frequently Asked Questions</h2>
  <Accordion type="single" collapsible className="rounded-xl shadow-lg bg-cyan-50/40">
          {faqs.map((faq, idx) => (
            <React.Fragment key={`faq-fragment-${idx}`}>
              <AccordionItem value={`item-${idx}`} className="border-none">
                <AccordionTrigger className="font-medium text-lg px-6 py-5 text-cyan-800 hover:bg-cyan-100 no-underline hover:no-underline data-[state=open]:bg-cyan-100">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-cyan-900 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
              {idx < faqs.length - 1 && (
                <div className="border-t border-cyan-100 mx-6" />
              )}
            </React.Fragment>
          ))}
        </Accordion>
      </div>
    </section>
  );
}