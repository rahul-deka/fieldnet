"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) {
      // already registered or failed — proceed safely
    }

    const els = gsap.utils.toArray<HTMLElement>(".reveal");

    els.forEach((el) => {
      // animate direct children for a nicer staggered reveal
      const targets = el.querySelectorAll<HTMLElement>(":scope > *");
      gsap.set(targets, { opacity: 0, y: 24 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      // cleanup
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {}
      try {
        gsap.killTweensOf(els as any);
      } catch (e) {}
    };
  }, []);

  return null;
}
