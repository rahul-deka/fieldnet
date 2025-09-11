import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Target, Globe } from "lucide-react"

export default function TrustedSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-cyan-50/50 to-white dark:from-cyan-950/10 dark:to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Trusted by Organizations Worldwide
          </h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself across industries and continents
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Years of Experience", value: "19+", icon: Clock, color: "text-cyan-600" },
            { label: "Interviews Conducted", value: "400,000+", icon: Users, color: "text-green-600" },
            { label: "Focus Groups", value: "2,200+", icon: Target, color: "text-amber-600" },
            { label: "Languages Supported", value: "11", icon: Globe, color: "text-purple-600" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur"
            >
              <CardContent className="p-0">
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl font-bold tracking-tight text-foreground mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}