import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, UserPlus } from "lucide-react"
import LogoBlackSVG from "@/components/ui/LogoBlackSVG"
import { NewsletterSubscribe } from "@/components/newsletter-subscribe"
import Image from "next/image"

const navigation = {
    company: [
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Our Philosophy", href: "/who-we-are#philosophy" },
    { name: "Our Team", href: "/who-we-are#team" },
    { name: "Global Footprint", href: "/who-we-are#global-partnership" },
    { name: "Clients", href: "/clients" },
  ],
  services: [
    { name: "Market Research Services", href: "/what-we-do#market-research-services" },
    { name: "Market Research Solutions", href: "/what-we-do#market-research-solutions" },
    { name: "Audits and Polls", href: "/what-we-do#audits-and-polls" },
    { name: "Market Research Support Services", href: "/what-we-do#market-research-support-services" },
  ],
  Support: [
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Resources", href: "/resources" },
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
            <div className="flex items-center">
              <img src="/logo/logo%20full.svg" alt="FieldNet Global Research" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Full service Market Research agency providing services to clients from across the globe. Established in
              December 2004 with over 150 years of collective experience.
            </p>
            {/* Contact info moved here (logos removed) */}
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="leading-6">
                  <a href="https://maps.app.goo.gl/94zTawPvjSpKJvEX6">F-220, First Floor, The Dreams Mall, Station Road, Bhandup (West, near Bhandup Railway Station, Mumbai, Maharashtra 400078)</a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span><a href="tel:+919892787127">+91 9892787127</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span><a href="mailto:info@fieldnetglobal.com">info@fieldnetglobal.com</a></span>
              </div>
                <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <a href="https://www.linkedin.com/company/fieldnetglobal/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="h-4 w-4" />
                <a href="https://www.facebook.com/field.netglobal.8/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
              </div>
              <div className="mt-2">
                <a href="/register" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-600 text-white font-semibold shadow hover:bg-cyan-700 transition-colors text-sm">
                  <UserPlus className="h-4 w-4 text-white" />
                  Be part of Respondent Panel
                </a>
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

            <div className="mt-8 pt-6 border-t border-cyan-300/50 col-span-1 md:col-start-1 md:col-span-3">
              <div className="w-full flex items-center md:justify-between flex-wrap gap-4">
                <div className="flex-1 flex items-center justify-center">
                  <Image src="/programs/goldman10.png" alt="goldman" width={140} height={70} className="object-contain" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <Image src="/programs/nsrceliimb.png" alt="nsrc" width={140} height={70} className="object-contain" />
                </div>
                <div className="flex-1 flex items-center justify-center md:justify-start">
                  <Image src="/programs/esomer.png" alt="esomer" width={140} height={70} className="object-contain" />
                </div>
                <div className="flex-1 flex items-center justify-center md:justify-end">
                  <Image src="/programs/wombcircle.png" alt="wombcircle" width={140} height={70} className="object-contain" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <Image src="/programs/nice.png" alt="nice" width={140} height={70} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        {/* single newsletter instance maintained above; no duplicate blocks */}
        <div className="mt-1 border-t border-cyan-300/50 sm:mt-20 lg:mt-24 py-6">
          <div className="mx-auto max-w-7xl px-6 md:px-0 flex flex-col md:flex-row items-center md:justify-between gap-4">
            <div className="w-full md:w-auto">
              <NewsletterSubscribe showTitle={false} compact />
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2004 - Present | FieldNet Global Research LLP.
              <span className="block md:inline text-center"> All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}