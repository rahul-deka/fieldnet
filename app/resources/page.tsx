export const metadata = {
  title: "Resources | FieldNet Global Research",
  description: "Download whitepapers, reports, and methodology notes from FieldNet's global research experts.",
};
import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BackToTopButton from "@/components/back-to-top";
import Reveal from "@/components/reveal";
import { fetchResources } from "@/lib/sanity";
import { ResourcesContent } from "@/components/resources-content";

export const revalidate = 60; // Revalidate every 60 seconds

async function getResources() {
  try {
    return await fetchResources();
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return [];
  }
}

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Resources
            </h1>
            <p className="text-lg text-slate-600">
              Helpful whitepapers, reports and methodology notes.
            </p>
          </div>

          <ResourcesContent resources={resources} />
        </Reveal>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

