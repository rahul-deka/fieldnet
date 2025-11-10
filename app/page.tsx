"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/sections/HeroSection"
import TrustedSection from "@/components/sections/TrustedSection"
import ExpertiseSection from "@/components/sections/ExpertiseSection"
// import InsightEdgeSection from "@/components/sections/InsightEdgeSection"
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection"
import CTASection from "@/components/sections/CTASection"
import FAQSection from "@/components/sections/FAQSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import { useEffect, useRef } from "react"
import BackToTopButton from "@/components/back-to-top";
import { displayAsciiArt } from "@/components/asciiArt";
import Reveal from "@/components/reveal";

export default function HomePage() {
  const installRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    displayAsciiArt();
  }, []);
  const handleCopy = () => {
    if (installRef.current) {
      const text = Array.from(installRef.current.querySelectorAll('.copy-line'))
        .map(div => div.textContent)
        .join('\n');
      navigator.clipboard.writeText(text);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Reveal>
        <HeroSection />
      </Reveal>

      <Reveal>
        <TrustedSection />
      </Reveal>

      <Reveal>
        <ExpertiseSection />
      </Reveal>

      {/* <InsightEdgeSection /> */}

      <Reveal>
        <DifferentiatorsSection />
      </Reveal>

      <Reveal>
        <TestimonialsSection />
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>

      <Reveal>
        <FAQSection />
      </Reveal>
      
      <BackToTopButton />
      <Footer />
    </div>
  )
}
