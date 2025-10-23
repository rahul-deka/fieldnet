import React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { format } from 'date-fns'
import { fetchPosts } from '@/lib/sanity'

export default async function BlogPage() {
  const posts = await fetchPosts()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-2">Fieldnet Blog</h1>
            <p className="text-lg text-muted-foreground">Insights, updates and case studies from our global team.</p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center text-muted-foreground">No posts found. Make sure your Sanity project ID and dataset are configured in environment variables.</div>
          ) : (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post: any) => (
                <article key={post._id} className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h2 className="text-xl font-semibold mb-2">
                    <Link href={`/blog/${post.slug || post._id}`} className="hover:underline text-foreground">{post.title}</Link>
                  </h2>
                  {post.excerpt && <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <time dateTime={post.publishedAt || ''}>{post.publishedAt ? format(new Date(post.publishedAt), 'd MMM yyyy') : ''}</time>
                    <Link href={`/blog/${post.slug || post._id}`} className="text-cyan-600 font-medium">Read more</Link>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
