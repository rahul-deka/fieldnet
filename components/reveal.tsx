"use client"

import React, { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

export default function Reveal({
  children,
  className = "",
  threshold = 0.12,
  rootMargin = "0px",
  once = true,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          if (delay > 0) {
            const t = setTimeout(() => setVisible(true), delay)
            if (once) obs.disconnect()
            return () => clearTimeout(t)
          }
          setVisible(true)
          if (once) obs.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin, once, delay])

  return (
    <div
      ref={ref as any}
      className={`${className} transform transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  )
}
