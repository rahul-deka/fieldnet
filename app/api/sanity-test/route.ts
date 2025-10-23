import { NextResponse } from 'next/server'
import { fetchPosts } from '@/lib/sanity'

export async function GET() {
  try {
    const posts = await fetchPosts()
    return NextResponse.json({ ok: true, count: posts.length, posts })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? String(err) }, { status: 500 })
  }
}
