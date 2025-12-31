"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { format } from "date-fns"
import { useEffect, useState } from "react"

type Post = {
  _id: string
  title: string
  slug?: string
  excerpt?: string
  publishedAt?: string
  coverImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    alt?: string
  }
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch('/api/sanity-posts')
        if (response.ok) {
          const data = await response.json()
          setPosts(data.slice(0, 3))
        }
      } catch (error) {
        console.error('Failed to load posts:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading blog posts...</p>
          </div>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return null
  }

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-700 border-cyan-200">
            Insights & Updates
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Explore industry insights, research methodologies, and thought leadership from our global team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug || post._id}`}
              className="block h-full"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden flex flex-col h-full bg-white cursor-pointer hover:border-cyan-400 pt-0">
                <CardContent className="p-0 flex flex-col flex-grow">
                  {/* Image Section */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-cyan-100 via-cyan-50 to-blue-100 overflow-hidden">
                    {post.coverImage?.asset?.url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.coverImage.asset.url}
                        alt={post.coverImage?.alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-cyan-600/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.publishedAt || ''}>
                        {post.publishedAt ? format(new Date(post.publishedAt), 'd MMM yyyy') : 'Date TBA'}
                      </time>
                    </div> */}

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center text-cyan-700 font-semibold text-sm mt-auto group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/blog" passHref legacyBehavior>
            <Button
              asChild
              size="lg"
              className="cursor-pointer bg-cyan-600 text-white hover:bg-cyan-700 group"
            >
              <span className="flex items-center gap-2">
                See All Posts
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
