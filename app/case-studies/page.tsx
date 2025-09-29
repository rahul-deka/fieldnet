import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 px-4">
        <h1 className="text-4xl font-bold mb-6 text-cyan-800">Case Studies</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">Explore our success stories and research projects. This page is a placeholder—add your content here.</p>
      </main>
      <Footer />
    </>
  );
}
