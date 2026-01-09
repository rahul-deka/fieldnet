"use client";

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tv, FlaskConical, Factory, ArrowRight, CheckCircle, Trophy } from "lucide-react"
import { ShoppingCart } from "lucide-react"

export default function CaseStudiesSection() {
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
  const featuredCaseStudies = [
    {
      id: 1,
      category: "Market Potential",
      industry: "Pharmaceuticals",
      icon: Trophy, // Use Trophy for visual distinction, or import Pill if available
      title: "Market Potential Assessment for a Pharma Major",
      client: "Global Pharmaceutical Company",
      description:
        "Conducted 60 In-Depth Interviews with doctors, lab managers, and blood bank professionals across Thailand, Brazil, Korea, and China. Combined telephonic interviews with a web-based conjoint analysis to capture preferences and trade-offs.",
      metrics: [
        { label: "Sample Size", value: "60" },
        { label: "Countries", value: "5" },
        { label: "Respondent Type", value: "Healthcare" },
      ],
      results: [
        "Identified key feature preferences and acceptable price ranges across markets",
        "Quantified demand for high-sensitivity test kits and automation capabilities",
        "Delivered market entry strategy recommendations per country",
      ],
    },
    {
      id: 2,
      category: "Retail Audit",
      industry: "FMCG",
      icon: Factory, // Use Factory for visual distinction, or import Store if available
      title: "Shop Census for a Leading FMCG Firm",
      client: "National FMCG Brand",
      description:
        "Executed a full retail census of 50,000 kirana, pan, chemist, confectionery, and bakery shops across Mumbai using map-based beat planning for data accuracy.",
      metrics: [
        { label: "Shops Covered", value: "50,000" },
        { label: "City", value: "Mumbai" },
        { label: "Duration", value: "8 weeks" },
      ],
      results: [
        "Mapped all outlets selling branded/unbranded wafers citywide",
        "Created detailed merchandising heatmaps for targeted outreach",
        "Enabled data-driven retail expansion and sales planning",
      ],
    },
    {
      id: 3,
      category: "Advertising Research",
      industry: "FMCG",
      icon: ShoppingCart,
      title: "Hair Color Ad Effectiveness Study",
      client: "Global FMCG Major",
      description:
        "Conducted 7,200 face-to-face interviews across 9 metro and tier-1 cities. Tracked TV and print campaign effectiveness using pre-post exposure methodology, and measured recall, brand image, and likelihood to purchase.",
      metrics: [
        { label: "Sample Size", value: "7,200" },
        { label: "Cities Covered", value: "9" },
        { label: "Purchase Intent Increase", value: "+29%" },
      ],
      results: [
        "78% ad recall among exposed audience",
        "+29% increase in purchase intent post campaign",
        "Identified strongest creative themes driving recall",
        "Provided actionable media optimization insights",
      ],
    },
  ]

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
            <Trophy className="w-3 h-3 mr-1" />
            Success Stories
          </Badge>
          <h2 className={`text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Featured Case Studies
          </h2>
          <p className={`text-xl leading-8 text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Discover how we've helped leading organizations achieve their research objectives with actionable insights
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {featuredCaseStudies.map((study, index) => {
            const IconComponent = study.icon
            return (
              <Link
                key={study.id}
                href={`/case-studies#case-study-${study.id}`}
                className="block h-full"
              >
                <Card
                  className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden flex flex-col h-full bg-white cursor-pointer hover:border-cyan-400"
                >
                  <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="p-6 pt-0 border-b border-slate-100 bg-white min-h-[220px] flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="text-xs border-cyan-200 text-cyan-700 bg-cyan-50">
                        {study.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan-700 transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      <span className="font-semibold">Client:</span> {study.client}
                    </p>
                    <p className="text-sm text-slate-500 italic">{study.industry}</p>
                  </div>

                  <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-slate-50/50 to-slate-50/30">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {study.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-slate-100">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-cyan-700">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mt-auto">
                      <p className="text-xs font-semibold text-foreground mb-2">Key Results:</p>
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          <p className="text-xs text-muted-foreground">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            )
          })}
        </div>

        <div className={`flex justify-center transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Link href="/case-studies" passHref legacyBehavior>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="cursor-pointer border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white hover:border-cyan-700 group"
            >
              <span className="flex items-center gap-2">
                See All Case Studies
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
