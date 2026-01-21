export const metadata = {
  title: "Clients | FieldNet Global Research",
  description: "See FieldNet's client list: global brands, organizations, and partners we've worked with in market research.",
};
"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Reveal from "@/components/reveal";

// Helper to get all images in a resources subfolder
const getLogosForCategory = (categoryFolder: string): string[] => {
  const logoMap: Record<string, string[]> = {
    'Apparals': ['Arvind.jpg', 'Bewakoof.jpg', 'Trident Group.jpg'],
    'Beverages': ['Budweiser.jpg', 'Carlsberg.jpg', 'Coca Cola.jpg', 'Diageo.jpg', "Foster's.jpg", 'Kingfisher.jpg', 'Pepsi.jpg', 'Pernod Ricard.jpg', 'Tiger Beer Beverage.jpg'],
    'Education': ['Aakash.jpg', 'BITS Pilani.jpg', "Byju's.jpg", 'Edvancer.jpg', 'Enviroskills Academy.jpg', 'Excellence in Education.jpg', 'Kothari Classes.jpg', 'Navneet.jpg'],
    'FMCG': ['Ambipur.jpg', 'Ariel.jpg', 'Bru.jpg', 'Clinic Plus.jpg', 'D Mart.jpg', 'Danone.jpg', 'Dove.jpg', 'Emami.jpg', 'Epigamia.jpg', 'Fair & Lovely.jpg', 'Ferrero Rocher.jpg', 'Freshtrop.jpg', 'Gillette.jpg', 'Head & Shoulders.jpg', 'Huggies.jpg', 'HUL.jpg', 'Indulekha.jpg', 'Kissan.jpg', 'Knorr.jpg', 'Lux.jpg', 'Mother Dairy.jpg', 'Nookad.jpg', 'Oji Paper.jpg', 'Olay.jpg', 'Old Spice.jpg', 'P&G.jpg', 'Pampers.jpg', 'Pantene.jpg', 'Pureit.jpg', 'Purple.jpg', 'Rasna.jpg', 'Red Label.jpg', 'Rejoice.jpg', 'Sunsilk.jpg', 'Surf excel.jpg', 'Taaza.jpg', 'Tide.jpg', 'Whisper.jpg'],
    'Media': ['Aqumena.jpg', 'Audacity.jpg', 'Everest.jpg', 'Leo.jpg', 'Magic9 Media & Consumer Knowledge Pvt Ltd.jpg', 'Multiprint Advertising.jpg', 'Redi Fusion.jpg', 'Rediff.jpg', 'Smart Mandate.jpg'],
    'Paints': ['Asian Paints.jpg', 'Berger Paints.jpg', 'JSW.jpg', 'Nippon Paint.jpg', 'Shalimar Paints.jpg'],
    'Pipes': ['Finolex Pipes.jpg', 'Goel Pipes.jpg'],
    'Technology': ['Genpact.jpg', 'Wellthy.jpg'],
    'BFSI': ['DBS.jpg', 'Future Generali.jpg', 'HDFC Bank.jpg', 'HDFC Life.jpg', 'Kotak Life Insurance.jpg', 'NPCI.jpg'],
    'Consulting': ['BCG.jpg', 'EY.jpg', 'Forrester.jpg', 'Frost & Sullivan.jpg', 'Institute.jpg', 'Team Lease.jpg'],
    'Electronics': ['Haier.jpg', 'LG.jpg'],
    'Market Research': ['Azul Partners.jpg', 'Azure.jpg', 'Blue Ocean.jpg', 'Cimigo.jpg', 'Clear Strategy.jpg', 'Collabrant.jpg', 'Concept Ventures.jpg', 'Cross Tab.jpg', 'Dy Works.jpg', 'Factive.jpg', 'Focus.jpg', 'Impetus Research.jpg', 'Ipsos.jpg', 'Iqvia.jpg', 'IRADE.jpg', 'IVORY.jpg', 'LeadCap Ventures.jpg', 'Lumiere.jpg', 'Market Men.jpg', 'Market Search.jpg', 'Millward Brown.jpg', 'MMRS.jpg', 'Nielsen.jpg', 'ORC International.jpg', 'Ormax.jpg', 'Phoenix.jpg', 'Prastut Consulting.jpg', 'QED Research & Consultancy.jpg', 'The Research Practice Group.jpg', 'Value Notes.jpg', 'White Canvases.jpg'],
    'Others': ['Data Prompt International.jpg', 'Empire.jpg', 'ESOMAR.jpg', 'Inquest.jpg', 'Key Base.jpg', 'Nukkad.jpg', 'Omnihub.jpg', 'Origa.jpg', 'Pipa Bella Jweller.jpg', 'Tata Trusts.jpg'],
    'Pharmaceutical': ['Abbott.jpg', 'Bayer.jpg', 'Cadila.jpg', 'GSK.jpg', 'Pfizer.jpg', 'Ranbaxy.jpg', 'ReeLabs.jpg', 'Reeveda.jpg', 'Rusan.jpg', 'Vicks.jpg', 'Westat.jpg'],
    'Startup': ['As chefs cook.jpg', 'Dhakhila.jpg', 'Marketplace.jpg', 'Vivekananda Health.jpg'],
  };
  return logoMap[categoryFolder] || [];
};

export default function ClientsPage() {
  const categories = [
    { name: 'Apparals', folder: 'Apparals' },
    { name: 'Beverages', folder: 'Beverages' },
    { name: 'Education', folder: 'Education' },
    { name: 'FMCG', folder: 'FMCG' },
    { name: 'Media', folder: 'Media' },
    { name: 'Paints', folder: 'Paints' },
    { name: 'Pipes', folder: 'Pipes' },
    { name: 'Technology', folder: 'Technology' },
    { name: 'BFSI', folder: 'BFSI' },
    { name: 'Consulting', folder: 'Consulting' },
    { name: 'Electronics', folder: 'Electronics' },
    { name: 'Market Research', folder: 'Market Research' },
    { name: 'Others', folder: 'Others' },
    { name: 'Pharmaceutical', folder: 'Pharmaceutical' },
    { name: 'Startup', folder: 'Startup' },
  ];

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Reveal>
          <div className="text-left mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Clients</h1>
          <p className="text-lg text-slate-600">We've partnered with organizations across sectors to deliver actionable insights.</p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => {
            const logos = getLogosForCategory(cat.folder);
            const [activeLogo, setActiveLogo] = useState(0);
            useEffect(() => {
              if (logos.length <= 1) return;
              const interval = setInterval(() => {
                setActiveLogo((prev) => (prev + 1) % logos.length);
              }, 1600);
              return () => clearInterval(interval);
            }, [logos.length]);
            if (logos.length === 0) return null; // Skip empty categories
            return (
              <section key={cat.name} className="">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex-grow border-t border-slate-300"></div>
                  <h3 className="text-xl font-semibold text-slate-800 px-6">{cat.name}</h3>
                  <div className="flex-grow border-t border-slate-300"></div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center">
                  {logos.map((logo, idx) => (
                    <div key={idx} className="flex items-center justify-center p-4 bg-white/0 rounded">
                      <img
                        src={`/Resources/${encodeURIComponent(cat.folder)}/${encodeURIComponent(logo)}`}
                        alt={logo.replace(/\.(jpg|png)$/i, '')}
                        className={`max-h-28 w-auto object-contain transition-all duration-300 ${
                          idx === activeLogo ? 'grayscale-0' : 'grayscale'
                        } hover:grayscale-0`}
                        onMouseEnter={() => setActiveLogo(idx)}
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}