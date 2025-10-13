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
    <footer className="bg-gradient-to-b from-cyan-100 to-cyan-200 relative" aria-labelledby="footer-heading">
      {/* Top fade effect */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      
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
            <div className="grid grid-cols-2 gap-4 max-w-xs">
              <img src="/programs/dell.png" alt="Dell" className="h-12 w-auto object-contain" />
              <img src="/programs/iimb.png" alt="IIM Bangalore" className="h-12 w-auto object-contain" />
              <img src="/programs/goldman.png" alt="Goldman Sachs" className="h-12 w-auto object-contain" />
              <img src="/programs/nsrcel.png" alt="NSRCEL" className="h-12 w-auto object-contain" />
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
                  <a 
                    href="https://maps.app.goo.gl/i3xHQcrsZym2aq267" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Mumbai, India</span>
                  </a>
                  <a 
                    href="tel:+917738814467"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+91 7738814467</span>
                  </a>
                  <a 
                    href="mailto:info@fieldnetglobal.com"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@fieldnetglobal.com</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/fieldnetglobal/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-cyan-300/50 pt-8 sm:mt-20 lg:mt-24 text-center">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2025 Fieldnet Global Research LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}