"use client";

import React, { useState, useEffect, useRef } from "react";
import { fetchNewsroom, Newsroom } from "@/lib/newsroom";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Chief Marketing Officer",
    company: "Global FMCG Brand",
    content: "FieldNet's insights helped us understand our target audience better than ever before. Their thorough research and actionable recommendations led to a 35% increase in campaign effectiveness.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Rajesh Kumar",
    role: "VP of Strategy",
    company: "Leading Beverage Company",
    content: "Working with FieldNet was a game-changer for our market entry strategy. Their comprehensive market analysis and consumer insights were instrumental in our successful launch across multiple regions.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Emily Chen",
    role: "Director of Research",
    company: "International Consulting Firm",
    content: "The level of detail and accuracy in FieldNet's research is unmatched. They delivered insights that not only met but exceeded our expectations, helping us serve our clients better.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Michael Roberts",
    role: "Head of Product",
    company: "Technology Startup",
    content: "FieldNet's product testing methodology provided us with clear, data-driven insights that shaped our product roadmap. Their expertise in both quantitative and qualitative research is exceptional.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Priya Sharma",
    role: "Brand Manager",
    company: "Leading Pharmaceutical Company",
    content: "The team at FieldNet demonstrated deep understanding of our industry. Their research helped us identify key market opportunities and refine our messaging to resonate with healthcare professionals.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "David Anderson",
    role: "CEO",
    company: "Retail Chain",
    content: "FieldNet's customer satisfaction research gave us the insights we needed to transform our customer experience. Their recommendations were practical, actionable, and delivered measurable results.",
    rating: 5,
    image: "/placeholder-user.jpg"
  }
];



export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [latestNews, setLatestNews] = useState<Newsroom | null>(null);
  const [loadingNews, setLoadingNews] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);

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
    fetchNewsroom()
      .then((data) => {
        console.log('[Newsroom fetch] Data:', data);
        if (data && data.length > 0) {
          setLatestNews(data[0]);
        } else {
          setNewsError('No newsroom data found.');
        }
      })
      .catch((err) => {
        console.error('[Newsroom fetch] Error:', err);
        setNewsError('Failed to load newsroom data.');
      })
      .finally(() => {
        setLoadingNews(false);
      });
  }, []);

  function formatMonthYear(dateStr?: string) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleString("default", { month: "short", year: "numeric" }).toUpperCase();
  }

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {/* What Our <Link href="/clients" className="text-cyan-600 hover:text-cyan-700 underline decoration-2 underline-offset-4">Clients</Link> Say */}
            Recognition & Highlights
          </h2>
          <p className={`text-xl leading-8 text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Don't just take our word for it – see what <Link href="/clients" className="text-cyan-600 hover:text-cyan-700 underline decoration-2 underline-offset-4">clients</Link>, partners, and the industry are saying about us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }) as any,
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className={`w-full transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 h-full shadow-none bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-cyan-600" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-slate-700 leading-relaxed mb-6 text-justify md:text-left flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                      />
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-600">{testimonial.role}</div>
                        <div className="text-sm text-cyan-700 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Newsroom Card (latest) */}
        {loadingNews ? (
          <div className="w-full mt-4 bg-white px-3 sm:px-8 py-4 sm:py-8 text-left border border-orange-200 animate-pulse max-w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 justify-between">
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-4 w-24 bg-orange-100 rounded" />
                <span className="mx-1 text-gray-200 text-lg">•</span>
                <span className="h-4 w-16 bg-gray-100 rounded" />
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className="h-7 sm:h-10 w-10 bg-gray-100 rounded" />
                <span className="bg-orange-200 text-white text-xs sm:text-xs font-bold px-3 py-1 rounded-full shadow-sm">&nbsp;</span>
              </div>
            </div>
            <div className="h-6 sm:h-8 w-3/4 bg-gray-100 rounded mb-2" />
            <div className="flex sm:hidden items-center gap-2 mb-2">
              <span className="h-4 w-24 bg-orange-100 rounded" />
              <span className="mx-1 text-gray-200 text-lg">•</span>
              <span className="h-4 w-16 bg-gray-100 rounded" />
            </div>
            <div className="relative flex flex-col">
              <div className="h-5 w-full bg-gray-100 rounded mb-2" />
              <div className="h-5 w-2/3 bg-gray-100 rounded mb-2" />
              <div className="h-5 w-1/2 bg-gray-100 rounded" />
            </div>
          </div>
        ) : newsError ? (
          <div className="w-full mt-4 bg-white px-3 sm:px-8 py-4 sm:py-8 text-left border border-red-300 text-red-700 font-semibold">
            Newsroom error: {newsError}
          </div>
        ) : latestNews && (
          <div className="w-full mt-4 bg-white px-3 sm:px-8 py-4 sm:py-8 text-left border border-orange-300 hover:border-orange-500 transition-all duration-200 max-w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 justify-between">
              <div className="hidden sm:flex items-center gap-2">
                <span className="font-bold text-orange-500 tracking-wide text-sm">{latestNews.category?.toUpperCase()}</span>
                <span className="mx-1 text-gray-300 text-lg">•</span>
                <span className="text-gray-400 font-semibold tracking-wide text-sm">{formatMonthYear(latestNews.date)}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                {latestNews.logo?.asset?.url && (
                  <img src={latestNews.logo.asset.url} alt="Logo" className="h-7 sm:h-10 w-auto rounded bg-white p-0.5" />
                )}
                <span className="bg-orange-500 text-white text-xs sm:text-xs font-bold px-3 py-1 rounded-full shadow-sm">LATEST</span>
              </div>
            </div>
            <h3 className="text-xl sm:text-3xl font-bold mb-2 text-left">{latestNews.headline}</h3>
            <div className="flex sm:hidden items-center gap-2 mb-2">
              <span className="font-bold text-orange-500 tracking-wide text-sm">{latestNews.category?.toUpperCase()}</span>
              <span className="mx-1 text-gray-300 text-lg">•</span>
              <span className="text-gray-400 font-semibold tracking-wide text-sm">{formatMonthYear(latestNews.date)}</span>
            </div>
            <div className="relative flex flex-col">
              <p className="text-base sm:text-lg text-slate-700 text-justify sm:pr-12 flex-1">
                {latestNews.summary}
                {latestNews.link && (
                  <a href={latestNews.link} className="inline-block ml-2 text-orange-500 font-semibold underline align-baseline" target="_blank" rel="noopener noreferrer">Read more</a>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
