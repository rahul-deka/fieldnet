"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function ClientsCarouselSection() {
  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-slate-800">Trusted by Leading Brands</h2> */}
        <div className="relative">
          <Carousel
            plugins={[
              Autoplay({
                delay: 1200,
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
                { src: "/Resources/FMCG/HUL.jpg" },
                { src: "/Resources/FMCG/D Mart.jpg" },
                { src: "/Resources/FMCG/Mother Dairy.jpg" },
                { src: "/Resources/FMCG/P&G.jpg" },
                { src: "/Resources/Paints/JSW.jpg" },
                { src: "/Resources/Paints/Asian Paints.jpg" },
                { src: "/Resources/Pharmaceutical/Abbott.jpg" },
                { src: "/Resources/Pharmaceutical/Bayer.jpg" },
                { src: "/Resources/Pharmaceutical/Ranbaxy.jpg" },
                { src: "/Resources/Pharmaceutical/Pfizer.jpg" },
                { src: "/Resources/BFSI/HDFC Bank.jpg" },
                { src: "/Resources/BFSI/Future Generali.jpg" },
                { src: "/Resources/BFSI/NPCI.jpg" },
                { src: "/clients/ayush.png" },
                { src: "/clients/lg.png" },
                // Duplicate for seamless loop
                { src: "/Resources/FMCG/HUL.jpg" },
                { src: "/Resources/FMCG/D Mart.jpg" },
                { src: "/Resources/FMCG/Mother Dairy.jpg" },
                { src: "/Resources/FMCG/P&G.jpg" },
                { src: "/Resources/Paints/JSW.jpg" },
                { src: "/Resources/Paints/Asian Paints.jpg" },
                { src: "/Resources/Pharmaceutical/Abbott.jpg" },
                { src: "/Resources/Pharmaceutical/Bayer.jpg" },
                { src: "/Resources/Pharmaceutical/Ranbaxy.jpg" },
                { src: "/Resources/Pharmaceutical/Pfizer.jpg" },
                { src: "/Resources/BFSI/HDFC Bank.jpg" },
                { src: "/Resources/BFSI/Future Generali.jpg" },
                { src: "/Resources/BFSI/NPCI.jpg" },
                { src: "/clients/ayush.png" },
                { src: "/clients/lg.png" },
              ].map((client, index) => (
                <CarouselItem key={index} className="pl-4 basis-auto">
                  <div className="flex items-center justify-center h-24 px-1">
                    <Image src={client.src} alt="Client Logo" width={96} height={64} className="object-contain max-h-20" style={{ maxHeight: 80, width: 'auto', height: 'auto' }} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
