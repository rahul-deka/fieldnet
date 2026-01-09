import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2, Globe, Clock } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 py-24 sm:py-32">
  <div className="absolute inset-0 bg-[url('/abstract-network-connections-dots-lines.jpg')] bg-no-repeat bg-cover opacity-10"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-8 text-cyan-50 mb-12">
            Let's discuss your research needs and how we can provide exceptional quality and maximum value for your
            market research investment with our proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-cyan-700 hover:bg-cyan-50 shadow-lg transition-colors duration-200 group min-w-[200px]"
              asChild
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:text-white hover:bg-white/10 bg-transparent backdrop-blur min-w-[200px]"
              asChild
            >
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
          <div className="mt-12 hidden sm:flex flex-row items-center justify-center gap-8 text-cyan-100">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.open("https://maps.app.goo.gl/m2y3MsAm4BGHEQrp7", "_blank")}>
              <Building2 className="w-5 h-5" />
              <span>Mumbai, India HQ</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Delhi</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Bengaluru</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Singapore</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>New York</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Global Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}