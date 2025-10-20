"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ClientsPage() {
  const clients = [
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
  ];

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Clients</h1>
          <p className="text-lg text-slate-600">We've partnered with organizations across sectors to deliver actionable insights.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center w-full h-24">
              <img
                src={`/clients/${client.logo}`}
                alt={client.name}
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
