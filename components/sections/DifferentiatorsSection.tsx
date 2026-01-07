"use client";

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Globe, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DifferentiatorsSection() {
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
  <section ref={sectionRef} className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className={`mb-6 bg-cyan-100 text-cyan-800 border-cyan-200 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <Star className="w-3 h-3 mr-1" />
            Why Choose FieldNet
          </Badge>
          <h2 className={`text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>Our Differentiators</h2>
          <p className={`text-xl leading-8 text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            What sets us apart in the competitive market research landscape
          </p>
        </div>
  <div className={`relative grid grid-cols-1 sm:grid-cols-2 border border-slate-200 bg-white transition-all duration-700 delay-300 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}>
          {[
            {
              icon: Award,
              title: "Experienced Leadership",
              description:
                "Our management team combines 150+ years of experience with both client and agency perspectives, having worked with leading organizations like AC Nielsen, IMRB, and Cadbury.",
              color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
            },
            {
              icon: Shield,
              title: "Quality Focused",
              description:
                "Stringent quality control processes including rigorous team recruitment, robust training, real-time monitoring, and independent auditing ensure data accuracy.",
              color: "bg-gradient-to-br from-green-500 to-green-600",
            },
            {
              icon: Globe,
              title: "Global Reach",
              description:
                "Trusted relationships with affiliates across Africa, Middle East, Europe, Asia-Pacific, North America, and Latin America enable multi-country research at competitive costs.",
              color: "bg-gradient-to-br from-purple-500 to-purple-600",
            },
            {
              icon: Zap,
              title: "Cost Effective",
              description:
                "Efficiency-driven cost savings through minimizing wastage and optimized processes, delivering maximum value without compromising quality or timeliness.",
              color: "bg-gradient-to-br from-amber-500 to-amber-600",
            },
          ].map((item, index) => {
            // For 2x2 grid: add right border except for last in row, and bottom border except for last row
            const isLastCol = (index + 1) % 2 === 0;
            const isLastRow = index >= 2;
            // On small screens, add border-b to the third card (index 2)
            return (
              <div
                key={index}
                className={`relative h-full flex items-stretch
                  ${!isLastCol ? 'border-r border-slate-200' : ''}
                  ${!isLastRow || index === 2 ? 'border-b border-slate-200' : ''}
                `}
              >
                <div className="flex flex-col p-8 w-full">
                  <div className="flex items-center mb-2">
                    <div className="flex h-10 w-10 items-center justify-center mr-3 shrink-0">
                      <item.icon className="h-6 w-6" style={{ color: item.color.split(' ').pop()?.replace('from-', '').replace('to-', '') }} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground flex items-center">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`flex justify-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
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
        </div>
      </div>
    </section>
  )
}