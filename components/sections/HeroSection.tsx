import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Award, ArrowRight, CheckCircle, Star, Globe } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-amber-50 dark:from-cyan-950/20 dark:via-background dark:to-amber-950/20"></div>
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-subtle-lines.jpg')] opacity-5"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-cyan-100 text-cyan-800 border-cyan-200">
              <Award className="w-3 h-3 mr-1" />
              Established 2005 • 150+ Years Collective Experience
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl text-balance leading-tight">
              Global Market
              <span className="block text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text">
                Research Excellence
              </span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground text-pretty max-w-2xl">
              Full-service market research agency providing exceptional quality and maximum value to clients across
              the globe. From new product testing to large-scale audits and polls.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
              >
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 bg-transparent hover:border-cyan-700 hover:text-cyan-800 transition-transform duration-200 ease-in-out hover:scale-105"
                asChild
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                <span>5M+ Interviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-600" />
                <span>Global Presence</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-office-team-analyzing-data-charts-professio.jpg"
                alt="Fieldnet team analyzing market research data"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <Card className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur shadow-xl border-0">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-cyan-700">20+</div>
                <div className="text-sm text-muted-foreground">Years of <br />Research Expertise</div>
              </CardContent>
            </Card>
            <Card className="absolute -top-6 -right-6 bg-white/95 backdrop-blur shadow-xl border-0">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-amber-600">2,200+</div>
                <div className="text-sm text-muted-foreground">Focus Groups, IDIs</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}