import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import LogoBlackSVG from "@/components/ui/LogoBlackSVG"

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
  support: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Why Work With Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <LogoBlackSVG className="h-6 w-6" />
              <span className="text-xl font-bold text-card-foreground">Fieldnet Global Research</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Full service Market Research agency providing services to clients from across the globe. Established in
              December 2005 with over 150 years of collective experience.
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com/company/fieldnetglobal/" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link> */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
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
              <div className="mt-10 md:mt-0">
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
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-card-foreground">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-card-foreground">Contact Info</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Mumbai, India</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+91 (0) 22 XXXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>info@fieldnetglobal.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2025 Fieldnet Global Research LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}