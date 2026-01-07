"use client";

import React, { useState, useEffect, useRef } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Check cache first
    const cached = sessionStorage.getItem('faqs');
    if (cached) {
      setFaqs(JSON.parse(cached));
      setIsLoading(false);
      return;
    }

    // Fetch if no cache
    const fetchFAQs = async () => {
      try {
        const response = await fetch('/api/get-faqs');
        if (response.ok) {
          const data = await response.json();
          if (data.faqs && data.faqs.length > 0) {
            setFaqs(data.faqs);
            // Cache in sessionStorage
            sessionStorage.setItem('faqs', JSON.stringify(data.faqs));
          }
        }
      } catch (error) {
        console.error('Failed to fetch FAQs:', error);
        // Keep empty array
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 border-t border-cyan-100">
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-3xl font-bold text-cyan-800 mb-10 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>Frequently Asked Questions</h2>
        
        {isLoading ? (
          <div className={`rounded-xl shadow-lg bg-cyan-50/40 p-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-6 bg-cyan-200/50 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-cyan-100/50 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        ) : faqs.length === 0 ? (
          <div className={`rounded-xl shadow-lg bg-cyan-50/40 p-8 text-center transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-cyan-700">No FAQs available at the moment. Please check back later.</p>
          </div>
        ) : (
          <Accordion type="single" collapsible className={`rounded-xl shadow-lg bg-cyan-50/40 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
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
        )}
      </div>
    </section>
  );
}