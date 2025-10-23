import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: 'Full name, email and phone are required' }, { status: 400 });
    }

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error('Google Script URL not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const payload = {
      ...body,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      action: 'panel_registration',
    };

    const resp = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      console.error('Apps Script responded with non-OK', resp.status);
      throw new Error('Failed to submit to Google Sheets');
    }

    return NextResponse.json({ success: true, message: 'Registration submitted' });
  } catch (err) {
    console.error('Error in submit-registration route:', err);
    return NextResponse.json({ error: 'Failed to submit registration' }, { status: 500 });
  }
}
