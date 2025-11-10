"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Chief Marketing Officer",
    company: "Global FMCG Brand",
    content: "FieldNet's insights helped us understand our target audience better than ever before. Their thorough research and actionable recommendations led to a 35% increase in campaign effectiveness.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Rajesh Kumar",
    role: "VP of Strategy",
    company: "Leading Beverage Company",
    content: "Working with FieldNet was a game-changer for our market entry strategy. Their comprehensive market analysis and consumer insights were instrumental in our successful launch across multiple regions.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Emily Chen",
    role: "Director of Research",
    company: "International Consulting Firm",
    content: "The level of detail and accuracy in FieldNet's research is unmatched. They delivered insights that not only met but exceeded our expectations, helping us serve our clients better.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Michael Roberts",
    role: "Head of Product",
    company: "Technology Startup",
    content: "FieldNet's product testing methodology provided us with clear, data-driven insights that shaped our product roadmap. Their expertise in both quantitative and qualitative research is exceptional.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Priya Sharma",
    role: "Brand Manager",
    company: "Leading Pharmaceutical Company",
    content: "The team at FieldNet demonstrated deep understanding of our industry. Their research helped us identify key market opportunities and refine our messaging to resonate with healthcare professionals.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "David Anderson",
    role: "CEO",
    company: "Retail Chain",
    content: "FieldNet's customer satisfaction research gave us the insights we needed to transform our customer experience. Their recommendations were practical, actionable, and delivered measurable results.",
    rating: 5,
    image: "/placeholder-user.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from the leaders who've experienced the FieldNet difference
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-cyan-600" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-slate-700 leading-relaxed mb-6 text-justify md:text-left flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                      />
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-600">{testimonial.role}</div>
                        <div className="text-sm text-cyan-700 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 mb-6">
            Join hundreds of satisfied clients who trust FieldNet for their research needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-cyan-700 transition-colors"
          >
            Start Your Project
          </a>
        </div> */}
      </div>
    </section>
  );
}
