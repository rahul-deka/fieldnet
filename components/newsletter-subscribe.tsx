"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setMessage({ type: "error", text: "Please enter a valid email address" })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Thank you for subscribing!" })
        setEmail("")
      } else {
        setMessage({ type: "error", text: "Failed to subscribe. Please try again." })
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setMessage({ type: "error", text: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-10 md:mt-0">
      <h3 className="text-sm font-semibold leading-6 text-card-foreground">Subscribe to Newsletter</h3>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="flex-1 h-[44px] min-h-[44px] max-h-[44px] rounded-md border border-cyan-300 bg-white px-3 text-sm shadow-sm transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-[44px] min-h-[44px] max-h-[44px] inline-flex items-center justify-center rounded-md bg-cyan-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap  cursor-pointer!"
          >
            <Mail className="h-4 w-4 mr-2" />
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
        {message && (
          <p
            className={`text-sm ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  )
}
