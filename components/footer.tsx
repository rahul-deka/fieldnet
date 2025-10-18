import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import LogoBlackSVG from "@/components/ui/LogoBlackSVG"
import { NewsletterSubscribe } from "@/components/newsletter-subscribe"

const navigation = {
  company: [
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Our Philosophy", href: "/who-we-are#philosophy" },
    { name: "Our Team", href: "/who-we-are#team" },
    { name: "Global Footprint", href: "/who-we-are#global" },
  ],
  services: [
    { name: "Market Research", href: "/services#market-research" },
    { name: "Qualitative Research", href: "/services#qualitative" },
    { name: "Quantitative Research", href: "/services#quantitative" },
    { name: "Audits & Polls", href: "/services#audits" },
  ],
  Support: [
    { name: "Careers", href: "" },
    { name: "Blog", href: "" },
    { name: "Resources", href: "" },
    { name: "Case Studies", href: "/case-studies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cyan-100 to-cyan-200 relative" aria-labelledby="footer-heading">
      {/* Top fade effect */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
  <div className="md:grid md:grid-cols-5 md:gap-8">
    <div className="space-y-8 md:col-span-2">
            <div className="flex items-center space-x-2">
              <LogoBlackSVG className="h-6 w-6" />
              <span className="text-xl font-bold text-card-foreground">Fieldnet Global Research</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Full service Market Research agency providing services to clients from across the globe. Established in
              December 2005 with over 150 years of collective experience.
            </p>
            {/* Contact info moved here (logos removed) */}
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="leading-6">
                  F-220, First Floor, The Dreams Mall, Station Road, Bhandup (West, near Bhandup Railway Station, Mumbai, Maharashtra 400078)
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9892787127</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@fieldnetglobal.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <a href="https://www.linkedin.com/company/fieldnetglobal/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-16 md:col-span-3 md:mt-0 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-card-foreground">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-card-foreground">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-card-foreground">Support</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.Support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-cyan-300/50 col-span-1 md:col-start-2 md:col-span-2">
              <NewsletterSubscribe />
            </div>
          </div>
          
        </div>
        {/* single newsletter instance maintained above; no duplicate blocks */}
        <div className="mt-16 border-t border-cyan-300/50 pt-8 sm:mt-20 lg:mt-24 text-center">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2025 Fieldnet Global Research LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}