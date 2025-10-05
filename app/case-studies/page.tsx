"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  TrendingUp,
  Users,
  ShoppingCart,
  Smartphone,
  Car,
  Pill,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Target,
  BarChart3,
  Globe,
  Microscope,
  Building2,
  LineChart,
  Tv,
  FlaskConical,
  Factory,
  Cigarette,
  Droplet,
  Store,
  Vote,
} from "lucide-react"

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categories = [
    "All",
    "Advertising Research",
    "Product Testing",
    "Customer Satisfaction",
    "Market Potential",
    "Industry Assessment",
    "Political & Social Research",
    "Concept Testing",
    "Retail Audit",
    "Database Creation"
  ]

  const caseStudies = [
    {
      id: 1,
      category: "Advertising Research",
      industry: "Consumer Electronics",
      icon: Tv,
      title: "Advertising Effectiveness Tracking for a Leading Consumer Electronics Firm",
      client: "Leading Consumer Electronics Manufacturer",
      challenge:
        "The client wanted to measure the effectiveness of its TV and print advertising campaigns in influencing brand preference, purchase intent, and perception over time across major Indian cities.",
      solution:
        "Conducted 7,200 face-to-face interviews across 9 metro and tier-1 cities over 12 months with SEC A, B & C decision makers. The study tracked brand health metrics, recall, and message clarity, and analyzed advertisement resonance across regions.",
      methodology: [
        "Face-to-Face Interviews",
        "Brand Tracking",
        "Advertising Recall Measurement",
        "Quantitative Analysis",
      ],
      results: [
        "Mapped shifts in brand image and purchase likelihood across campaign periods",
        "Identified regional variations in ad recall and message understanding",
        "Helped client refine future creative and media planning based on audience insights",
      ],
      metrics: [
        { label: "Sample Size", value: "7,200" },
        { label: "Cities Covered", value: "9" },
        { label: "Study Duration", value: "12 months" },
      ],
    },
    {
      id: 2,
      category: "Product Testing",
      industry: "FMCG",
      icon: FlaskConical,
      title: "New Product Test for a Leading FMCG Firm",
      client: "Top FMCG Company",
      challenge:
        "The client planned to launch a new hair color neutralizer but needed to test product efficacy, acceptance, and pricing with core target consumers before rollout.",
      solution:
        "Conducted 800 face-to-face interviews with working women and housewives (SEC A & B) in three metros and one mini-metro. Participants used the product for 45 days before evaluation. Gathered reactions on product quality, price points, and communication concepts.",
      methodology: [
        "Usage & Attitude Study",
        "Face-to-Face Interviews",
        "Concept Evaluation",
        "Price Sensitivity Testing",
      ],
      results: [
        "Identified strong acceptance drivers linked to fragrance and after-use shine",
        "Validated optimal price points and SKUs for urban markets",
        "Provided creative direction for advertising communication and product packaging",
      ],
      metrics: [
        { label: "Sample Size", value: "800" },
        { label: "Cities", value: "4" },
        { label: "Test Duration", value: "45 days" },
      ],
    },
    {
      id: 3,
      category: "Industry Assessment",
      industry: "Manufacturing",
      icon: Factory,
      title: "Market Landscape for Electroplating Companies",
      client: "Industry Development Board",
      challenge:
        "The client needed an overview of the electroplating industry in Thailand and Indonesia, including market size, leading players, and outsourcing potential.",
      solution:
        "Executed 50 telephonic depth interviews with key electroplating companies in both countries. Gathered insights on production capacity, export potential, and operational challenges to support industry development initiatives.",
      methodology: [
        "Telephonic Interviews",
        "B2B Research",
        "Market Profiling",
        "Industry Benchmarking",
      ],
      results: [
        "Created detailed profiles of top electroplating firms by region and segment",
        "Highlighted outsourcing and export opportunities for small and mid-tier firms",
        "Developed strategic recommendations for cross-border collaborations",
      ],
      metrics: [
        { label: "Sample Size", value: "50" },
        { label: "Countries", value: "2" },
        { label: "Research Type", value: "B2B" },
      ],
    },
    {
      id: 4,
      category: "Product Testing",
      industry: "Tobacco",
      icon: Cigarette,
      title: "Sensory Evaluation and Package Test for an International Cigarette Brand",
      client: "Global Tobacco Company",
      challenge:
        "The client wanted to introduce a new cigarette blend and packaging in India and needed to evaluate consumer perception, sensory feedback, and brand switching potential.",
      solution:
        "Conducted 18 Focus Group Discussions in Mumbai and Delhi among SEC B & C adult decision makers. Evaluated blend taste, aroma, and packaging preferences, and assessed drivers of brand loyalty and switching.",
      methodology: [
        "Focus Group Discussions (FGDs)",
        "Sensory Evaluation",
        "Packaging Test",
        "Brand Switching Analysis",
      ],
      results: [
        "Identified preferred tobacco blend tailored to Indian taste preferences",
        "Determined ideal pack size and pricing strategy for launch",
        "Discovered key triggers influencing brand switching decisions",
      ],
      metrics: [
        { label: "Focus Groups", value: "18" },
        { label: "Cities", value: "2" },
        { label: "Target Segment", value: "SEC B & C" },
      ],
    },
    {
      id: 5,
      category: "Concept Testing",
      industry: "FMCG",
      icon: Droplet,
      title: "New Shampoo Concept Test for a Global FMCG Firm",
      client: "International Personal Care Brand",
      challenge:
        "The client sought to test a new sachet-based shampoo concept in a competitive market and identify improvement areas before national rollout.",
      solution:
        "Conducted 10 Focus Group Discussions and 12 In-Depth Interviews in Lucknow among SEC B & C shampoo users. Evaluated perceptions of quality, packaging, pricing, and innovative features through in-home product usage.",
      methodology: [
        "Focus Groups",
        "In-Depth Interviews (IDIs)",
        "Product Usage Observation",
        "Concept Evaluation",
      ],
      results: [
        "Identified opportunities to enhance texture and fragrance to align with local preferences",
        "Validated competitive advantage in sachet convenience and price appeal",
        "Recommended communication themes emphasizing quality at value pricing",
      ],
      metrics: [
        { label: "FGDs", value: "10" },
        { label: "IDIs", value: "12" },
        { label: "Location", value: "Lucknow" },
      ],
    },
    {
      id: 6,
      category: "Market Potential",
      industry: "Pharmaceuticals",
      icon: Pill,
      title: "Market Potential Assessment for a Pharma Major",
      client: "Global Pharmaceutical Company",
      challenge:
        "The client wanted to understand preferences among healthcare professionals for HBsAG sensitivity and HCV testing solutions in emerging markets.",
      solution:
        "Conducted 60 In-Depth Interviews with doctors, lab managers, and blood bank professionals across Thailand, Brazil, Korea, and China. Combined telephonic interviews with a web-based conjoint analysis to capture preferences and trade-offs.",
      methodology: [
        "In-Depth Interviews (IDIs)",
        "Conjoint Analysis",
        "Telephonic + Web Surveys",
        "B2B Research",
      ],
      results: [
        "Identified key feature preferences and acceptable price ranges across markets",
        "Quantified demand for high-sensitivity test kits and automation capabilities",
        "Delivered market entry strategy recommendations per country",
      ],
      metrics: [
        { label: "Sample Size", value: "60" },
        { label: "Countries", value: "4" },
        { label: "Respondent Type", value: "Healthcare Professionals" },
      ],
    },
    {
      id: 7,
      category: "Retail Audit",
      industry: "FMCG",
      icon: Store,
      title: "Shop Census for a Leading FMCG Firm",
      client: "National FMCG Brand",
      challenge:
        "The client needed to map outlets selling branded vs. unbranded wafers to guide merchandising and branding plans for its savory snack portfolio.",
      solution:
        "Executed a full retail census of 50,000 kirana, pan, chemist, confectionery, and bakery shops across Mumbai using map-based beat planning for data accuracy.",
      methodology: [
        "Retail Census",
        "Map Sampling",
        "Beat Planning",
        "In-Person Audits",
      ],
      results: [
        "Mapped all outlets selling branded/unbranded wafers citywide",
        "Created detailed merchandising heatmaps for targeted outreach",
        "Enabled data-driven retail expansion and sales planning",
      ],
      metrics: [
        { label: "Shops Covered", value: "50,000" },
        { label: "City", value: "Mumbai" },
        { label: "Duration", value: "8 weeks" },
      ],
    },
    {
      id: 8,
      category: "Customer Satisfaction",
      industry: "Retail",
      icon: Users,
      title: "Opinion Poll for a Leading Supermarket Chain",
      client: "National Retail Chain",
      challenge:
        "The client wanted to understand consumer perceptions of its hypermarket and supermarket formats across major Indian cities to improve experience and assortment.",
      solution:
        "Conducted 1,000 structured interviews with SEC A & B decision makers across five cities to measure shopper expectations, price sensitivity, and purchase drivers.",
      methodology: [
        "Opinion Polls",
        "Customer Feedback Surveys",
        "Shopping Behavior Analysis",
        "Comparative Study (Hypermarket vs Kirana)",
      ],
      results: [
        "Identified key differentiators driving store choice: product range, freshness, and value perception",
        "Revealed gender-based differences in buying patterns and average spend",
        "Recommended assortment and layout changes for higher customer retention",
      ],
      metrics: [
        { label: "Sample Size", value: "1,000" },
        { label: "Cities", value: "5" },
        { label: "Segments", value: "SEC A & B" },
      ],
    },
    {
      id: 9,
      category: "Database Creation",
      industry: "Civic Engagement",
      icon: Vote,
      title: "‘Pledge to Vote’ Voter Database Campaign",
      client: "Pledge to Vote Initiative",
      challenge:
        "South Bangalore had historically low voter turnout. The initiative aimed to connect with every household to encourage civic participation and improve turnout rates.",
      solution:
        "Executed door-to-door outreach to over 100,000 registered voters across South Bangalore in less than six weeks. Engaged one household representative in each visit and built a verified voter database.",
      methodology: [
        "Door-to-Door Surveys",
        "Voter Data Collection",
        "Community Engagement",
        "Campaign Impact Tracking",
      ],
      results: [
        "Reached 100,000+ registered voters within 6 weeks",
        "Voting turnout increased by 5% in 2014 Lok Sabha Election vs. 2009",
        "Built a comprehensive voter engagement database for future initiatives",
      ],
      metrics: [
        { label: "Voters Reached", value: "100,000+" },
        { label: "Duration", value: "6 weeks" },
        { label: "Turnout Improvement", value: "+5%" },
      ],
    },
    {
      id: 10,
      category: "Political & Social Research",
      industry: "Public Opinion",
      icon: BarChart3,
      title: "Opinion Poll for a Lok Sabha Candidate",
      client: "National Political Party",
      challenge:
        "The client needed a detailed understanding of voter sentiment and party loyalty ahead of the 2014 Lok Sabha Elections in South Bangalore.",
      solution:
        "Conducted a 10-week opinion poll among 20,000+ registered voters using randomized interviews to measure historical voting behavior, candidate preference, and key decision factors.",
      methodology: [
        "Opinion Polls",
        "Random Sampling",
        "Political Sentiment Analysis",
        "Comparative Voting Behavior Study",
      ],
      results: [
        "Mapped voter loyalty trends across multiple past elections",
        "Identified top decision factor: 'Candidate First, then Party'",
        "Enabled candidate to tailor campaign messaging to priority voter groups",
      ],
      metrics: [
        { label: "Sample Size", value: "20,000+" },
        { label: "Duration", value: "10 weeks" },
        { label: "Location", value: "South Bangalore" },
      ],
    },
  ];


  const filteredStudies =
    (activeFilter === "All" ? caseStudies : caseStudies.filter((study) => study.category === activeFilter))
      .filter((study) => {
        if (!search.trim()) return true;
        const q = search.trim().toLowerCase();
        // Check all string fields and arrays for a match
        const fields = [
          study.title,
          study.client,
          study.industry,
          study.category,
          study.challenge,
          study.solution,
          ...(Array.isArray(study.methodology) ? study.methodology : []),
          ...(Array.isArray(study.results) ? study.results : []),
          ...(Array.isArray(study.metrics) ? study.metrics.map(m => `${m.label} ${m.value}`) : []),
        ];
        return fields.some(field =>
          typeof field === 'string' && field.toLowerCase().includes(q)
        );
      });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Hero Section - Featured Case Study Spotlight */}
        <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Badge */}
            <div className="text-center mb-8">
              <Badge className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm px-4 py-2 text-sm">
                <Award className="h-4 w-4 inline mr-2" />
                Success Stories That Drive Growth
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
                Insights That
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-400">
                  Transform Businesses
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-pretty">
                From brand revitalization to market entry, discover how data-driven insights have helped leading companies
                achieve measurable success.
              </p>
            </div>

            {/* Featured Case Study Card */}
            <Card className="overflow-hidden border-2 py-0 border-cyan-500/30 bg-slate-800/50 backdrop-blur-xl shadow-2xl">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left - Featured Label & Image */}
                <div className="lg:col-span-2 relative bg-gradient-to-br from-cyan-600 to-cyan-800 p-8 flex flex-col justify-between">
                  <div>
                    <Badge className="bg-amber-500 text-slate-900 font-semibold mb-4">Featured Case Study</Badge>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <ShoppingCart className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-cyan-100 font-medium">FMCG • Advertising Research</div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      Hair Color Ad Effectiveness Study
                    </h3>
                    <p className="text-cyan-100 leading-relaxed">
                      Evaluating pre and post campaign effectiveness for a global FMCG major’s hair color brand, driving higher ad recall and purchase intent across metros.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">7.2K</div>
                      <div className="text-xs text-cyan-200">Interviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">9</div>
                      <div className="text-xs text-cyan-200">Cities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">+29%</div>
                      <div className="text-xs text-cyan-200">Purchase Intent</div>
                    </div>
                  </div>
                </div>

                {/* Right - Key Insights */}
                <div className="lg:col-span-3 p-8 bg-slate-900/50">
                  <div className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-amber-500/20 rounded-lg">
                          <Target className="h-5 w-5 text-amber-400" />
                        </div>
                        <h4 className="text-lg font-bold text-white">The Challenge</h4>
                      </div>
                        <p className="text-slate-300 leading-relaxed">
                        The client wanted to assess how effectively its latest hair color campaign was influencing brand awareness, ad recall, and purchase intent among women aged 25–45 across urban India.
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                          <Sparkles className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Our Approach</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Conducted 7,200 face-to-face interviews across 9 metro and tier-1 cities. Tracked TV and print campaign effectiveness using pre-post exposure methodology, and measured recall, brand image, and likelihood to purchase.
                      </p>
                    </div>

                    {/* Key Results */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-green-400" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Impact Delivered</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">
                            78% ad recall among exposed audience
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">
                            +29% increase in purchase intent post campaign
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">
                            Identified strongest creative themes driving recall
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">
                            Provided actionable media optimization insights
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  {/* <div className="mt-8 pt-6 border-t border-slate-700">
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div> */}
                </div>
              </div>
            </Card>

            {/* Bottom Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 mt-12 border border-slate-700 rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <BarChart3 className="h-8 w-8 text-cyan-400 mb-3" />
                <div className="text-3xl font-bold text-cyan-500 mb-1">50+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 text-center border-l border-slate-700">
                <Globe className="h-8 w-8 text-amber-400 mb-3" />
                <div className="text-3xl font-bold text-amber-500 mb-1">15+</div>
                <div className="text-sm text-slate-400">Industries Served</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 text-center border-t md:border-t-0 md:border-l border-slate-700">
                <Users className="h-8 w-8 text-green-400 mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">10K+</div>
                <div className="text-sm text-slate-400">Respondents Surveyed</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 text-center border-l border-t md:border-t-0 border-slate-700">
                <Award className="h-8 w-8 text-purple-400 mb-3" />
                <div className="text-3xl font-bold text-purple-600 mb-1">98%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-6 bg-white border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search case studies..."
                  className="w-80 h-9 px-6 text-lg border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white flex-shrink-0"
              />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={
                    activeFilter === category
                      ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-6 from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8">
              {filteredStudies.map((study) => (
                <Card
                  key={study.id}
                  className="overflow-hidden border-2 border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 p-0"
                >
                  <div className="grid lg:grid-cols-12 gap-6 p-0">
                    {/* Left Column - Overview */}
                    <div className="lg:col-span-4 p-4 lg:p-8 lg:border-r lg:border-slate-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                          <study.icon className="h-8 w-8 text-cyan-600" />
                        </div>
                        <div>
                          <Badge className="bg-cyan-600 text-white mb-1">{study.category}</Badge>
                          <p className="text-sm text-slate-600">{study.industry}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{study.title}</h3>
                      <p className="text-sm text-slate-600 mb-6">{study.client}</p>

                      {/* Key Metrics */}
                      <div className="space-y-3">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs text-slate-500 uppercase tracking-wide">{metric.label}</div>
                            <div className="text-2xl font-bold text-cyan-700">{metric.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Methodology Tags */}
                      <div className="mt-6">
                        <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Methodology</p>
                        <div className="flex flex-wrap gap-2">
                          {study.methodology.map((method, idx) => (
                            <Badge key={idx} variant="outline" className="border-cyan-600 text-cyan-700 text-xs">
                              {method}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-4 p-4 lg:p-8">
                      {/* Challenge */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-5 w-5 text-amber-600" />
                          <h4 className="text-lg font-bold text-slate-900">Challenge</h4>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="h-5 w-5 text-cyan-600" />
                          <h4 className="text-lg font-bold text-slate-900">Solution</h4>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          <h4 className="text-lg font-bold text-slate-900">Results & Impact</h4>
                        </div>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700 leading-relaxed">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredStudies.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-600 text-lg">No case studies found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-cyan-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-100">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Let's Create Your Success Story
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed text-pretty">
              Whether you need brand health tracking, customer satisfaction research, or market entry insights, our team
              is ready to deliver actionable results.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                View Our Services
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg p-3 transition-colors duration-200 flex items-center justify-center cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowRight className="rotate-[-90deg] w-6 h-6" />
        </button>
      )}
    </>
  )
}