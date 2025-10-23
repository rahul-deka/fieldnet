export type Post = {
  _id: string
  title: string
  slug?: string
  excerpt?: string
  publishedAt?: string
  body?: any[]
  coverImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    alt?: string
  }
}

export async function fetchPosts(): Promise<Post[]> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

  if (!projectId) {
    return []
  }

  const groq = `*[_type == "post"]{_id, title, "slug": slug.current, excerpt, publishedAt, coverImage{alt, asset->{_id, url}}}|order(publishedAt desc)`
  const url = `https://${projectId}.api.sanity.io/v2023-10-21/data/query/${dataset}?query=${encodeURIComponent(groq)}`

  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) {
    throw new Error(`Failed to fetch Sanity posts: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()
  return json.result || []
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

  if (!projectId) return null

  const groq = `*[_type == "post" && slug.current == "${slug}"][0]{_id, title, "slug": slug.current, excerpt, publishedAt, body, coverImage{alt, asset->{_id, url}}}`
  const url = `https://${projectId}.api.sanity.io/v2023-10-21/data/query/${dataset}?query=${encodeURIComponent(groq)}`

  const res = await fetch(url)
  if (!res.ok) {
    const txt = await res.text().catch(() => '')
    throw new Error(`Failed to fetch Sanity post: ${res.status} ${res.statusText} ${txt}`)
  }

  const json = await res.json()
  return json.result || null
}
