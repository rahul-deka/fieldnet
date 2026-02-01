
import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { fetchPostBySlug, fetchPosts } from '@/lib/sanity'
import PortableTextRenderer from '@/lib/portableTextRenderer'
import { format } from 'date-fns'
import Reveal from '@/components/reveal'
import ShareButton from '@/components/blog/share-button'

export async function generateStaticParams() {
  const posts = await fetchPosts()
  return posts
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const post = await fetchPostBySlug(slug)
  const siteUrl = 'https://www.fieldnetglobal.com/'
  const url = `${siteUrl.replace(/\/$/, '')}/blog/${slug}`

  if (!post) {
    return { title: 'Blog' }
  }

  const title = post.title || 'Blog'
  // derive description: prefer excerpt, fallback to plain text extracted from body
  let description = post.excerpt
  if (!description && post.body && Array.isArray(post.body)) {
    const extractPlainText = (blocks: any[]): string => {
      return blocks
        .map((b) => {
          if (!b) return ''
          if (b._type === 'block' && Array.isArray(b.children)) {
            return b.children.map((c: any) => c.text || '').join('')
          }
          // for other block types, try common text fields
          if (typeof b.text === 'string') return b.text
          if (typeof b.title === 'string') return b.title
          return ''
        })
        .join('\n')
    }

    const plain = extractPlainText(post.body).replace(/\s+/g, ' ').trim()
    if (plain) {
      const max = 160
      description = plain.length > max ? plain.slice(0, max).replace(/\s+\S*$/, '') + '...' : plain
    }
  }
  if (!description) description = 'Read this post on Fieldnet'
  const imageUrl = post.coverImage?.asset?.url

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      images: imageUrl ? [{ url: imageUrl, alt: post.coverImage?.alt || title }] : undefined,
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
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
          <Reveal>
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

            <ShareButton title={post.title} url={`/blog/${slug}`} />
          </article>
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
