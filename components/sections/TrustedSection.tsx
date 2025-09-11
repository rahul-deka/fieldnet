"use client"
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Target, Globe } from "lucide-react";

const ANIMATION_DURATION = 2500; // ms
const stats = [
  { label: "Years of Experience", value: 19, suffix: "+", icon: Clock, color: "text-cyan-600" },
  { label: "Interviews Conducted", value: 400000, suffix: "+", icon: Users, color: "text-green-600" },
  { label: "Focus Groups", value: 2200, suffix: "+", icon: Target, color: "text-amber-600" },
  { label: "Languages Supported", value: 11, suffix: "", icon: Globe, color: "text-purple-600" },
];

export default function TrustedSection() {
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    stats.forEach((stat, idx) => {
      const start = 0;
      const end = stat.value;
      const duration = ANIMATION_DURATION;
      const startTime = Date.now();
      function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * ease);
        setAnimatedNumbers(prev => {
          const arr = [...prev];
          arr[idx] = current;
          return arr;
        });
        if (progress < 1) requestAnimationFrame(animate);
        else setAnimatedNumbers(prev => {
          const arr = [...prev];
          arr[idx] = end;
          return arr;
        });
      }
      setTimeout(animate, idx * 150);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-gradient-to-b from-cyan-50/50 to-white dark:from-cyan-950/10 dark:to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Trusted by Organizations Worldwide
          </h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself across industries and continents
          </p>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur"
            >
              <CardContent className="p-0">
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl font-bold tracking-tight text-foreground mb-2">
                  {isVisible ? `${animatedNumbers[index].toLocaleString()}${stat.suffix}` : `0${stat.suffix}`}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}