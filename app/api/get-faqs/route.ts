import { NextResponse } from 'next/server';

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 7000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export async function GET() {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json(
      { error: 'Google Script URL not configured' },
      { status: 500 }
    );
  }

  try {
    // Fetch FAQs from Google Apps Script with a timeout to avoid long hangs in dev
    const response = await fetchWithTimeout(`${scriptUrl}?action=getFAQs`, {
      method: 'GET',
      cache: 'no-store', // always fetch fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch FAQs');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // Log the original error for debugging
    console.error('Error fetching FAQs:', error);
    // Surface an error status for the client
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
  }
}
