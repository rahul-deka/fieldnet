import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 px-4">
        <h1 className="text-4xl font-bold mb-6 text-cyan-800">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">Get in touch with our team for inquiries, support, or to start your project. This page is a placeholder—add your contact details or form here.</p>
      </main>
      <Footer />
    </>
  );
}
