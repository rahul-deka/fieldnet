export const metadata = {
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Globe2, Lightbulb, FlaskConical, Gauge, Shuffle, Headphones, Users2, Building2, Trophy, CheckCircle, Handshake } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import BackToTopButton from "@/components/back-to-top";
import Reveal from "@/components/reveal";

export default function WhoWeArePage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const [isPhilosophyVisible, setIsPhilosophyVisible] = useState(false);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const [isPartnershipVisible, setIsPartnershipVisible] = useState(false);
  const partnershipRef = useRef<HTMLDivElement>(null);
  const [isLeadershipVisible, setIsLeadershipVisible] = useState(false);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isClientsVisible, setIsClientsVisible] = useState(false);
  const clientsRef = useRef<HTMLDivElement>(null);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStoryVisible(true);
        }
      },
      { threshold: isMobile ? 0.3 : 0.5 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPhilosophyVisible(true);
        }
      },
      { threshold: isMobile ? 0.3 : 0.5 }
    );

    if (philosophyRef.current) {
      observer.observe(philosophyRef.current);
    }

    return () => {
      if (philosophyRef.current) {
        observer.unobserve(philosophyRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPartnershipVisible(true);
        }
      },
      { threshold: isMobile ? 0.3 : 0.5 }
    );

    if (partnershipRef.current) {
      observer.observe(partnershipRef.current);
    }

    return () => {
      if (partnershipRef.current) {
        observer.unobserve(partnershipRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLeadershipVisible(true);
        }
      },
      { threshold: isMobile ? 0.1 : 0.3 }
    );

    if (leadershipRef.current) {
      observer.observe(leadershipRef.current);
    }

    return () => {
      if (leadershipRef.current) {
        observer.unobserve(leadershipRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true);
        }
      },
      { threshold: isMobile ? 0.1 : 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsClientsVisible(true);
        }
      },
      { threshold: isMobile ? 0.1 : 0.3 }
    );

    if (clientsRef.current) {
      observer.observe(clientsRef.current);
    }

    return () => {
      if (clientsRef.current) {
        observer.unobserve(clientsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
        }
      },
      { threshold: isMobile ? 0.3 : 0.5 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const hash = window.location.hash
    if (hash) {
      const id = hash.slice(1)
      // Wait a tick for content to render, then scroll
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          // account for sticky header height so the section isn't hidden
          const header = document.querySelector('header') as HTMLElement | null
          const headerHeight = header ? header.offsetHeight : 80
          const rect = el.getBoundingClientRect()
          // subtract header height but add a small positive gap so we don't overshoot
          const targetY = rect.top + window.scrollY - headerHeight + 8
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  // Clients list and active cycling animation
  const clients = [
    { name: 'Forrester', logo: 'forrester.png' },
    { name: 'Bisleri', logo: 'bisleri.png' },
    { name: 'Coca-Cola', logo: 'coca-cola.png' },
    { name: 'Emami', logo: 'emami.png' },
    { name: 'Epigamia', logo: 'epigamia.png' },
    { name: 'Visa', logo: 'visa.png' },
    { name: 'Frost & Sullivan', logo: 'frostandsullivan.png' },
    { name: 'Genpact', logo: 'genpact.png' },
    { name: 'Godrej', logo: 'godrej.png' },
    { name: 'Haier', logo: 'haier.png' },
    { name: 'LG', logo: 'lg.png' },
    { name: 'Hersheys', logo: 'hersheys.png' },
    { name: 'ITC', logo: 'itc.png' },
    { name: 'HDFC', logo: 'hdfc.png' },
    { name: 'McDonalds', logo: 'mcd.png' },
    { name: 'Mother Dairy', logo: 'motherdairy.png' },
    { name: 'Nielsen', logo: 'nielsen.png' },
    { name: 'NPCI', logo: 'npci.png' },
    { name: 'P&G', logo: 'p&g.png' },
    { name: 'Pepsi', logo: 'pepsi.png' },
    { name: 'Saffola', logo: 'saffola.png' },
    { name: 'Unilever', logo: 'unilever.png' },
    { name: 'Ayush', logo: 'ayush.png' },
    { name: 'ZMedia', logo: 'zmedia.png' },
  ];

  const [activeClient, setActiveClient] = React.useState(0);
  React.useEffect(() => {
    if (clients.length === 0) return;
    const interval = setInterval(() => {
      setActiveClient((i) => (i + 1) % clients.length);
    }, 900); // change active logo every 900ms
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <Reveal>
          <section ref={heroRef} className="relative bg-gradient-to-b from-cyan-50 to-white overflow-hidden lg:pt-24">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
            
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-float" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-400/40 rounded-full animate-float-delayed" />
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-500/30 rounded-full animate-float-slow" />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-amber-500/30 rounded-full animate-float-delayed" />
            <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-cyan-400/35 rounded-full animate-float" />
            <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-amber-400/35 rounded-full animate-float-slow" />
            <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-cyan-500/40 rounded-full animate-float-delayed" />
            <div className="absolute bottom-1/2 right-1/4 w-2 h-2 bg-amber-500/35 rounded-full animate-float" />
            <div className="absolute top-1/5 left-3/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-slow" />
            <div className="absolute bottom-2/3 right-2/3 w-3 h-3 bg-amber-400/30 rounded-full animate-float-delayed" />
            <div className="absolute top-3/5 left-1/6 w-2 h-2 bg-cyan-500/35 rounded-full animate-float" />
            <div className="absolute bottom-1/5 right-1/6 w-2 h-2 bg-amber-500/40 rounded-full animate-float-slow" />
            <div className="absolute top-2/5 right-3/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-float-delayed" />
            <div className="absolute bottom-3/5 left-3/5 w-3 h-3 bg-amber-400/35 rounded-full animate-float" />
            <div className="absolute top-4/5 right-2/5 w-2 h-2 bg-cyan-500/30 rounded-full animate-float-slow" />
            <div className="absolute bottom-2/5 left-2/5 w-2 h-2 bg-amber-500/35 rounded-full animate-float-delayed" />
            
            {/* Additional particles focused on right side (stats area) */}
            <div className="absolute top-1/6 right-1/5 w-2 h-2 bg-amber-400/45 rounded-full animate-float" />
            <div className="absolute top-2/6 right-1/3 w-3 h-3 bg-orange-400/40 rounded-full animate-float-slow" />
            <div className="absolute top-3/6 right-1/4 w-2 h-2 bg-amber-500/40 rounded-full animate-float-delayed" />
            <div className="absolute top-4/6 right-2/5 w-2 h-2 bg-orange-500/35 rounded-full animate-float" />
            <div className="absolute top-5/6 right-1/6 w-3 h-3 bg-amber-400/40 rounded-full animate-float-slow" />
            <div className="absolute top-1/3 right-2/6 w-2 h-2 bg-orange-400/45 rounded-full animate-float-delayed" />
            <div className="absolute top-2/3 right-3/5 w-2 h-2 bg-amber-500/40 rounded-full animate-float" />
            <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-orange-500/40 rounded-full animate-float-slow" />
            <div className="absolute bottom-1/6 right-2/5 w-3 h-3 bg-amber-400/35 rounded-full animate-float-delayed" />
            <div className="absolute bottom-2/6 right-1/4 w-2 h-2 bg-orange-400/40 rounded-full animate-float" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={`transition-all duration-700 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">
                  <Handshake className="w-3 h-3 mr-1" />
                  About FieldNet
                </Badge>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Who We Are
          </h1>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
                  FieldNet Global Research LLP is a full‑service market research agency, formed in December 2005. We bring
                  a unique blend of client‑side and agency‑side expertise to deliver integrated, insightful research
                  across sectors and geographies.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Badge variant="outline" className="border-cyan-600 text-cyan-700">
                    Full‑Service MR
                  </Badge>
                  <Badge variant="outline" className="border-cyan-600 text-cyan-700">
                    Global Reach
                  </Badge>
                  <Badge variant="outline" className="border-cyan-600 text-cyan-700">
                    Quant + Qual
                  </Badge>
                </div>
              </div>
              <div className={`relative transition-all duration-700 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {/* Gradient background */}
                <div className="absolute inset-0 -inset-x-4 -inset-y-4 bg-gradient-to-br from-amber-150 via-orange-150 to-amber-250 rounded-lg blur-2xl opacity-40 -z-10"></div>
                
                <div className="relative grid grid-cols-1 sm:grid-cols-2 border border-slate-200 bg-white shadow-lg">
                {[
                  {
                    icon: <Trophy className="h-8 w-8 text-amber-500" />,
                    label: "Founded",
                    value: "2004"
                  },
                  {
                    icon: <Users2 className="h-8 w-8 text-cyan-600" />,
                    label: "Leadership Experience",
                    value: "150+ yrs"
                  },
                  {
                    icon: <Globe2 className="h-8 w-8 text-blue-500" />,
                    label: "Global Footprint",
                    value: "6+ regions"
                  },
                  {
                    icon: <Building2 className="h-8 w-8 text-teal-500" />,
                    label: "Sectors",
                    value: "15+"
                  }
                ].map((item, index) => {
                  const isLastCol = (index + 1) % 2 === 0;
                  const isLastRow = index >= 2;
                  return (
                    <div
                      key={item.label}
                      className={`relative h-full flex items-stretch
                        ${!isLastCol ? 'border-r border-slate-200' : ''}
                        ${!isLastRow || index === 2 ? 'border-b border-slate-200' : ''}
                      `}
                    >
                      <div className="flex flex-row p-8 w-full items-center">
                        <div className="flex items-center justify-center mr-4 shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="uppercase text-sm font-medium text-slate-500 mb-0.5">{item.label}</div>
                          <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
            </div>
          </div>
          </section>
        </Reveal>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
          <div className="border-t border-slate-200"></div>
        </div>

        {/* About Overview */}
        <Reveal>
          <section ref={storyRef} className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
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
          <div className="grid gap-10 lg:grid-cols-12">
            <div className={`lg:col-span-7 transition-all duration-700 ${isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Story</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The company is led by passionate veterans from the Market Research industry. With a collective Market
                Research and Marketing experience of over 150 years, members of our core management team have worked with
                leading organizations such as AC Nielsen, IMRB, MARG, Cadbury, Puma, and BPL. This diverse background
                enables us to bring both a client perspective and an agency perspective to every project.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our delivery model, perfected over more than a decade, gives clients access to multiple geographic
                markets, diverse consumer segments, exceptional global research talent, and best‑in‑class project
                management at highly competitive costs.
              </p>
            </div>
            <div className={`lg:col-span-5 transition-all duration-700 ${isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="border border-slate-200 bg-white h-full flex flex-col p-8 justify-start">
                <div className="uppercase text-sm font-medium text-slate-500 mb-2">What Clients Gain</div>
                <ul className="space-y-3 text-slate-600 pl-4 list-disc">
                  <li>Integrated, insight‑driven solutions across methodologies</li>
                  <li>Rigorous quality focus from team to data to delivery</li>
                  <li>Seamless access to multilingual and multi‑country execution</li>
                  <li>Efficient cost structures without compromising quality</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          </section>
        </Reveal>

        {/* Philosophy */}
        <Reveal>
          <section ref={philosophyRef} id="philosophy" className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
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
            <h2 className={`text-2xl font-bold tracking-tight text-slate-900 transition-all duration-700 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Our Philosophy</h2>
            <p className={`mt-3 text-slate-600 transition-all duration-700 delay-100 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>FieldNet bases its work philosophy on striking an optimal balance on 'five pillars of work' that foster trust, productivity and exceptional quality of service delivery.</p>
            <div className={`mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-slate-200 bg-white transition-all duration-700 delay-200 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {[
                {
                  icon: <Users2 className="h-6 w-6 text-cyan-700" />,
                  title: "Client‑centric",
                  text: "Everything we do is focused on delivering measurable value to our clients."
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-cyan-700" />,
                  title: "Data Quality & Transparency",
                  text: "Rigorous quality controls, transparent methods, and clear reporting."
                },
                {
                  icon: <Lightbulb className="h-6 w-6 text-cyan-700" />,
                  title: "Innovation & Adaptability",
                  text: "Evolving methodologies and tools to meet changing market needs."
                },
                {
                  icon: <Trophy className="h-6 w-6 text-cyan-700" />,
                  title: "Commitment to Excellence",
                  text: "Relentless attention to detail and high standards across every project."
                },
                {
                  icon: <Handshake className="h-6 w-6 text-cyan-700" />,
                  title: "Collaboration & Partnership",
                  text: "Working closely with clients and partners to co‑create effective solutions."
                }
              ].map((item, index, arr) => {
                // Show right border except last item on desktop, bottom border except last item on mobile
                const showRight = index !== arr.length - 1;
                const showBottom = index !== arr.length - 1;
                return (
                  <div
                    key={item.title}
                    className={`relative h-full flex items-stretch
                      ${showRight ? 'sm:border-r border-slate-200' : ''}
                      ${showBottom ? 'border-b border-slate-200 sm:border-b-0' : ''}
                    `}
                  >
                    <div className="flex flex-col p-8 w-full items-start">
                      <div className="flex flex-row items-center mb-2">
                        {/* fixed-size icon box so all icons align on the same horizontal */}
                        <span className="flex items-center justify-center mr-3 shrink-0 h-8 w-8 rounded-full">
                          <span className="flex items-center justify-center text-cyan-700">{item.icon}</span>
                        </span>
                        <span className="uppercase text-sm font-medium text-slate-500 leading-tight">{item.title}</span>
                      </div>
                      <div className="text-base text-slate-700 leading-tight pl-1 text-justify md:text-left">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </section>
        </Reveal>

        {/* Global Partnership */}
        <Reveal>
          <section ref={partnershipRef} id="global-partnership" className="py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className={`mb-12 transition-all duration-700 ${isPartnershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                Global Partnership
              </h2>
              <p className="text-lg text-slate-600">
                Operating across 20+ countries, delivering insights worldwide
              </p>
            </div>

            <div className={`relative transition-all duration-700 delay-200 ${isPartnershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Left fade overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

              {/* Right fade overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

              <Carousel
                plugins={[
                  Autoplay({
                    delay: 1000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {[
                    { name: "India", code: "in" },
                    { name: "Sri Lanka", code: "lk" },
                    { name: "Nepal", code: "np" },
                    { name: "Bhutan", code: "bt" },
                    { name: "Malaysia", code: "my" },
                    { name: "Japan", code: "jp" },
                    { name: "Indonesia", code: "id" },
                    { name: "Thailand", code: "th" },
                    { name: "UAE", code: "ae" },
                    { name: "South Africa", code: "za" },
                    { name: "Singapore", code: "sg" },
                    { name: "USA", code: "us" },
                    { name: "South Korea", code: "kr" },
                    { name: "China", code: "cn" },
                    { name: "Vietnam", code: "vn" },
                    // Duplicate for seamless loop
                    { name: "India", code: "in" },
                    { name: "Sri Lanka", code: "lk" },
                    { name: "Nepal", code: "np" },
                    { name: "Bhutan", code: "bt" },
                    { name: "Malaysia", code: "my" },
                    { name: "Japan", code: "jp" },
                    { name: "Indonesia", code: "id" },
                    { name: "Thailand", code: "th" },
                    { name: "UAE", code: "ae" },
                    { name: "South Africa", code: "za" },
                    { name: "Singapore", code: "sg" },
                    { name: "USA", code: "us" },
                    { name: "South Korea", code: "kr" },
                    { name: "China", code: "cn" },
                    { name: "Vietnam", code: "vn" },
                  ].map((country, index) => (
                    <CarouselItem key={`${country.code}-${index}`} className="pl-4 basis-auto">
                      <div className="flex flex-col items-center justify-center px-1">
                        <span
                          className={`fi fi-${country.code} mb-3 ${country.code === 'np' ? '' : 'shadow-md'}`}
                          style={{ fontSize: '4rem', display: 'inline-block' }}
                        ></span>
                        <p className="text-sm font-semibold text-slate-900 whitespace-nowrap">{country.name}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          </section>
        </Reveal>

  {/* Leadership & Advisors */}
  <Reveal>
  <section ref={leadershipRef} id="team" className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
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
          <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-700 ${isLeadershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Leadership & Advisors</h2>
            <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100 w-fit">
              150+ years combined experience
            </Badge>
          </div>
          <div className={`mt-8 border border-slate-200 bg-white transition-all duration-700 delay-200 ${isLeadershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* First two cards in a separate row at the top */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 border-b border-slate-200 bg-white">
              {[
                { name: "Kamlesh Shukla", position: "Founder & Managing Director", years: '—', exCompany: '—' },
                { name: "Ms. Pooja Shukla", position: "CEO", years: '—', exCompany: '—' },
              ].map((person, index) => (
                <div
                  key={person.name}
                  className={`flex flex-col items-center p-6 ${index === 0 ? 'sm:border-r border-slate-200 border-b sm:border-b-0' : ''}`}
                >
                  <img
                    src="/placeholder-user.jpg"
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover mb-3 border border-slate-200 bg-slate-100"
                  />
                  <div className="text-lg font-bold text-slate-900 mb-1 text-center">{person.name}</div>
                  <div className="text-sm text-slate-600 text-center">{person.position}</div>
                  <div className="text-sm text-slate-600 text-center mt-1">
                    <span className="font-medium text-slate-700">{person.years || '—'}</span>
                    <span className="mx-2 text-slate-400">•</span>
                    <span>{person.exCompany || '—'}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Rest of the cards in a 4-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Ravish Khare", position: "Head, Retail Audits & AI Research", years: '—', exCompany: '—' },
                { name: "A Ravindran", position: "Senior Research Advisor & Mentor", years: '—', exCompany: '—' },
                { name: "Ms. Geeta Shukla", position: "Executive Director", years: '—', exCompany: '—' },
                { name: "Aneesh Laiwala", position: "Consultant, Analysis", years: '—', exCompany: '—' },
                { name: "Arun Bhalerao", position: "Senior Consultant", years: '—', exCompany: '—' },
                { name: "Ms. Deepa Harjani", position: "Sr. Consultant, Market Research", years: '—', exCompany: '—' },
                { name: "Utpal Ghosh", position: "Research Consultant", years: '—', exCompany: '—' },
                { name: "Supriya Hardikar", position: "Head, Qualitative Research", years: '—', exCompany: '—' },
                { name: "Deepti Rege", position: "Qualitative Researcher (Consultant)", years: '—', exCompany: '—' },
                { name: "Biplab Ghosh", position: "Consultant Adviser", years: '—', exCompany: '—' },
                { name: "Umesh Jha", position: "Consultant, Quantitative Research", years: '—', exCompany: '—' },
                { name: "Manisha Jaiswal", position: "Qual & Quant Client Servicing (Consultant)", years: '—', exCompany: '—' },
              ].map((person, index, arr) => {
                const cols = 4;
                const total = arr.length;
                const colIndex = index % cols;
                const rowIndex = Math.floor(index / cols);
                const lastRowStartIndex = Math.floor((total - 1) / cols) * cols;
                const isInLastRow = index >= lastRowStartIndex;
                const cardsInLastRow = total - lastRowStartIndex;

                // Show right border if not the last card in the row
                const showRight = isInLastRow ? colIndex < cardsInLastRow - 1 : colIndex < cols - 1;
                // Show bottom border if not in the last row
                const showBottom = !isInLastRow;
                return (
                  <div
                    key={person.name}
                    className={`flex flex-col items-center p-6
                      ${showRight ? 'border-r border-slate-200' : ''}
                      ${showBottom ? 'border-b border-slate-200' : ''}
                    `}
                  >
                    <img
                      src="/placeholder-user.jpg"
                      alt={person.name}
                      className="w-20 h-20 rounded-full object-cover mb-3 border border-slate-200 bg-slate-100"
                    />
                    <div className="text-lg font-bold text-slate-900 mb-1 text-center">{person.name}</div>
                    <div className="text-sm text-slate-600 text-center">{person.position}</div>
                    <div className="text-sm text-slate-600 text-center mt-1">
                      <span className="font-medium text-slate-700">{person.years || '—'}</span>
                      <span className="mx-2 text-slate-400">•</span>
                      <span>{person.exCompany || '—'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
  </section>        
  </Reveal>

        {/* Us over the years (Timeline) */}
        <Reveal>
          <section ref={timelineRef} className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
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
          <div className={`transition-all duration-700 ${isTimelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Us over the years</h2>
          <p className="mt-3 text-slate-600">A brief timeline showing key milestones in FieldNet's journey.</p>
          </div>

          <div className={`mt-8 transition-all duration-700 delay-200 ${isTimelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative">
              {/* continuous vertical line for timeline - desktop */}
              <div className="hidden lg:block absolute left-[124px] top-0 bottom-0 w-px bg-slate-200 z-0" />
              {/* continuous vertical line for timeline - mobile */}
              <div className="lg:hidden absolute left-[18px] top-0 bottom-0 w-px bg-slate-200 z-0" />
              <div className="space-y-8">
                {[
                  {
                    year: '2004', title: 'Humble Beginnings', bullets: [
                      'Founder: Mr. Kamlesh Shukla, with a rich background at Nielsen and Ipsos, established FieldNet as a proprietary company.',
                      'Employee Strength: 2 dedicated employees.',
                      'Focus: Initially focused on small-scale market research projects.',
                    ]
                  },
                  {
                    year: '2015', title: 'The Transformation', bullets: [
                      'From Proprietor to LLP: FieldNet transitioned from a proprietary firm to a Limited Liability Partnership (LLP).',
                      'Employee Strength: 40 in-house employees and a field force of 100.',
                      'Reach: Expanded operations across Pan India.',
                      'Services: Introduced CATI (Computer Assisted Telephone Interviewing), CAPI (Computer Assisted Personal Interviewing), and Software Development services.',
                    ]
                  },
                  {
                    year: '2016', title: 'Expansion and Growth', bullets: [
                      'Employee Strength: 10 in-house employees and 600 field personnel.',
                      'Global Reach: Expanded operations beyond India into APAC and MENA (Middle East and North Africa).',
                      'Partnerships: Established 20 strategic partnerships across regions.',
                      'Field Strength: Increased to 50 highly skilled professionals, driving success in data collection and analysis.',
                    ]
                  },
                  {
                    year: '2019', title: 'Leadership Transition - Scaling New Heights', bullets: [
                      'Pooja Takes Over: Pooja Shukla, one of India\'s youngest CEOs, took over leadership, bringing a fresh vision to FieldNet.',
                      'Focus: Continued innovation in software development and technology integration, laying the foundation for future growth.',
                      'Geographic Expansion: Further strengthened its presence in APAC and MENA regions.',
                    ]
                  },
                  {
                    year: 'Present', title: 'A Pan-India Leader', bullets: [
                      'Employee Strength: 30+ in-house professionals and a field force of over 600.',
                      'Location: Pan-India operations with a strong foothold in global markets.',
                      'Service Expertise: Specializing in market research, software development, and delivering cutting-edge solutions to clients across various industries.',
                      'Vision: FieldNet continues to innovate under its dynamic leadership, solidifying its place as a trusted partner for research and insights across India and beyond.',
                    ]
                  },
                ].map((m) => (
                  <div key={m.year} className="relative grid grid-cols-[36px_minmax(0,1fr)] items-start lg:grid-cols-[96px_56px_1fr] lg:items-start">
                    {/* Year column (visible on mobile + desktop), right-aligned */}
                    {/* Year column: hidden on mobile, visible on lg */}
                    <div className="hidden lg:flex items-center justify-end pr-2">
                      <div className="text-sm uppercase tracking-wider text-slate-500 text-right">{m.year}</div>
                    </div>

                    {/* Line & marker column */}
                    <div className="relative flex justify-center">
                      <div className="relative z-10 mt-0">
                        <div className="w-4 h-4 rounded-full bg-rose-500 border border-white shadow-sm" />
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="pl-4 lg:pl-6">
                      {/* Mobile: show year above content */}
                      <div className="lg:hidden text-cyan-700 font-medium text-sm mb-2">{m.year}</div>
                      <div className="text-2xl font-extrabold text-slate-900">{m.title}</div>
                      <ul className="mt-3 list-disc list-inside pl-4 text-slate-600 space-y-2 max-w-none">
                        {m.bullets.map((b, i) => (
                          <li key={i} className="text-slate-600">{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
          </section>
        </Reveal>
        {/* Previous Clients */}
        <Reveal>
        <section ref={clientsRef} className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
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
          <div className={`text-center mb-12 transition-all duration-700 ${isClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Trusted by Fortune 500 Companies
            </h2>
            <p className="text-lg text-slate-600">
              We've partnered with industry leaders across various sectors to deliver actionable insights
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center transition-all duration-700 delay-200 ${isClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="flex items-center justify-center w-full h-24"
              >
                <img
                  src={`/clients/${client.logo}`}
                  alt={client.name}
                  className={`max-h-16 w-auto object-contain transform transition-all duration-500 ${
                    index === activeClient ? 'grayscale-0' : 'grayscale'
                  } hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
          </div>
        </section>
        </Reveal>

        <section ref={ctaRef} className=" border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className={`border border-cyan-700 bg-cyan-600 h-full flex flex-col md:flex-row p-8 items-start md:items-center md:justify-between gap-4 transition-all duration-700 ${isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
      </main>
      <BackToTopButton />
      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(-10px);
            opacity: 0.7;
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-25px) translateX(15px) scale(1.2);
            opacity: 0.6;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite 2s;
        }
      `}</style>
    </>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <Card className="border-slate-200">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="rounded-md bg-slate-100 p-2">{icon}</div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
          <div className="text-lg font-semibold text-slate-900">{value}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function Pillar({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <Card className="h-full border-slate-200">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <div className="rounded-md bg-cyan-50 p-2">{icon}</div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{text}</p>
      </CardContent>
    </Card>
  )
}
