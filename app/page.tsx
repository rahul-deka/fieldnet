"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/sections/HeroSection"
import TrustedSection from "@/components/sections/TrustedSection"
import ExpertiseSection from "@/components/sections/ExpertiseSection"
import InsightEdgeSection from "@/components/sections/InsightEdgeSection"
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection"
import CTASection from "@/components/sections/CTASection"
import FAQSection from "@/components/sections/FAQSection"
import { useEffect, useRef } from "react"
import { displayAsciiArt } from "@/components/asciiArt";

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
      <HeroSection />
      <TrustedSection />
      <ExpertiseSection />
      <InsightEdgeSection />
      <DifferentiatorsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}
