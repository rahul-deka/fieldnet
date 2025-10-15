import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    
    if (!scriptUrl) {
      return NextResponse.json(
        { error: 'Google Script URL not configured' },
        { status: 500 }
      );
    }

    // Fetch announcement data from Google Sheets
    const response = await fetch(`${scriptUrl}?action=getAnnouncement`, {
      method: 'GET',
      cache: 'no-store', // Ensure fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch announcement');
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching announcement:', error);
    return NextResponse.json(
      { error: 'Failed to fetch announcement' },
      { status: 500 }
    );
  }
}
