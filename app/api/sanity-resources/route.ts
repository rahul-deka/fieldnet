import { NextResponse } from 'next/server'
import { fetchResources } from '@/lib/sanity'

export async function GET() {
  try {
    const resources = await fetchResources()
    return NextResponse.json(resources)
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? String(err) }, { status: 500 })
  }
}
