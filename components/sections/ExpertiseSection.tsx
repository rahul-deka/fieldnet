"use client";

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Target, TrendingUp, CheckCircle, MapPin, Lightbulb, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExpertiseSection() {
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
            <Briefcase className="w-3 h-3 mr-1" />
            Our Expertise
          </Badge>
          <h2 className={`text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Comprehensive Research Solutions
          </h2>
          <p className={`text-xl leading-8 text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            From concept to execution, we provide integrated research approaches tailored to your specific business
            needs
          </p>
        </div>

  <div className={`relative grid grid-cols-1 lg:grid-cols-3 border border-slate-200 bg-white lg:divide-x lg:divide-y-0 divide-y divide-slate-200 gap-0 transition-all duration-700 delay-300 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}>
          <Card
            className="lg:col-span-2 lg:row-span-2 p-8 border-0 relative overflow-hidden bg-[#0891b2] shadow-none rounded-none from-amber-50 to-amber-100"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <BarChart3 className="h-12 w-12 mb-6 text-white" />
              <h3 className="text-2xl font-bold mb-4 text-white">Market Research Excellence</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Comprehensive quantitative and qualitative research methodologies including surveys, focus groups, and
                in-depth interviews across multiple geographies with advanced statistical analysis.
              </p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Multi-country research capabilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Advanced statistical modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Real-time data collection</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 border-0 bg-gradient-to-br from-amber-50 to-amber-100 shadow-none rounded-none">
            <CardContent className="p-0">
              <Target className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Audits & Polls</h3>
              <p className="text-muted-foreground leading-relaxed">
                Large-scale measurement projects including location audits, retail census, mystery shopping, and
                electoral polls.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border-0 bg-gradient-to-br from-green-50 to-green-100 shadow-none rounded-none">
            <CardContent className="p-0">
              <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Data Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced statistical analysis, content analysis, data tabulation with actionable insights and
                recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 p-8 bg-gradient-to-r from-orange-50 to-rose-50 border-0 shadow-none rounded-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 order-1">
                  <Lightbulb className="h-8 w-8 text-orange-600 flex-shrink-0" />
                </div>
                <div className="flex-1 order-2">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Kaizen Synergy</h3>
                  <p className="text-muted-foreground text-lg">
                    Brand strategy development, creative testing, product innovation, packaging design research, and customer experience optimization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Global Research Network - Outside Grid */}
        <Link href="/who-we-are#global-partnership" aria-label="Go to Global Partnership on Who We Are" className={`block transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 p-8 border border-purple-600 cursor-pointer hover:opacity-95">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4 sm:order-2 order-1">
                <MapPin className="h-10 w-10 text-purple-600" />
                <div className="text-right">
                  <div className="text-4xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
              <div className="flex-1 sm:order-1 order-2">
                <h3 className="text-3xl font-bold mb-3 text-foreground">Global Research Network</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Trusted partnerships across Africa, Middle East, Europe, Asia-Pacific, North America, and Latin America
                </p>
              </div>
            </div>
          </div>
        </Link>

        <div className={`flex justify-center mt-12 transition-all duration-700 delay-700 ${
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