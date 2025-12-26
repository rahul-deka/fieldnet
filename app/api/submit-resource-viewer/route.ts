import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("Google Script URL is not configured");
      return NextResponse.json({ error: "Configuration error" }, { status: 500 });
    }

    // Format timestamp in Indian timezone
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    
    const parts = formatter.formatToParts(now);
    const day = parts.find(p => p.type === 'day')?.value;
    const month = parts.find(p => p.type === 'month')?.value;
    const year = parts.find(p => p.type === 'year')?.value;
    const hour = parts.find(p => p.type === 'hour')?.value;
    const minute = parts.find(p => p.type === 'minute')?.value;
    const formattedTimestamp = `${day}/${month}/${year} - ${hour}:${minute}`;

    const payload = {
      action: "resource_viewer",
      email,
      timestamp: formattedTimestamp,
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("Google Script error:", responseText);
      throw new Error("Failed to submit to Google Sheets");
    }

    return NextResponse.json({ success: true, message: "Email recorded successfully" });
  } catch (error) {
    console.error("Resource viewer submission error:", error);
    return NextResponse.json({ error: "Failed to record email" }, { status: 500 });
  }
}
