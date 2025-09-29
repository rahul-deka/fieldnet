import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/sections/HeroSection"
import TrustedSection from "@/components/sections/TrustedSection"
import ExpertiseSection from "@/components/sections/ExpertiseSection"
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection"
import CTASection from "@/components/sections/CTASection"
import FAQSection from "@/components/sections/FAQSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustedSection />
      <ExpertiseSection />
      <DifferentiatorsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}
