import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, date, timeSlot, purpose } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !date || !timeSlot || !purpose) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get the Google Apps Script URL from environment variable
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    
    if (!scriptUrl) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare data to send to Google Sheets
    const bookingData = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      firstName,
      lastName,
      email,
      phone,
      date,
      timeSlot,
      purpose,
      action: 'booking' // Add action to differentiate from contact form
    };

    // Send to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit booking');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Booking scheduled successfully' 
    });

  } catch (error) {
    console.error('Error submitting booking:', error);
    return NextResponse.json(
      { error: 'Failed to schedule call' },
      { status: 500 }
    );
  }
}
