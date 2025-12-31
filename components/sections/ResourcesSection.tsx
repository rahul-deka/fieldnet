"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, Eye } from "lucide-react"
import { useEffect, useState } from "react"

type Resource = {
  _id: string
  title: string
  description: string
  category: string
  publishedAt?: string
  featured?: boolean
  pdfFile?: {
    asset?: {
      url?: string
      _id?: string
    }
  }
}

export default function ResourcesSection() {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadResources() {
      try {
        const response = await fetch('/api/sanity-resources')
        if (response.ok) {
          const data = await response.json()
          // Get featured resources first, or just the first 3
          const featured = data.filter((r: Resource) => r.featured).slice(0, 3)
          const finalResources = featured.length >= 3 ? featured : data.slice(0, 3)
          setResources(finalResources)
        }
      } catch (error) {
        console.error('Failed to load resources:', error)
      } finally {
        setLoading(false)
      }
    }
    loadResources()
  }, [])

  if (loading) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading resources...</p>
          </div>
        </div>
      </section>
    )
  }

  if (resources.length === 0) {
    return null
  }

  const categoryTitles: Record<string, string> = {
    "industry-reports": "Industry Report",
    "methodology-notes": "Methodology Note",
    whitepapers: "Whitepaper",
    "case-studies": "Case Study",
    other: "Resource",
  }

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Top fade from white for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />

      {/* Bottom fade to white for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-200">
            Knowledge Hub
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Featured Resources
          </h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Access whitepapers, reports, and methodology notes to help you make informed research decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource) => (
            <Card
              key={resource._id}
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-cyan-400 overflow-hidden flex flex-col h-full bg-white pt-0 pb-0"
            >
              <CardContent className="p-0 flex flex-col flex-grow">
                {/* Icon Header */}
                <div className="p-6 border-b border-slate-100 bg-white">
                  <div className="flex items-start gap-3 mb-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700 flex-shrink-0">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-700 transition-colors line-clamp-2 pt-0 pb-0">
                      {resource.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-slate-50/50 to-slate-50/30">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4 flex-grow">
                    {resource.description}
                  </p>

                  {resource.pdfFile?.asset?.url && (
                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-cyan-700 font-semibold text-sm hover:gap-3 transition-all"
                      >
                        <Eye className="h-4 w-4" />
                        View Resource
                        {/* <ArrowRight className="h-4 w-4" /> */}
                      </Link>
                      <Badge variant="outline" className="text-xs border-cyan-200 text-cyan-700 bg-cyan-50">
                        {categoryTitles[resource.category] || "Resource"}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/resources" passHref legacyBehavior>
            <Button
              asChild
              size="lg"
              className="cursor-pointer bg-cyan-600 text-white hover:bg-cyan-700 group"
            >
              <span className="flex items-center gap-2">
                See All Resources
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
