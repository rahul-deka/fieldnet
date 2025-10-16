import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

    if (!scriptUrl) {
      console.error("Google Script URL is not configured")
      return NextResponse.json({ error: "Configuration error" }, { status: 500 })
    }

    const payload = {
      action: "newsletter",
      email,
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const responseText = await response.text()

    if (!response.ok) {
      console.error("Google Script error:", responseText)
      throw new Error("Failed to submit to Google Sheets")
    }

    const result = JSON.parse(responseText)
    
    if (result.status === 'already_subscribed') {
      return NextResponse.json({ error: "This email is already subscribed" }, { status: 400 })
    }

    return NextResponse.json({ success: true, message: "Subscribed successfully" })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
