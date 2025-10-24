"use client";

import React, { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // local flag tracked in closure to avoid re-attaching scroll listener
    let menuOpen = false;

    const updateVisibility = () => {
      setVisible(window.scrollY > 300 && !menuOpen);
    }

    const onScroll = () => updateVisibility();

    const onMenu = (e: Event) => {
      try {
        // @ts-ignore - event may be CustomEvent
        menuOpen = !!e?.detail?.open;
      } catch (err) {
        menuOpen = false;
      }
      updateVisibility();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mobile-menu", onMenu as EventListener);
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mobile-menu", onMenu as EventListener);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 z-50 p-3 rounded-full bg-cyan-600 text-white shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
