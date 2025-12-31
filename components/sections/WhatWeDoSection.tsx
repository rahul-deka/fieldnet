"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Phone, 
  MessageSquare, 
  Shield, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: BarChart3,
    title: "Market Research",
    description: "Comprehensive insights from sample design to analysis and reporting",
    gradient: "from-cyan-600 to-cyan-700",
  },
  {
    icon: Phone,
    title: "Data Collection",
    description: "Multi-channel CATI, mobile surveys and quantitative research",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: MessageSquare,
    title: "Qualitative Research",
    description: "FGDs, IDIs, ethnography and sensory evaluation",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Audits & Polls",
    description: "Location audits, retail census and opinion polls",
    gradient: "from-amber-600 to-amber-700",
  },
];

const stats = [
  { icon: Users, value: "5M+", label: "Consumer Interactions" },
  { icon: TrendingUp, value: "1000+", label: "Projects Delivered" },
  { icon: Sparkles, value: "20+", label: "Countries Covered" },
];

export default function WhatWeDoSection() {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Top fade from white for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />

      {/* Bottom fade to white for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-cyan-100 text-cyan-800 border-cyan-200">
            <Sparkles className="w-3 h-3 mr-1" />
            What We Do
          </Badge>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Transforming Data into
            <span className="block mt-2 text-cyan-700">
              Actionable Insights
            </span>
          </h2>
          <p
            className={`text-lg text-slate-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From market research to qualitative analysis, we provide comprehensive solutions 
            that empower businesses to make informed decisions and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-white mb-12 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const showRight = index !== services.length - 1;
            const showBottom = index !== services.length - 1;
            return (
              <div
                key={service.title}
                className={`relative h-full flex items-stretch group
                  ${showRight ? 'md:border-r border-slate-200' : ''}
                  ${showBottom ? 'border-b border-slate-200 md:border-b-0' : ''}
                `}
              >
                <div className="flex flex-col p-8 w-full items-start">
                  {/* Icon */}
                  <div className="w-10 h-10 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-full h-full text-cyan-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link href="/what-we-do" passHref legacyBehavior>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="cursor-pointer border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white hover:border-cyan-700"
            >
              <span>Learn More</span>
            </Button>
          </Link>
          <p className="text-sm text-slate-500 mt-4">
            Discover how we can help transform your business
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
