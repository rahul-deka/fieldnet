import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Target, TrendingUp, CheckCircle, MapPin } from "lucide-react"

export default function ExpertiseSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-200">
            Our Expertise
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Comprehensive Research Solutions
          </h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            From concept to execution, we provide integrated research approaches tailored to your specific business
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card
            className="lg:col-span-2 lg:row-span-2 p-8 border-0 relative overflow-hidden"
            style={{ backgroundColor: "#0891b2" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <BarChart3 className="h-12 w-12 mb-6 text-white" />
              <h3 className="text-2xl font-bold mb-4 text-white">Market Research Excellence</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Comprehensive quantitative and qualitative research methodologies including surveys, focus groups, and
                in-depth interviews across multiple geographies with advanced statistical analysis.
              </p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Multi-country research capabilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Advanced statistical modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Real-time data collection</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-amber-100">
            <CardContent className="p-0">
              <Target className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Audits & Polls</h3>
              <p className="text-muted-foreground leading-relaxed">
                Large-scale measurement projects including location audits, retail census, mystery shopping, and
                electoral polls.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-0">
              <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Data Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced statistical analysis, content analysis, data tabulation with actionable insights and
                recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-0">
            <CardContent className="p-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Global Research Network</h3>
                  <p className="text-muted-foreground text-lg">
                    Trusted partnerships across Africa, Middle East, Europe, Asia-Pacific, North America, and Latin
                    America
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}