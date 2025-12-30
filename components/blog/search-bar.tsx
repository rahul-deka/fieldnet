"use client"

import React, { useMemo, useState } from 'react'
import { format } from 'date-fns'
import Link from 'next/link'

type Post = {
  _id: string
  title: string
  slug?: string
  excerpt?: string
  publishedAt?: string
  coverImage?: { asset?: { url?: string }; alt?: string }
}

export default function SearchBar({ initialPosts }: { initialPosts: Post[] }) {
  const [query, setQuery] = useState('')
  const [activeQuery, setActiveQuery] = useState('')

  const filtered = useMemo(() => {
    const q = activeQuery.trim().toLowerCase()
    if (!q) return initialPosts
    return initialPosts.filter((p) => {
      const t = (p.title || '').toLowerCase()
      const e = (p.excerpt || '').toLowerCase()
      return t.includes(q) || e.includes(q)
    })
  }, [initialPosts, activeQuery])

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setActiveQuery(query)
        }}
        className="max-w-3xl mx-auto mb-8"
      >
  <div className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="search" className="sr-only">
            Search posts
          </label>
          <input
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts by title or excerpt..."
            className="flex-1 px-4 py-3 border border-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
          />
          <button type="submit" className="px-4 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 w-full sm:w-auto">
            Search
          </button>
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setActiveQuery('')
            }}
            className="px-3 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 w-full sm:w-auto"
          >
            Clear
          </button>
        </div>
  {/* result count intentionally hidden */}
      </form>

  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 px-6">
        {filtered.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug || post._id}`} className="block">
            <article className="flex flex-col md:flex-row overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="md:w-48 w-full md:h-auto h-44 sm:h-48 flex-shrink-0 p-3 sm:p-4 flex items-center justify-center">
              <div className="h-full w-full rounded-lg overflow-hidden bg-gray-50">
                {post.coverImage?.asset?.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.coverImage.asset.url}
                    alt={post.coverImage?.alt || post.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-cyan-100 via-cyan-50 to-blue-100 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-cyan-600/40"
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
            </div>

            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-2xl font-semibold mb-2 no-underline">{post.title}</h3>

              {post.excerpt && (
                <p className="text-sm sm:text-base text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
              )}

              <div className="mt-1">
                <time className="text-sm text-muted-foreground" dateTime={post.publishedAt || ''}>
                  {post.publishedAt ? format(new Date(post.publishedAt), 'd MMM yyyy') : ''}
                </time>
              </div>
            </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
