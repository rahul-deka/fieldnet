import { NextResponse } from 'next/server';

// Simple in-memory cache to avoid hitting the Apps Script on every request.
let cache: { data: any[]; expiresAt: number } | null = null;
const CACHE_TTL_MS = 1000 * 60 * 5; // 5 minutes

function normalizeFaqs(payload: any): { question: string; answer: string }[] {
	if (!payload) return [];
	if (Array.isArray(payload)) {
		// Already an array; try to detect shape
		if (payload.length === 0) return [];
		const first = payload[0];
		if (first && typeof first.question === 'string' && typeof first.answer === 'string') {
			return payload;
		}
		// If rows like [ [q, a], [q,a] ]
		if (Array.isArray(first)) {
			return payload.map((row: any[]) => ({ question: String(row[0] ?? ''), answer: String(row[1] ?? '') }));
		}
	}
	// If object with `faqs` property
	if (payload.faqs && Array.isArray(payload.faqs)) {
		return normalizeFaqs(payload.faqs);
	}
	return [];
}

export async function GET() {
	// Return from cache when fresh
	if (cache && Date.now() < cache.expiresAt) {
		// If debug requested, include raw cached payload
		return NextResponse.json({ faqs: cache.data });
	}

	const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
	if (!scriptUrl) {
		// No URL configured — return empty list
		return NextResponse.json({ faqs: [] });
	}

	try {
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 8000);
			// The Apps Script expects an 'action' query parameter (e.g. ?action=getFAQs)
			const urlWithAction = scriptUrl + (scriptUrl.includes('?') ? '&' : '?') + 'action=getFAQs';
			const res = await fetch(urlWithAction, { signal: controller.signal });
		clearTimeout(timeout);

		if (!res.ok) {
			console.error('Google script responded with status', res.status);
				return NextResponse.json({ faqs: [] });
		}

			const payload = await res.json();
			// If caller asked for debug, return raw payload for inspection
			const url = new URL((process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/api/get-faqs');
			// We can't access the incoming request here, so rely on search param parsing via URL? Instead, check environment variable DEBUG_FAQ_REQUEST for temporary debugging.
			// Note: To enable on-demand debug from client, append ?debug=1 to the api call; since we don't have the Request object here in this handler signature, we'll read the query from process.env.DEBUG_FAQ_REQUEST which you can toggle temporarily.
			if (process.env.DEBUG_FAQ_REQUEST === '1') {
				return NextResponse.json({ raw: payload });
			}
		const faqs = normalizeFaqs(payload);

		// Cache result
		cache = { data: faqs, expiresAt: Date.now() + CACHE_TTL_MS };

		return NextResponse.json({ faqs });
	} catch (err) {
		console.error('Error fetching FAQs from Google Script:', err);
		// On error, return empty list (client shows friendly message)
		return NextResponse.json({ faqs: [] });
	}
}
