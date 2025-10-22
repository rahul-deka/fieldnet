import React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { format } from 'date-fns'

const posts = [
  { id: '1', title: 'Welcome to our blog', excerpt: 'Updates, insights and case studies from Fieldnet Global Research.', date: new Date(2025, 8, 1) },
  { id: '2', title: 'Using mixed methods in market research', excerpt: 'How qualitative and quantitative approaches complement each other.', date: new Date(2025, 7, 12) },
  { id: '3', title: 'Data quality controls in large surveys', excerpt: 'Practical tips to maintain high data quality at scale.', date: new Date(2025, 6, 5) },
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-2">Fieldnet Blog</h1>
            <p className="text-lg text-muted-foreground">Insights, updates and case studies from our global team.</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:underline text-foreground">{post.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <time dateTime={post.date.toISOString()}>{format(post.date, 'd MMM yyyy')}</time>
                  <Link href={`/blog/${post.id}`} className="text-cyan-600 font-medium">Read more</Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
