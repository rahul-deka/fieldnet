"use client"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { GA_MEASUREMENT_ID, pageview, event as gtagEvent } from "@/lib/gtag"

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    // push an initial pageview
    pageview(pathname + (searchParams ? `?${searchParams.toString()}` : ""))
    // track route changes (when pathname changes)
    // usePathname already triggers re-render
  }, [pathname, searchParams])

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    // track form submissions globally
    function onSubmit(e: Event) {
      try {
        const form = e.target as HTMLFormElement
        const id = form?.id || form?.name || 'form'
        gtagEvent({ action: 'submit', category: 'form', label: id })
      } catch (err) {
        // swallow
      }
    }

    // track clicks on elements with data-ga-event attributes
    function onClick(e: MouseEvent) {
      try {
        const el = e.target as HTMLElement
        const target = el.closest('[data-ga-event]') as HTMLElement | null
        if (!target) return
        const action = target.getAttribute('data-ga-event') || 'click'
        const category = target.getAttribute('data-ga-category') || 'ui'
        const label = target.getAttribute('data-ga-label') || target.id || target.innerText?.slice(0, 64)
        gtagEvent({ action, category, label })
      } catch (err) {
        // swallow
      }
    }

    document.addEventListener('submit', onSubmit, true)
    document.addEventListener('click', onClick, true)

    return () => {
      document.removeEventListener('submit', onSubmit, true)
      document.removeEventListener('click', onClick, true)
    }
  }, [])

  return null
}
