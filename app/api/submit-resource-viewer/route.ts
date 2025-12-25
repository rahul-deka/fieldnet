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

    // Format timestamp as dd/mm/yyyy - hh:mm
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedTimestamp = `${day}/${month}/${year} - ${hours}:${minutes}`;

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
