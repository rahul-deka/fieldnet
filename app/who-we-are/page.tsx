"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Globe2, Lightbulb, FlaskConical, Gauge, Shuffle, Headphones, Users2, Building2, Trophy, CheckCircle, Handshake } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export default function WhoWeArePage() {
  React.useEffect(() => {
    if (typeof window === "undefined") return
    const hash = window.location.hash
    if (hash) {
      const id = hash.slice(1)
      // Wait a tick for content to render, then scroll
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          // account for sticky header height so the section isn't hidden
          const header = document.querySelector('header') as HTMLElement | null
          const headerHeight = header ? header.offsetHeight : 80
          const rect = el.getBoundingClientRect()
          // subtract header height but add a small positive gap so we don't overshoot
          const targetY = rect.top + window.scrollY - headerHeight + 8
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative border-b border-slate-200 bg-gradient-to-b from-cyan-50 to-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">About Fieldnet</Badge>
                <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Who We Are
                </h1>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
                  Fieldnet Global Research LLP is a full‑service market research agency, formed in December 2005. We bring
                  a unique blend of client‑side and agency‑side expertise to deliver integrated, insightful research
                  across sectors and geographies.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Badge variant="outline" className="border-cyan-600 text-cyan-700">
                    Full‑Service MR
                  </Badge>
                  <Badge variant="outline" className="border-cyan-600 text-cyan-700">
                    Global Reach
                  </Badge>
                  <Badge variant="outline" className="border-cyan-600 text-cyan-700">
                    Quant + Qual
                  </Badge>
                </div>
              </div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 border border-slate-200 bg-white">
                {[
                  {
                    icon: <Trophy className="h-8 w-8 text-amber-500" />,
                    label: "Founded",
                    value: "2005"
                  },
                  {
                    icon: <Users2 className="h-8 w-8 text-cyan-600" />,
                    label: "Leadership Experience",
                    value: "150+ yrs"
                  },
                  {
                    icon: <Globe2 className="h-8 w-8 text-blue-500" />,
                    label: "Global Footprint",
                    value: "6+ regions"
                  },
                  {
                    icon: <Building2 className="h-8 w-8 text-teal-500" />,
                    label: "Sectors",
                    value: "15+"
                  }
                ].map((item, index) => {
                  const isLastCol = (index + 1) % 2 === 0;
                  const isLastRow = index >= 2;
                  return (
                    <div
                      key={item.label}
                      className={`relative h-full flex items-stretch
                        ${!isLastCol ? 'border-r border-slate-200' : ''}
                        ${!isLastRow || index === 2 ? 'border-b border-slate-200' : ''}
                      `}
                    >
                      <div className="flex flex-row p-8 w-full items-center">
                        <div className="flex items-center justify-center mr-4 shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="uppercase text-sm font-medium text-slate-500 mb-0.5">{item.label}</div>
                          <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* About Overview */}
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Story</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The company is led by passionate veterans from the Market Research industry. With a collective Market
                Research and Marketing experience of over 150 years, members of our core management team have worked with
                leading organizations such as AC Nielsen, IMRB, MARG, Cadbury, Puma, and BPL. This diverse background
                enables us to bring both a client perspective and an agency perspective to every project.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our delivery model, perfected over more than a decade, gives clients access to multiple geographic
                markets, diverse consumer segments, exceptional global research talent, and best‑in‑class project
                management at highly competitive costs.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-slate-200 bg-white h-full flex flex-col p-8 justify-start">
                <div className="uppercase text-sm font-medium text-slate-500 mb-2">What Clients Gain</div>
                <ul className="space-y-3 text-slate-600 pl-4 list-disc">
                  <li>Integrated, insight‑driven solutions across methodologies</li>
                  <li>Rigorous quality focus from team to data to delivery</li>
                  <li>Seamless access to multilingual and multi‑country execution</li>
                  <li>Efficient cost structures without compromising quality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="border-y border-slate-200 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Philosophy</h2>
            <p className="mt-3 text-slate-600">FieldNet bases its work philosophy on striking an optimal balance on ‘five pillars of work’ that foster trust, productivity and exceptional quality of service delivery.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-slate-200 bg-white">
              {[
                {
                  icon: <Users2 className="h-6 w-6 text-cyan-700" />,
                  title: "Client‑centric",
                  text: "Everything we do is focused on delivering measurable value to our clients."
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-cyan-700" />,
                  title: "Data Quality & Transparency",
                  text: "Rigorous quality controls, transparent methods, and clear reporting."
                },
                {
                  icon: <Lightbulb className="h-6 w-6 text-cyan-700" />,
                  title: "Innovation & Adaptability",
                  text: "Evolving methodologies and tools to meet changing market needs."
                },
                {
                  icon: <Trophy className="h-6 w-6 text-cyan-700" />,
                  title: "Commitment to Excellence",
                  text: "Relentless attention to detail and high standards across every project."
                },
                {
                  icon: <Handshake className="h-6 w-6 text-cyan-700" />,
                  title: "Collaboration & Partnership",
                  text: "Working closely with clients and partners to co‑create effective solutions."
                }
              ].map((item, index, arr) => {
                // Show right border except last item on desktop, bottom border except last item on mobile
                const showRight = index !== arr.length - 1;
                const showBottom = index !== arr.length - 1;
                return (
                  <div
                    key={item.title}
                    className={`relative h-full flex items-stretch
                      ${showRight ? 'sm:border-r border-slate-200' : ''}
                      ${showBottom ? 'border-b border-slate-200 sm:border-b-0' : ''}
                    `}
                  >
                    <div className="flex flex-col p-8 w-full items-start">
                      <div className="flex flex-row items-center mb-2">
                        {/* fixed-size icon box so all icons align on the same horizontal */}
                        <span className="flex items-center justify-center mr-3 shrink-0 h-8 w-8 rounded-full">
                          <span className="flex items-center justify-center text-cyan-700">{item.icon}</span>
                        </span>
                        <span className="uppercase text-sm font-medium text-slate-500 leading-tight">{item.title}</span>
                      </div>
                      <div className="text-base text-slate-700 leading-tight pl-1">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Partnership */}
  <section id="global-partnership" className="py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                Global Partnership
              </h2>
              <p className="text-lg text-slate-600">
                Operating across 20+ countries, delivering insights worldwide
              </p>
            </div>

            <div className="relative">
              {/* Left fade overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              
              {/* Right fade overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

              <Carousel
                plugins={[
                  Autoplay({
                    delay: 1000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                {[
                  { name: "India", code: "in" },
                  { name: "Pakistan", code: "pk" },
                  { name: "Sri Lanka", code: "lk" },
                  { name: "Nepal", code: "np" },
                  { name: "Bhutan", code: "bt" },
                  { name: "Bangladesh", code: "bd" },
                  { name: "Malaysia", code: "my" },
                  { name: "Japan", code: "jp" },
                  { name: "Indonesia", code: "id" },
                  { name: "Thailand", code: "th" },
                  { name: "UAE", code: "ae" },
                  { name: "South Africa", code: "za" },
                  { name: "Singapore", code: "sg" },
                  { name: "USA", code: "us" },
                  { name: "South Korea", code: "kr" },
                  { name: "China", code: "cn" },
                  { name: "Vietnam", code: "vn" },
                  // Duplicate for seamless loop
                  { name: "India", code: "in" },
                  { name: "Pakistan", code: "pk" },
                  { name: "Sri Lanka", code: "lk" },
                  { name: "Nepal", code: "np" },
                  { name: "Bhutan", code: "bt" },
                  { name: "Bangladesh", code: "bd" },
                  { name: "Malaysia", code: "my" },
                  { name: "Japan", code: "jp" },
                  { name: "Indonesia", code: "id" },
                  { name: "Thailand", code: "th" },
                  { name: "UAE", code: "ae" },
                  { name: "South Africa", code: "za" },
                  { name: "Singapore", code: "sg" },
                  { name: "USA", code: "us" },
                  { name: "South Korea", code: "kr" },
                  { name: "China", code: "cn" },
                  { name: "Vietnam", code: "vn" },
                ].map((country, index) => (
                  <CarouselItem key={`${country.code}-${index}`} className="pl-4 basis-auto">
                    <div className="flex flex-col items-center justify-center px-1">
                      <span 
                        className={`fi fi-${country.code} mb-3 ${country.code === 'np' ? '' : 'shadow-md'}`} 
                        style={{ fontSize: '4rem', display: 'inline-block' }}
                      ></span>
                      <p className="text-sm font-semibold text-slate-900 whitespace-nowrap">{country.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            </div>
          </div>
        </section>

        {/* Us over the years (Timeline) */}
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Us over the years</h2>
          <p className="mt-3 text-slate-600">A brief timeline showing key milestones in FieldNet's journey.</p>

          <div className="mt-8">
            <div className="relative">
              {/* continuous vertical line for timeline (desktop only) */}
              <div className="absolute left-[18px] lg:left-[124px] top-0 bottom-0 w-0.5 bg-slate-200 z-0" />
              <div className="space-y-8">
                {[
                  { year: '2005', title: 'Humble Beginnings', bullets: [
                      'Founder: Mr. Kamlesh Shukla, with a rich background at Nielsen and Ipsos, established Fieldnet as a proprietary company.',
                      'Employee Strength: 2 dedicated employees.',
                      'Focus: Initially focused on small-scale market research projects.',
                    ] },
                    { year: '2015', title: 'The Transformation', bullets: [
                      'From Proprietor to LLP: Fieldnet transitioned from a proprietary firm to a Limited Liability Partnership (LLP).',
                      'Employee Strength: 40 in-house employees and a field force of 100.',
                      'Reach: Expanded operations across Pan India.',
                      'Services: Introduced CATI (Computer Assisted Telephone Interviewing), CAPI (Computer Assisted Personal Interviewing), and Software Development services.',
                    ] },
                    { year: '2016', title: 'Expansion and Growth', bullets: [
                      'Employee Strength: 10 in-house employees and 600 field personnel.',
                      'Global Reach: Expanded operations beyond India into APAC and MENA (Middle East and North Africa).',
                      'Partnerships: Established 20 strategic partnerships across regions.',
                      'Field Strength: Increased to 50 highly skilled professionals, driving success in data collection and analysis.',
                    ] },
                    { year: '2019', title: 'Leadership Transition — Scaling New Heights', bullets: [
                      'Pooja Takes Over: Pooja Shukla, one of India\'s youngest CEOs, took over leadership, bringing a fresh vision to Fieldnet.',
                      'Focus: Continued innovation in software development and technology integration, laying the foundation for future growth.',
                      'Geographic Expansion: Further strengthened its presence in APAC and MENA regions.',
                    ] },
                    { year: 'Present', title: 'A Pan-India Leader', bullets: [
                      'Employee Strength: 30+ in-house professionals and a field force of over 600.',
                      'Location: Pan-India operations with a strong foothold in global markets.',
                      'Service Expertise: Specializing in market research, software development, and delivering cutting-edge solutions to clients across various industries.',
                      'Vision: Fieldnet continues to innovate under its dynamic leadership, solidifying its place as a trusted partner for research and insights across India and beyond.',
                    ] },
                  ].map((m) => (
                  <div key={m.year} className="relative grid grid-cols-[36px_minmax(0,1fr)] items-start lg:grid-cols-[96px_56px_1fr] lg:items-start">
                    {/* Year column (visible on mobile + desktop), right-aligned */}
                    {/* Year column: hidden on mobile, visible on lg */}
                    <div className="hidden lg:flex items-center justify-end pr-2">
                      <div className="text-sm uppercase tracking-wider text-slate-500 text-right">{m.year}</div>
                    </div>

                    {/* Line & marker column */}
                    <div className="relative flex justify-center">
                      <div className="relative z-10 mt-0">
                        <div className="w-4 h-4 rounded-full bg-cyan-600 border border-white shadow-sm" />
                      </div>
                      {/* (connector removed) */}
                    </div>

                    {/* Content column */}
                    <div className="pl-4 lg:pl-6">
                      {/* Mobile: show year above content */}
                      <div className="lg:hidden text-cyan-700 font-medium text-sm mb-2">{m.year}</div>
                      <div className="text-xl lg:text-2xl font-bold text-slate-900">{m.title}</div>
                      <ul className="mt-3 list-disc list-inside text-slate-600 space-y-2 max-w-none">
                        {m.bullets.map((b, i) => (
                          <li key={i} className="text-slate-600">{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Advisors */}
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Leadership & Advisors</h2>
            <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100 w-fit">
              150+ years combined experience
            </Badge>
          </div>
          <div className="mt-8 border border-slate-200 bg-white">
            {/* First two cards in a separate row at the top */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 border-b border-slate-200 bg-white">
              {[
                { name: "Kamlesh Shukla", position: "Founder & Managing Director", years: '—', exCompany: '—' },
                { name: "Ms. Pooja Shukla", position: "CEO", years: '—', exCompany: '—' },
              ].map((person, index) => (
                <div
                  key={person.name}
                  className={`flex flex-col items-center p-6 ${index === 0 ? 'sm:border-r border-slate-200 border-b sm:border-b-0' : ''}`}
                >
                  <img
                    src="/placeholder-user.jpg"
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover mb-3 border border-slate-200 bg-slate-100"
                  />
                  <div className="text-lg font-bold text-slate-900 mb-1 text-center">{person.name}</div>
                  <div className="text-sm text-slate-600 text-center">{person.position}</div>
                  <div className="text-sm text-slate-600 text-center mt-1">
                    <span className="font-medium text-slate-700">{person.years || '—'}</span>
                    <span className="mx-2 text-slate-400">•</span>
                    <span>{person.exCompany || '—'}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Rest of the cards in a 4-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Ravish Khare", position: "Head, Retail Audits & AI Research", years: '—', exCompany: '—' },
                { name: "A Ravindran", position: "Senior Research Advisor & Mentor", years: '—', exCompany: '—' },
                { name: "Ms. Geeta Shukla", position: "Executive Director", years: '—', exCompany: '—' },
                { name: "Aneesh Laiwala", position: "Consultant, Analysis", years: '—', exCompany: '—' },
                { name: "Arun Bhalerao", position: "Senior Consultant", years: '—', exCompany: '—' },
                { name: "Ms. Deepa Harjani", position: "Sr. Consultant, Market Research", years: '—', exCompany: '—' },
                { name: "Utpal Ghosh", position: "Research Consultant", years: '—', exCompany: '—' },
                { name: "Supriya Hardikar", position: "Head, Qualitative Research", years: '—', exCompany: '—' },
                { name: "Deepti Rege", position: "Qualitative Researcher (Consultant)", years: '—', exCompany: '—' },
                { name: "Biplab Ghosh", position: "Consultant Adviser", years: '—', exCompany: '—' },
                { name: "Umesh Jha", position: "Consultant, Quantitative Research", years: '—', exCompany: '—' },
                { name: "Manisha Jaiswal", position: "Qual & Quant Client Servicing (Consultant)", years: '—', exCompany: '—' },
              ].map((person, index, arr) => {
                const cols = 4;
                const total = arr.length;
                const colIndex = index % cols;
                const rowIndex = Math.floor(index / cols);
                const lastRowStartIndex = Math.floor((total - 1) / cols) * cols;
                const isInLastRow = index >= lastRowStartIndex;
                const cardsInLastRow = total - lastRowStartIndex;
                
                // Show right border if not the last card in the row
                const showRight = isInLastRow ? colIndex < cardsInLastRow - 1 : colIndex < cols - 1;
                // Show bottom border if not in the last row
                const showBottom = !isInLastRow;
                return (
                  <div
                    key={person.name}
                    className={`flex flex-col items-center p-6
                      ${showRight ? 'border-r border-slate-200' : ''}
                      ${showBottom ? 'border-b border-slate-200' : ''}
                    `}
                  >
                    <img
                      src="/placeholder-user.jpg"
                      alt={person.name}
                      className="w-20 h-20 rounded-full object-cover mb-3 border border-slate-200 bg-slate-100"
                    />
                    <div className="text-lg font-bold text-slate-900 mb-1 text-center">{person.name}</div>
                    <div className="text-sm text-slate-600 text-center">{person.position}</div>
                    <div className="text-sm text-slate-600 text-center mt-1">
                      <span className="font-medium text-slate-700">{person.years || '—'}</span>
                      <span className="mx-2 text-slate-400">•</span>
                      <span>{person.exCompany || '—'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className=" border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="border border-cyan-700 bg-cyan-600 h-full flex flex-col md:flex-row p-8 items-start md:items-center md:justify-between gap-4">
              <div>
                <div className="uppercase text-sm font-medium text-white mb-2">Ready to Collaborate?</div>
                <h3 className="text-xl font-semibold text-white mb-1">Work with a seasoned global research team</h3>
                <p className="text-white/90 mb-4">
                  Let’s apply the right methodologies and quality controls to answer your toughest questions.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center bg-white px-5 py-2.5 text-base font-bold text-cyan-600 shadow-lg transition-colors hover:bg-indigo-50 md:ml-auto"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Previous Clients */}
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Trusted by Fortune 500 Companies
            </h2>
            <p className="text-lg text-slate-600">
              We've partnered with industry leaders across various sectors to deliver actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: 'Forrester', logo: 'forrester.png' },
              { name: 'Bisleri', logo: 'bisleri.png' },
              { name: 'Coca-Cola', logo: 'coca-cola.png' },
              { name: 'Emami', logo: 'emami.png' },
              { name: 'Epigamia', logo: 'epigamia.png' },
              { name: 'Visa', logo: 'visa.png' },
              { name: 'Frost & Sullivan', logo: 'frostandsullivan.png' },
              { name: 'Genpact', logo: 'genpact.png' },
              { name: 'Godrej', logo: 'godrej.png' },
              { name: 'Haier', logo: 'haier.png' },
              { name: 'LG', logo: 'lg.png' },
              { name: 'Hersheys', logo: 'hersheys.png' },
              { name: 'ITC', logo: 'itc.png' },
              { name: 'HDFC', logo: 'hdfc.png' },
              { name: 'McDonalds', logo: 'mcd.png' },
              { name: 'Mother Dairy', logo: 'motherdairy.png' },
              { name: 'Nielsen', logo: 'nielsen.png' },
              { name: 'NPCI', logo: 'npci.png' },
              { name: 'P&G', logo: 'p&g.png' },
              { name: 'Pepsi', logo: 'pepsi.png' },
              { name: 'Saffola', logo: 'saffola.png' },
              { name: 'Unilever', logo: 'unilever.png' },
              { name: 'Ayush', logo: 'ayush.png' },
              { name: 'ZMedia', logo: 'zmedia.png' },
            ].map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center w-full h-24"
              >
                <img
                  src={`/clients/${client.logo}`}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <Card className="border-slate-200">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="rounded-md bg-slate-100 p-2">{icon}</div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
          <div className="text-lg font-semibold text-slate-900">{value}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function Pillar({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <Card className="h-full border-slate-200">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <div className="rounded-md bg-cyan-50 p-2">{icon}</div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{text}</p>
      </CardContent>
    </Card>
  )
}
