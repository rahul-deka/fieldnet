import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function InsightEdgeSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Insight Edge
          </h2>
          <p className="text-xl leading-8 text-muted-foreground">
            Future-ready modules you can switch on for faster, deeper decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 conic-border gap-0 bg-white">
          {/* Allytics™ */}
          <Card className="border-0 shadow-none rounded-none p-6 relative bg-white">
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block"></div>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent md:bottom-0 lg:hidden"></div>
            <CardContent className="p-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-foreground">Allytics™</h3>
                  <p className="text-sm text-muted-foreground">AI & Analytics</p>
                </div>
                <Badge className="bg-slate-900 text-white hover:bg-slate-800 text-xs px-2 py-1">New</Badge>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Price bands</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Demand & churn</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>QC anomaly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dashboards/API</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* DigiPulse™ */}
          <Card className="border-0 shadow-none rounded-none p-6 relative bg-white">
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent md:hidden"></div>
            <CardContent className="p-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-foreground">DigiPulse™</h3>
                  <p className="text-sm text-muted-foreground">Digital Research</p>
                </div>
                <Badge className="bg-slate-900 text-white hover:bg-slate-800 text-xs px-2 py-1">New</Badge>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>WhatsApp surveys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Social listening</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>UX tests</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ethnography</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* GreenGauge™ */}
          <Card className="border-0 shadow-none rounded-none p-6 relative bg-white">
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block"></div>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent md:bottom-0 lg:hidden"></div>
            <CardContent className="p-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-foreground">GreenGauge™</h3>
                  <p className="text-sm text-muted-foreground">Sustainability & ESG</p>
                </div>
                <Badge className="bg-slate-900 text-white hover:bg-slate-800 text-xs px-2 py-1">New</Badge>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ESG trackers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>CSR impact</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Green segments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>KPIs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* SectorLabs™ */}
          <Card className="border-0 shadow-none rounded-none p-6 relative bg-white">
            <CardContent className="p-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-foreground">SectorLabs™</h3>
                  <p className="text-sm text-muted-foreground">Sector Blueprints</p>
                </div>
                <Badge className="bg-slate-900 text-white hover:bg-slate-800 text-xs px-2 py-1">New</Badge>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>FMCG</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>BFSI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Healthcare</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Auto & Tech</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Ready to Collaborate CTA */}
        <div className="mt-16">
          <div className="border border-cyan-700 bg-cyan-600 h-full flex flex-col md:flex-row p-8 items-start md:items-center md:justify-between gap-4">
            <div>
              <div className="uppercase text-sm font-medium text-white mb-2">Want to Know More?</div>
              <h3 className="text-xl font-semibold text-white mb-1">Discover how Insight Edge can transform your research</h3>
              <p className="text-white/90 mb-4">
                Book a 30-minute call with our team to explore these innovative modules in detail.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center bg-white px-5 py-2.5 text-base font-bold text-cyan-600 shadow-lg transition-colors hover:bg-indigo-50 md:ml-auto whitespace-nowrap"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
