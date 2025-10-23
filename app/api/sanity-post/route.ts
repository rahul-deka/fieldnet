import { NextResponse } from 'next/server'
import { fetchPostBySlug } from '@/lib/sanity'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug')
  if (!slug) return NextResponse.json({ ok: false, error: 'missing slug' }, { status: 400 })

  try {
    const post = await fetchPostBySlug(slug)
    if (!post) return NextResponse.json({ ok: false, error: 'not found' }, { status: 404 })
    return NextResponse.json({ ok: true, post })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? String(err) }, { status: 500 })
  }
}
