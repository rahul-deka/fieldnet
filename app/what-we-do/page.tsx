export const metadata = {
  title: "What We Do | FieldNet Global Research",
  description: "Explore FieldNet's market research services: data collection, analytics, consulting, and more. Discover our expertise and solutions.",
};
"use client";
import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BackToTopButton from '@/components/back-to-top';
import {
  CheckCircle,
  Users,
  Globe,
  BarChart3,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  Phone,
  Monitor,
  MessageSquare,
  FileText,
  Search,
  Award,
  Eye,
  ClipboardCheck,
  Mic,
  Languages,
  Database,
  Code,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal"

export default function WhatWeDoPage() {
  // Counter animation for Global Execution Capability
  const globalStats = [
    { value: 5, label: 'Surveys Conducted', color: 'text-cyan-400', suffix: 'M+' },
    { value: 2200, label: 'Focus Groups & IDI\'s', color: 'text-amber-400', suffix: '+' },
    { value: 20, label: 'Languages', color: 'text-cyan-400', suffix: '+' },
    { value: 20, label: 'Countries', color: 'text-amber-400', suffix: '+' },
  ];
  const [animatedGlobalStats, setAnimatedGlobalStats] = React.useState(globalStats.map(() => 0));
  const [globalStatsVisible, setGlobalStatsVisible] = React.useState(false);
  const globalStatsRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !globalStatsVisible) {
          setGlobalStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (globalStatsRef.current) observer.observe(globalStatsRef.current);
    return () => {
      if (globalStatsRef.current) observer.unobserve(globalStatsRef.current);
    };
  }, [globalStatsVisible]);

  React.useEffect(() => {
    if (!globalStatsVisible) return;
    globalStats.forEach((stat, idx) => {
      const start = 0;
      const end = stat.value;
      const duration = 2500;
      const startTime = Date.now();
      function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * ease);
        setAnimatedGlobalStats(prev => {
          const arr = [...prev];
          arr[idx] = current;
          return arr;
        });
        if (progress < 1) requestAnimationFrame(animate);
        else setAnimatedGlobalStats(prev => {
          const arr = [...prev];
          arr[idx] = end;
          return arr;
        });
      }
      setTimeout(animate, idx * 150);
    });
  }, [globalStatsVisible]);
  const coreServices = [
    {
      icon: BarChart3,
      title: "Market Research",
      description:
        "Modular services provide clients the flexibility to either commission a full-service project or select only those components that they require.",
      features: [
        "Sample Design",
        "Questionnaire Development",
        "Data Collection",
        "Data Aggregation",
        "Data Processing",
        "Analysis and Reporting",
      ],
    },
    {
      icon: Shield,
      title: "Audits & Polls",
      description:
        "We approach audits and polls with a research mindset enabling us to deliver more than just counts and numbers to our clients.",
      features: ["Location Audits", "Shop/Retail Census", "Mystery Shopping", "Quality Audits", "Opinion Polls"],
    },
    {
      icon: FileText,
      title: "Support Services",
      description:
        "Full range of Market Research support services to provide a seamless service experience and minimize transaction costs.",
      features: ["Transcription", "Translation", "Facilities"],
    },
  ]

  const marketResearchServices = [
    {
      icon: Phone,
      title: "Telephone Interviews",
      features: [
        "CATI",
        "In-depth telephonic interviews",
        "B2C and B2B interviews",
        "Channel (distributor, retailer) interviews",
        "Multilingual capability – all major Indian and Asian languages supported",
        "Access to various consumer databases in India and business directories across Asia",
      ],
    },
    {
      icon: Monitor,
      title: "Mobile Surveys",
      features: [
        "Advanced survey programming capabilities using Confirm IT and other prominent tools",
        "Multilingual support in all major global languages",
        "Access to leading consumer panel providers across the globe",
        "Integrated translation, verbatim coding, data tabulation and reporting",
      ],
    },
    {
      icon: Users,
      title: "Quantitative Research",
      features: [
        "Multilingual online and offline surveys across APAC. Over 5 Million+ surveys were conducted.",
        "Large scale concept testing (CLT)",
        "Car-Clinics",
        "Intercept surveys",
        "Integrated Sales and Promotion using Research capabilities.",
        "Comprehensive urban, semi-urban and rural coverage across APAC.",
      ],
    },
    {
      icon: MessageSquare,
      title: "Qualitative Research",
      features: [
        "Focus Group Discussions (FGDs) – Extended groups, full groups, mini groups, triads and dyads",
        "In-depth Interviews (IDIs) – Single, paired and supervised",
        "Observation Research – Mobile Ethnography, activity clinics, home or business observation",
        "Tracking Studies – Mobile Diary and Journal based activities",
        "Sensory Evaluation – Appearance, odors, texture and taste",
        "Comprehensive urban, semi-urban and rural coverage across Asia",
        "Content Analysis",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analysis and Reporting",
      features: [
        "Content Analysis – From IDI and FGD transcripts",
        "Data Tabulation – Quantum tables including proportions, mean tables, summary tables, top-box",
        "Quantitative Data Analysis – T-tests, correlation, regression, Conjoint Analysis, Van Westendorp (Price Sensitivity) analysis",
        "Qualitative Analysis – Affinity and interrelationship analysis",
        "Reporting – Recurring reports, basic reports and executive reports",
      ],
    },
  ]

  const researchSolutions = [
    {
      icon: Award,
      name: "Brand Health Research/Brand Tracks",
      description:
        "Evaluates congruence between actual and desired perceptions of brand promise, identity and image. Provides benchmarks with competitors.",
      metrics: ["Awareness", "Familiarity", "Consideration", "Preference and loyalty"],
    },
    {
      icon: Target,
      name: "Customer Satisfaction and Loyalty",
      description:
        "Includes classification of customers on the Loyalty Grid, evaluations of emotional, attitudinal and behavioral loyalty. Measures advocacy through NPS.",
      metrics: [],
    },
    {
      icon: TrendingUp,
      name: "Advertising Effectiveness (Pre and Post)",
      description:
        "Includes testing effectiveness of multiple campaigns by using 'Lift Analysis'. In addition to content evaluation, also measures change in perception.",
      metrics: ["Awareness", "Familiarity", "Consideration", "Preference", "Purchase intention", "Advocacy"],
    },
    {
      icon: Lightbulb,
      name: "Product and Concept Testing",
      description:
        "Includes CLTs, Car Clinics, In-home/In-market testing for existing as well as new products and concepts.",
      metrics: [
        "Multiple choice sets (features and attributes)",
        "Price trade-off",
        "Purchase and re-purchase intentions",
      ],
    },
    {
      icon: Building2,
      name: "Packaging Tests",
      description:
        "Includes in-store package tests for standard SKUs as well as special packs (such as Diwali gift packs).",
      metrics: ["Attractiveness", "Durability", "Hygiene", "Ease of use"],
    },
    {
      icon: Search,
      name: "Usage and Attitude Research",
      description:
        "Creates a product/service usage landscape that includes nature (frequency, type and depth) of interactions with your brand and key competitive brands.",
      metrics: [],
    },
    {
      icon: Users,
      name: "Customer Segmentation and Profiling",
      description:
        "Often combined with Usage and Attitude Research, this creates customer segments based on demographic, geographic, behavior or lifestyle attributes.",
      metrics: [],
    },
    {
      icon: ClipboardCheck,
      name: "Feasibility Studies",
      description:
        "Assess viability of new products, services or initiatives by combining market, operational and financial analyses to guide investment decisions.",
      metrics: [],
    },
    {
      icon: Users,
      name: "Skill Gap Analysis",
      description:
        "Identify competency shortfalls across teams or markets to inform training, hiring and organizational development plans.",
      metrics: [],
    },
    {
      icon: Building2,
      name: "Retail Audit",
      description:
        "Store-level assessments including shelf visibility, compliance, merchandising and availability checks to optimize in-store execution.",
      metrics: [],
    },
    {
      icon: Eye,
      name: "Foot Traffic Analysis",
      description:
        "Measure and analyze shopper footfall patterns and dwell times to support store layout optimization and location planning.",
      metrics: [],
    },
    {
      icon: TrendingUp,
      name: "Impact Analysis",
      description:
        "Quantify the effect of interventions or business decisions on sales, brand metrics and other key performance indicators.",
      metrics: [],
    },
    {
      icon: Target,
      name: "Advertisement and Campaign Effectiveness",
      description:
        "Evaluate ad and campaign performance using lift analysis, brand metrics and conversion measures to optimize creative and media.",
      metrics: [],
    },
    {
      icon: Globe,
      name: "Market Entry Strategy Development",
      description:
        "Tailored market-entry planning for international markets including competitor landscaping, regulatory considerations and channel strategy.",
      metrics: [],
    },
  ]

  const auditServices = [
    { icon: Building2, name: "Location Audits/Highway Traffic Analysis", description: "Identifying most attractive locations for branding" },
    {
      icon: ClipboardCheck,
      name: "Shop/Retail Census and Audits",
      description: "Off-take and footfall analysis, product display and merchandising review",
    },
    {
      icon: Eye,
      name: "Mystery Shopping",
      description: "Salesperson and shopper experience evaluation, promotion implementation",
    },
    {
      icon: Shield,
      name: "Quality Audits",
      description: "Spot checks and back checks for Market Research data validation",
    },
    {
      icon: Users,
      name: "Polls",
      description: "Entrance and exit polls (electoral), opinion tracking polls and public relations polls",
    },
  ]

  const supportServices = [
    {
      icon: Mic,
      name: "Transcription",
      description:
        "Content from video recorded interviews and FGD's and audio files from qualitative in-depth interviews",
    },
    { icon: Globe, name: "Translation", description: "English translation from all major Indian languages" },
    {
      icon: Building2,
      name: "Facilities",
      description:
        "Venue for FGDs, IDIs, CLTs etc. with all necessary infrastructure in place – AV recording, video streaming, one way mirrors, qualified interpreters etc.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        {/* Hero Section */}
        <Reveal>
          <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            {/* tiny-badge: adds extra top margin only on very small screens (<=305px) */}
            <style jsx>{`@media (max-width:305px){ .tiny-badge{ margin-top:0.5rem !important; } }`}</style>
            <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6 tiny-badge">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-100">Comprehensive Research Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              What We <span className="text-cyan-400">Do</span>
            </h1>

            <p className="text-xl text-slate-300 mb-6 leading-relaxed text-pretty">
              FieldNet Global Research LLP extensive experience in multiple Market Research methodologies allows us to
              create customized and integrated research approaches that best meet our clients' specific needs.
            </p>

            <p className="text-lg text-slate-400 mb-8 text-pretty">
              In addition to core research services, we offer validation services (Audits and Polls) as well as other
              support services such as data analysis and reporting, data tabulation, transcription etc.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white cursor-pointer"
                onClick={() => {
                  const servicesSection = document.querySelector('#our-services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent cursor-pointer hover:text-white">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
          </section>
        </Reveal>

        {/* Core Services Overview */}
        <Reveal>
          <section id="our-services" className="py-24 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-200">
                Comprehensive Solutions
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Our Services</h2>
              <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
                Project management capabilities coupled with a strong network of partners allows us to optimize project
                execution in all major geographies, handling multilingual and multi-country assignments with ease.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 border border-slate-200 bg-white">
              {coreServices.map((service, index) => {
                // For 3-column grid: add right border except for last in row, and bottom border for mobile
                const isLastCol = (index + 1) % 3 === 0;
                const isMiddleCol = (index + 1) % 3 === 2;
                
                return (
                  <div
                    key={index}
                    className={`relative h-full flex items-stretch
                      ${!isLastCol ? 'md:border-r border-slate-200' : ''}
                      ${index < coreServices.length - 1 ? 'border-b border-slate-200 md:border-b-0' : ''}
                      ${isMiddleCol ? 'md:border-r border-slate-200' : ''}
                    `}
                  >
                    <div className="flex flex-col p-8 w-full group">
                      <div className="flex items-center mb-6">
                        <div className="flex h-12 w-12 items-center justify-center mr-4 shrink-0">
                          <div className="p-3 bg-cyan-100 rounded-xl group-hover:bg-cyan-600 transition-colors duration-300">
                            <service.icon className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed text-justify md:text-left">{service.description}</p>
                      <ul className="space-y-3 flex-grow">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-700">
                            <CheckCircle className="h-4 w-4 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-justify md:text-left">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </section>
        </Reveal>

        {/* Market Research Services - Detailed */}
        <Reveal>
          <section id="market-research-services" className="py-20  bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-200">
                Modular Services
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Market Research Services</h2>
              <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
                Modular services provide clients the flexibility to either commission a full-service project or select only those components that they require. Our team contributes in all areas from sample design to analysis and reporting.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 border border-slate-200 bg-white">
              {/* First row: 3 columns */}
              {marketResearchServices.slice(0, 3).map((service, index) => {
                const isLastCol = (index + 1) % 3 === 0;
                return (
                  <div
                    key={index}
                    className={`relative h-full flex items-stretch
                      ${!isLastCol ? 'md:border-r border-slate-200' : ''}
                      border-b border-slate-200
                    `}
                  >
                    <div className="flex flex-col p-8 w-full group">
                      <div className="flex items-center mb-6">
                        <div className="flex h-12 w-12 items-center justify-center mr-4 shrink-0">
                          <div className="p-3 bg-cyan-100 rounded-xl group-hover:bg-cyan-600 transition-colors duration-300">
                            <service.icon className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      </div>
                      <ul className="space-y-3 flex-grow">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-700">
                            <CheckCircle className="h-4 w-4 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-justify md:text-left">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
              {/* Second row: 2 columns, each 50% width */}
              {/* Divider between first and second row */}
              <div className="w-full border-t border-slate-200" />
              <div className="md:col-span-3 w-full flex flex-col md:flex-row">
                {marketResearchServices.slice(3, 5).map((service, index) => (
                  <div
                    key={index}
                    className={`relative h-full flex items-stretch w-full md:w-1/2
                      ${index === 0 ? 'md:border-r border-slate-200 border-b border-slate-200 md:border-b-0' : ''}
                    `}
                  >
                    <div className="flex flex-col p-8 w-full group">
                      <div className="flex items-center mb-6">
                        <div className="flex h-12 w-12 items-center justify-center mr-4 shrink-0">
                          <div className="p-3 bg-cyan-100 rounded-xl group-hover:bg-cyan-600 transition-colors duration-300">
                            <service.icon className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      </div>
                      <ul className="space-y-3 flex-grow">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-700">
                            <CheckCircle className="h-4 w-4 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </section>
        </Reveal>

        {/* Market Research Solutions */}
        <Reveal>
          <section id="market-research-solutions" className="py-20 bg-gradient-to-br from-slate-900 to-cyan-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-cyan-200 border-cyan-400 bg-white/10">
                Specialized Solutions
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">Market Research Solutions</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Specialized research approaches tailored to specific business challenges and objectives
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 border border-white/20 bg-white/5 divide-y divide-white/10">
              {researchSolutions.map((solution, index) => {
                // 2-column grid: right border except last column on md; on mobile (single column) show bottom border between items
                const isLastCol = (index + 1) % 2 === 0;
                // compute rows and current row to determine last row correctly for md layout
                const rowCount = Math.ceil(researchSolutions.length / 2);
                const currentRow = Math.floor(index / 2) + 1; // 1-based
                const isLastRow = currentRow === rowCount;
                const isNotLastMobile = index !== researchSolutions.length - 1;
                return (
                  <div
                    key={index}
                    className={`relative h-full flex items-stretch
                      ${!isLastCol ? 'md:border-r border-white/10' : ''}
                    `}
                  >
                    <div className="flex flex-col p-8 w-full group">
                      <div className="flex items-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center mr-4 shrink-0">
                          <div className="p-3 bg-amber-100/20 rounded-xl group-hover:bg-amber-400 transition-colors duration-300">
                            <solution.icon className="h-6 w-6 text-amber-400 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white">{solution.name}</h3>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed mb-3 text-justify md:text-left">{solution.description}</p>
                      {solution.metrics.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {solution.metrics.map((metric, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="bg-cyan-400/10 text-cyan-300 border-cyan-400/30"
                            >
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </section>
        </Reveal>

        {/* Audits and Polls */}
        <Reveal>
          <section id="audits-and-polls" className="py-20 bg-gradient-to-br from-cyan-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-200">
                Validation Services
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Audits and Polls</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                FieldNet Global Research LLP approaches audits and polls with a research mindset enabling us to deliver
                more than just counts and numbers to our clients. All our projects mandate that the execution team should
                answer the question <span className="font-bold text-cyan-700 text-2xl">WHY?</span> – To help our clients get a
                richer perspective on the audit or poll outcomes.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 border border-slate-200 bg-white">
              {/* First row: 3 columns */}
              {auditServices.slice(0, 3).map((service, index) => {
                const isLastCol = (index + 1) % 3 === 0;
                return (
                  <div
                    key={index}
                    className={`relative h-full flex items-stretch
                      ${!isLastCol ? 'md:border-r border-slate-200' : ''}
                      border-b border-slate-200
                    `}
                  >
                    <div className="flex flex-col p-8 w-full group">
                      <div className="flex items-center mb-6">
                        <div className="flex h-12 w-12 items-center justify-center mr-4 shrink-0">
                          <div className="p-3 bg-cyan-100 rounded-xl group-hover:bg-cyan-600 transition-colors duration-300">
                            <service.icon className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-2 text-justify md:text-left">{service.description}</p>
                    </div>
                  </div>
                );
              })}
              {/* Divider between first and second row */}
              <div className="w-full border-t border-slate-200" />
              {/* Second row: 2 columns, each 50% width */}
              <div className="md:col-span-3 w-full flex flex-col md:flex-row">
                {auditServices.slice(3, 5).map((service, index) => (
                  <div
                    key={index}
                    className={`relative h-full flex items-stretch w-full md:w-1/2
                      ${index === 0 ? 'md:border-r border-slate-200 border-b border-slate-200 md:border-b-0' : ''}
                    `}
                  >
                    <div className="flex flex-col p-8 w-full group">
                      <div className="flex items-center mb-6">
                        <div className="flex h-12 w-12 items-center justify-center mr-4 shrink-0">
                          <div className="p-3 bg-cyan-100 rounded-xl group-hover:bg-cyan-600 transition-colors duration-300">
                            <service.icon className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-2 text-justify md:text-left">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </section>
        </Reveal>

        {/* Support Services */}
        <Reveal>
          <section id="market-research-support-services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-amber-700 border-amber-200">
                Support Services
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Market Research Support Services</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                While we encourage our clients to use only those services that they need, we actively recommend that they
                take advantage of our expertise in providing the full range of Market Research support services. Our aim
                is to provide a seamless service experience to all our clients and minimize the transaction costs of
                engaging with agencies for their Market Research needs.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 border border-amber-200 bg-white">
              {supportServices.map((service, index) => {
                const isLastCol = (index + 1) % 3 === 0;
                const isLastCard = index === supportServices.length - 1;
                return (
                  <div
                    key={index}
                    className={`relative h-full flex items-stretch
                      ${!isLastCol ? 'md:border-r border-amber-200' : ''}
                      ${!isLastCard ? 'border-b border-amber-200 md:border-b-0' : ''}
                    `}
                  >
                    <div className="flex flex-col p-8 w-full group">
                      <div className="flex items-center mb-6">
                        <div className="flex h-12 w-12 items-center justify-center mr-4 shrink-0">
                          <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-400 transition-colors duration-300">
                            <service.icon className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{service.description}</p>
                    </div>
                  </div>
                );
              })}
              {/* Add empty cells for alignment if needed */}
              {supportServices.length % 3 !== 0 && Array.from({ length: 3 - (supportServices.length % 3) }).map((_, idx) => (
                <div key={`empty-${idx}`} className="hidden md:block" />
              ))}
            </div>
          </div>
          </section>
        </Reveal>

        {/* Global Reach Stats */}
        <Reveal>
          <section className="py-20 px-6 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6" ref={globalStatsRef}>
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-4xl font-bold text-white text-center">Global Execution Capability</h2>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 text-pretty text-center">
              Our project management capabilities coupled with a strong network of partners allows us to optimize project
              execution in all major geographies, handling multilingual and multi-country assignments with ease.
            </p>
            <div className="relative grid grid-cols-1 md:grid-cols-4 border border-cyan-400 bg-white/5 divide-y divide-cyan-400 md:divide-y-0">
              {globalStats.map((stat, index) => {
                const isLastCol = (index + 1) % 4 === 0;
                return (
                  <div
                    key={index}
                    className={`relative h-full flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-sm
                      ${!isLastCol ? 'md:border-r md:border-cyan-400' : ''}
                    `}
                  >
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                      {globalStatsVisible
                        ? `${animatedGlobalStats[index].toLocaleString()}${stat.suffix}`
                        : `0${stat.suffix}`}
                    </div>
                    <div className="text-slate-300 text-center">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section className=" border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="border border-cyan-700 bg-cyan-600 h-full flex flex-col md:flex-row p-8 items-start md:items-center md:justify-between gap-4">
              <div>
                <div className="uppercase text-sm font-medium text-white mb-2">Ready to Collaborate?</div>
                <h3 className="text-xl font-semibold text-white mb-1">Work with a seasoned global research team</h3>
                <p className="text-white/90 mb-4">
                  Let’s apply the right methodologies and quality controls to answer your toughest questions.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center bg-white px-5 py-2.5 text-base font-bold text-cyan-600 shadow-lg transition-colors hover:bg-indigo-50 md:ml-auto whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
          </section>
        </Reveal>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
