import React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { fetchPosts } from '@/lib/sanity'
import SearchBar from '@/components/blog/search-bar'

export default async function BlogPage() {
  const posts = await fetchPosts()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold mb-2">Fieldnet Blog</h1>
            <p className="text-lg text-muted-foreground">Insights, updates and case studies from our global team.</p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center text-muted-foreground">No posts found.</div>
          ) : (
            <>
              <SearchBar initialPosts={posts} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
