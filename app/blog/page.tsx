export const metadata = {
  title: "Blog | FieldNet Global Research",
  description: "Insights, updates, and thought leadership from FieldNet's global research team. Read our latest blog posts.",
};
import React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { fetchPosts } from '@/lib/sanity'
import SearchBar from '@/components/blog/search-bar'
import Reveal from '@/components/reveal'

export default async function BlogPage() {
  const posts = await fetchPosts()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold mb-2">FieldNet Blog</h1>
            <p className="text-lg text-muted-foreground">Insights, updates and case studies from our global team.</p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center text-muted-foreground">No posts found.</div>
          ) : (
            <>
              <SearchBar initialPosts={posts} />
            </>
          )}
          </Reveal>
        </div>
      </main>

      {/* CTA: Ready to Collaborate (same style as What We Do) */}
      <section className="border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border border-cyan-700 bg-cyan-600 h-full flex flex-col md:flex-row p-8 items-start md:items-center md:justify-between gap-4">
            <div>
              <div className="uppercase text-sm font-medium text-white mb-2">Ready to Collaborate?</div>
              <h3 className="text-xl font-semibold text-white mb-1">Work with a seasoned global research team</h3>
              <p className="text-white/90 mb-4">
                Let’s apply the right methodologies and quality controls to answer your toughest questions.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center bg-white px-5 py-2.5 text-base font-bold text-cyan-600 shadow-lg transition-colors hover:bg-indigo-50 md:ml-auto whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
