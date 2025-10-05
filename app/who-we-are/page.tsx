import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe2, Lightbulb, FlaskConical, Gauge, Shuffle, Headphones, Users2, Building2, Trophy } from "lucide-react";

export default function WhoWeArePage() {
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
        <section id="philosophy" className="border-y border-slate-200 bg-slate-50/60 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Philosophy</h2>
            <p className="mt-3 text-slate-600">The principles that shape our culture and the way we deliver research.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-slate-200 bg-white">
              {[
                {
                  icon: <Lightbulb className="h-6 w-6 text-cyan-700" />,
                  title: "Creativity",
                  text: "Freedom to think out of the box."
                },
                {
                  icon: <FlaskConical className="h-6 w-6 text-cyan-700" />,
                  title: "Innovation",
                  text: "Ideas are welcome from clients, partners, and associates."
                },
                {
                  icon: <Gauge className="h-6 w-6 text-cyan-700" />,
                  title: "Speed",
                  text: "Strong processes enable efficient delivery."
                },
                {
                  icon: <Shuffle className="h-6 w-6 text-cyan-700" />,
                  title: "Flexibility",
                  text: "Autonomous yet integrated operations network."
                },
                {
                  icon: <Headphones className="h-6 w-6 text-cyan-700" />,
                  title: "Responsiveness",
                  text: "Listen, learn, and course‑correct quickly."
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
                        <span className="flex items-center justify-center mr-3 shrink-0">{item.icon}</span>
                        <span className="uppercase text-sm font-medium text-slate-500">{item.title}</span>
                      </div>
                      <div className="text-base text-slate-700 leading-tight pl-1">{item.text}</div>
                    </div>
                  </div>
                );
              })}
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
                { name: "Kamlesh Shukla", position: "Founder & Managing Director" },
                { name: "Ms. Pooja Shukla", position: "CEO" },
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
                </div>
              ))}
            </div>
            {/* Rest of the cards in a 4-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Ravish Khare", position: "Head, Retail Audits & AI Research" },
                { name: "A Ravindran", position: "Senior Research Advisor & Mentor" },
                { name: "Ms. Geeta Shukla", position: "Executive Director" },
                { name: "Aneesh Laiwala", position: "Consultant, Analysis" },
                { name: "Arun Bhalerao", position: "Senior Consultant" },
                { name: "Ms. Deepa Harjani", position: "Sr. Consultant, Market Research" },
                { name: "Utpal Ghosh", position: "Research Consultant" },
                { name: "Supriya Hardikar", position: "Head, Qualitative Research" },
                { name: "Deepti Rege", position: "Qualitative Researcher (Consultant)" },
                { name: "Biplab Ghosh", position: "Consultant Adviser" },
                { name: "Umesh Jha", position: "Consultant, Quantitative Research" },
                { name: "Manisha Jaiswal", position: "Qual & Quant Client Servicing (Consultant)" },
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
