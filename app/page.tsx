import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  BarChart3,
  Globe,
  Target,
  TrendingUp,
  ArrowRight,
  Award,
  Clock,
  Shield,
  Users,
  Building2,
  Zap,
  CheckCircle,
  Star,
  MapPin,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-amber-50 dark:from-cyan-950/20 dark:via-background dark:to-amber-950/20"></div>
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-subtle-lines.jpg')] opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
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
                  className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-lg"
                >
                  <Link href="/contact">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 hover:bg-cyan-50 bg-transparent" asChild>
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
                  <span>400K+ Interviews</span>
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
                  <div className="text-2xl font-bold text-cyan-700">19+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="absolute -top-6 -right-6 bg-white/95 backdrop-blur shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-amber-600">2,200+</div>
                  <div className="text-sm text-muted-foreground">Focus Groups</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur group"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
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
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/abstract-network-connections-dots-lines.jpg')] opacity-10"></div>
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
                className="bg-white text-cyan-700 hover:bg-cyan-50 shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur"
                asChild
              >
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-cyan-100">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Mumbai, India HQ</span>
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

      <Footer />
    </div>
  )
}
