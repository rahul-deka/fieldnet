"use client"
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Target, Globe } from "lucide-react";

const ANIMATION_DURATION = 2500; // ms
const stats = [
  { label: "Consumer Interactions", value: 5, suffix: " M+", icon: Users, color: "text-green-600" },
  { label: "Towns, Cities & Rural Centers Covered", value: 1000, suffix: "+", icon: Clock, color: "text-cyan-600" },
  { label: "Clients Across the Globe", value: 300, suffix: "+", icon: Target, color: "text-amber-600" },
  // This entry is a textual value (not numeric). We'll render it directly without animation.
  { label: "Projects Done", value: '1000', suffix: "+", icon: Globe, color: "text-purple-600" },
  // New stat: show client impact (fits numeric animation)
  { label: "Client Impact", value: 250, suffix: " Cr+", icon: Globe, color: "text-rose-600" },
];

export default function TrustedSection() {
  // animatedNumbers can be number (animated) or string (static text like 'Fortune 500')
  const [animatedNumbers, setAnimatedNumbers] = useState<(number | string)[]>(
    stats.map((s) => (typeof s.value === 'number' ? 0 : String(s.value)))
  );
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
      // If the stat value is not a number (e.g. 'Fortune 500'), don't animate — set directly
      if (typeof stat.value !== 'number') {
        setAnimatedNumbers((prev) => {
          const arr = [...prev];
          arr[idx] = String(stat.value);
          return arr;
        });
        return;
      }

      const start = 0;
      const end = stat.value as number;
      const duration = ANIMATION_DURATION;
      const startTime = Date.now();
      function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * ease);
        setAnimatedNumbers((prev) => {
          const arr = [...prev];
          arr[idx] = current;
          return arr;
        });
        if (progress < 1) requestAnimationFrame(animate);
        else
          setAnimatedNumbers((prev) => {
            const arr = [...prev];
            arr[idx] = end;
            return arr;
          });
      }
      setTimeout(animate, idx * 150);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 bg-gradient-to-b from-cyan-50/50 to-white dark:from-cyan-950/10 dark:to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Trusted by Fortune 500 Companies Worldwide
          </h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself across industries and continents
          </p>
        </div>
  <div className="relative grid grid-cols-2 lg:grid-cols-5 border border-slate-200 bg-white">
          {stats.map((stat, index) => {
            // Small screens use 2 columns; large screens use 5 columns (single row).
            const colsSmall = 2;
            const total = stats.length;
            const lastRowStartIndex = Math.floor((total - 1) / colsSmall) * colsSmall;
            const isInLastRow = index >= lastRowStartIndex;
            const colIndex = index % colsSmall;

            // If the last row contains a single item (total % colsSmall === 1),
            // make that final item span both small-screen columns so it fills the row.
            const spanTwo = index === total - 1 && total % colsSmall === 1;

            // For border logic on small screens, avoid right-border when an item spans two columns.
            const showRight = !spanTwo && colIndex < colsSmall - 1; // small-screen right border
            const showBottom = !isInLastRow; // small-screen bottom border

            return (
              <div
                key={index}
                className={`relative h-full ${spanTwo ? 'col-span-2 lg:col-span-1' : ''}
                  ${showRight ? 'border-r border-slate-200' : ''}
                  ${showBottom ? 'border-b border-slate-200' : ''}
                  lg:border-0
                `}
              >
                {/* Vertical divider for large screens */}
                {index !== stats.length - 1 && (
                  <div className={`hidden lg:block absolute top-0 bottom-0 right-0 w-px bg-slate-200 z-10`} />
                )}
                <Card
                  className="text-center flex flex-col items-center justify-center p-4 sm:p-8 min-h-[120px] sm:min-h-[170px] bg-transparent shadow-none rounded-none border-0 h-full"
                >
                  <CardContent className="p-0 flex flex-col items-center justify-center">
                    {/* Icon removed for cleaner look */}
                    <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-1">
                      {isVisible ? `${animatedNumbers[index].toLocaleString()}${stat.suffix}` : `0${stat.suffix}`}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground leading-tight">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}