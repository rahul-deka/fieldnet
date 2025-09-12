import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DifferentiatorsSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/20 dark:to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-200">
            Why Choose Fieldnet
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Our Differentiators</h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            What sets us apart in the competitive market research landscape
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              icon: Award,
              title: "Experienced Leadership",
              description:
                "Our management team combines 150+ years of experience with both client and agency perspectives, having worked with leading organizations like AC Nielsen, IMRB, and Cadbury.",
              color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
            },
            {
              icon: Shield,
              title: "Quality Focused",
              description:
                "Stringent quality control processes including rigorous team recruitment, robust training, real-time monitoring, and independent auditing ensure data accuracy.",
              color: "bg-gradient-to-br from-green-500 to-green-600",
            },
            {
              icon: Globe,
              title: "Global Reach",
              description:
                "Trusted relationships with affiliates across Africa, Middle East, Europe, Asia-Pacific, North America, and Latin America enable multi-country research at competitive costs.",
              color: "bg-gradient-to-br from-purple-500 to-purple-600",
            },
            {
              icon: Zap,
              title: "Cost Effective",
              description:
                "Efficiency-driven cost savings through minimizing wastage and optimized processes, delivering maximum value without compromising quality or timeliness.",
              color: "bg-gradient-to-br from-amber-500 to-amber-600",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="relative p-8 rounded-3xl border border-slate-100 shadow-xl bg-white/90 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Gradient overlay for subtle color effect */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl opacity-70" style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf6f0 100%)'}} />
              <CardContent className="p-0 relative z-10">
                {/* Mobile: icon and title in a row, description below. Large: original flex-row layout. */}
                <div className="sm:hidden flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full shadow-md ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-2">{item.description}</p>
                </div>
                <div className="hidden sm:flex items-start gap-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full shadow-md ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/our-differentiators" passHref legacyBehavior>
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