import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function WhatWeDoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 px-4">
        <h1 className="text-4xl font-bold mb-6 text-cyan-800">What We Do</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">Discover our services, expertise, and differentiators. This page is a placeholder—add your content here.</p>
      </main>
      <Footer />
    </>
  );
}
