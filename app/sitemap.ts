import { MetadataRoute } from 'next'
import { fetchPosts } from '@/lib/sanity'

const BASE_URL = 'https://www.fieldnetglobal.com'

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.9 },
  { url: `${BASE_URL}/case-studies`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/clients`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/newsroom`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/register`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/resources`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/what-we-do`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/who-we-are`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/careers`, changeFrequency: 'weekly', priority: 0.7 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    const posts = await fetchPosts()
    blogRoutes = posts
      .filter((post) => post.slug)
      .map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
  } catch (err) {
    console.error('Sitemap: failed to fetch blog posts', err)
  }

  return [...staticRoutes, ...blogRoutes]
}
