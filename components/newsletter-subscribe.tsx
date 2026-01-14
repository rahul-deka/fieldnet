"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function NewsletterSubscribe({ showTitle = true, compact = false }: { showTitle?: boolean; compact?: boolean }) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const { toast } = useToast();

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
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setMessage(null);
        setEmail("");
      } else {
        const data = await response.json();
        if (data?.error === "This email is already subscribed") {
          setMessage({ type: "error", text: "This email is already subscribed to the newsletter." })
        } else {
          setMessage({ type: "error", text: "Failed to subscribe. Please try again." })
        }
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setMessage({ type: "error", text: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerClass = compact ? "mt-0" : "mt-10 md:mt-0"
  const formClass = compact ? "space-y-0" : "mt-6 space-y-4"
  const rowClass = compact ? "flex flex-row gap-2 items-center" : "flex flex-col sm:flex-row gap-2"

  return (
    <div className={containerClass}>
      {showTitle && <h3 className="text-sm font-semibold leading-6 text-card-foreground">Subscribe to Newsletter</h3>}
      <form onSubmit={handleSubmit} className={formClass}>
        <div className={rowClass}>
          <input
            type="email"
            placeholder="Subscribe to Newsletter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="flex-1 h-[44px] min-h-[44px] max-h-[44px] rounded-md border border-cyan-300 bg-white px-3 text-sm shadow-sm transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label={isSubmitting ? "Subscribing" : "Subscribe"}
            className="h-[44px] min-h-[44px] max-h-[44px] inline-flex items-center justify-center rounded-md bg-cyan-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            <Mail className="h-4 w-4" />
          </button>
        </div>
        {message && message.type === "error" && (
          <p
            className={`text-sm mt-2 text-red-600`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  )
}
