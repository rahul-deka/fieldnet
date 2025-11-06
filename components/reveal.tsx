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
  // Start with true on mobile to avoid hidden content issue
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Quick viewport check fallback: some mobile browsers/layouts delay IntersectionObserver callbacks
    // until a user interaction or reflow. If the element is already within the viewport on mount,
    // show it immediately so content isn't hidden until the user clicks something.
    const isInViewport = (node: Element) => {
      const rect = node.getBoundingClientRect()
      return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0
    }

    if (isInViewport(el)) {
      if (delay > 0) {
        const t = setTimeout(() => setVisible(true), delay)
        if (once) return () => clearTimeout(t)
      } else {
        setVisible(true)
        if (once) return
      }
    }

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
