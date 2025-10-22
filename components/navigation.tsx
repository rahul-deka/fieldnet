"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn, CircleUser } from "lucide-react"
import LogoSVG from "@/components/ui/LogoSVG"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Do", href: "/what-we-do" },
  // { name: "Our Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  // { name: "Why Work With Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const LogoText = () => (
    <Link href="/" className="-m-1.5 p-1.5 group">
      <span className="sr-only">Fieldnet Global Research</span>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <LogoSVG className="h-10 w-10 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
        </div>
        <div>
          <span className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
            Fieldnet Global Research
          </span>
          <div className="text-xs text-slate-500 font-medium">Market Research Excellence</div>
        </div>
      </div>
    </Link>
  );

  return (
    <header className="bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 w-full border-b border-slate-200 shadow-sm">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Left: Logo/Text */}
        <div className="flex flex-1">
          <LogoText />
        </div>
        {/* Right: Action button and nav links (desktop only) */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-x-8">
          
          <div className="flex gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative whitespace-nowrap text-sm font-semibold leading-6 text-slate-700 hover:text-cyan-600 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-cyan-50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-600 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>
          <Link
            href="/register"
            className="flex items-center justify-center p-2 rounded-lg hover:bg-cyan-50 transition-colors group"
            title="Login / Register"
          >
            <CircleUser className="h-5 w-5 text-slate-700 group-hover:text-cyan-600 transition-colors" />
          </Link>
          <Button
            asChild
            className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg border-0"
            style={{ backgroundColor: "#0891b2" }}
          >
            <a href="tel:+919892787127">Call Us</a>
          </Button>
        </div>
        {/* Hamburger button (mobile only) */}
        <div className="flex lg:hidden">
          {!mobileMenuOpen && (
            <Button
              variant="ghost"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          )}
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true" style={{zIndex: 9999, position: 'fixed', top: 0, right: 0, width: '100vw', height: '100vh', background: 'rgba(255,255,255,0.98)', overflowY: 'auto'}}>
          <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white">
            <LogoText />
            <Button
              variant="ghost"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="p-6">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-base font-semibold leading-7 text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 space-y-3">
              {/* <Button
                variant="outline"
                asChild
                className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button> */}
              <Button
                asChild
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white border-0"
                style={{ backgroundColor: "#0891b2" }}
              >
                <a href="tel:+919892787127">Call Us</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <Link href="/register" className="flex items-center justify-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Panel Registration
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}