"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Our Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Why Work With Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 w-full border-b border-slate-200 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Fieldnet Global Research</span>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Globe className="h-10 w-10 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  Fieldnet Global Research
                </span>
                <div className="text-xs text-slate-500 font-medium">Market Research Excellence</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-semibold leading-6 text-slate-700 hover:text-cyan-600 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-cyan-50 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-600 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" className="text-slate-600 hover:text-cyan-600" asChild>
            <Link href="/case-studies">Case Studies</Link>
          </Button>
          <Button
            asChild
            className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg border-0"
            style={{ backgroundColor: "#0891b2" }}
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Fieldnet Global Research</span>
                <div className="flex items-center space-x-2">
                  <Globe className="h-8 w-8 text-cyan-600" />
                  <span className="text-lg font-bold text-cyan-700">Fieldnet</span>
                </div>
              </Link>
              <Button variant="ghost" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-slate-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-xl px-4 py-3 text-base font-semibold leading-7 text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  >
                    <Link href="/case-studies">View Case Studies</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white border-0"
                    style={{ backgroundColor: "#0891b2" }}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
