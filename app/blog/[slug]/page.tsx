
import React from 'react'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { fetchPostBySlug, fetchPosts } from '@/lib/sanity'
import PortableTextRenderer from '@/lib/portableTextRenderer'
import { format } from 'date-fns'

export async function generateStaticParams() {
  const posts = await fetchPosts()
  return posts
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }))
}

type Props = { params: { slug: string } }

export default async function PostPage({ params }: Props) {
  const { slug } = params
  let post = null
  let error = null
  try {
    post = await fetchPostBySlug(slug)
  } catch (err: any) {
    error = err?.message || String(err)
    if (typeof window === 'undefined') {
      console.error('Error fetching post:', error)
    }
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-6 text-center text-red-600">
        <h1 className="text-2xl font-bold mb-4">Error loading post</h1>
        <pre className="bg-red-50 text-red-800 rounded p-4 text-sm overflow-x-auto">{error}</pre>
      </div>
    )
  }

  if (!post) return notFound()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <article>
            <div className="mb-6">
              <a href="/blog" className="inline-flex items-center text-sm text-cyan-600">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to blogs
              </a>
            </div>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            {(() => {
              const asset = post.coverImage?.asset;
              if (asset && typeof asset.url === 'string' && asset.url) {
                // eslint-disable-next-line @next/next/no-img-element
                return <img src={asset.url} alt={post.coverImage?.alt || post.title} className="mb-6 rounded max-w-full" />
              }
              // If asset exists but no url, log for debugging (only in dev/build)
              if (asset && typeof window === 'undefined') {
                // eslint-disable-next-line no-console
                console.warn('Sanity coverImage asset has no url:', JSON.stringify(asset))
              }
              return null
            })()}
            {post.publishedAt && (
              <div className="text-sm text-muted-foreground mb-6">{format(new Date(post.publishedAt), 'd MMM yyyy')}</div>
            )}

            <div className="prose max-w-none">
              {post.body ? (
                <PortableTextRenderer value={post.body} />
              ) : (
                <p className="text-muted-foreground">No content</p>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
