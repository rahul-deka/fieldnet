import { fetchPosts } from '@/lib/sanity'
export async function generateStaticParams() {
  const posts = await fetchPosts()
  return posts
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }))
}
import React from 'react'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { fetchPostBySlug } from '@/lib/sanity'
import PortableTextRenderer from '@/lib/portableTextRenderer'
import { format } from 'date-fns'

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
      // Log to Vercel serverless logs
      // eslint-disable-next-line no-console
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
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            {post.coverImage?.asset?.url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.coverImage.asset.url} alt={post.coverImage.alt || post.title} className="mb-6 rounded max-w-full" />
            )}
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
