"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you shortly.",
          duration: 5000,
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left Column - Header & Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-10 w-10 text-cyan-600" />
                <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                Have a question or want to discuss how we can help with your research needs? 
                Fill out the form and we'll get back to you as soon as possible.
              </p>

              {/* OR Divider */}
              <div className="hidden lg:block relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm font-medium text-slate-500">OR</span>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="hidden lg:block space-y-4">
                <a
                  href="tel:+917738814467"
                  className="flex items-center space-x-3 p-4 border border-cyan-700 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm text-white/90">+91 7738814467</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/917738814467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-green-700 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">WhatsApp Us</div>
                    <div className="text-sm text-white/90">Chat with our team</div>
                  </div>
                </a>

                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-orange-700 bg-orange-600 text-white rounded-lg hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Book a Call</div>
                    <div className="text-sm text-white/90">Schedule a consultation</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-900 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-900 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="w-full border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your research needs..."
                    rows={6}
                    className="w-full border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500 placeholder:text-slate-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 text-white !cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Submitting..." : "Submit Message"}
                </Button>
              </form>

              
            </div>
            {/* OR Divider - Mobile Only */}
              <div className="lg:hidden relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm font-medium text-slate-500">OR</span>
                </div>
              </div>

              {/* Quick Contact Buttons - Mobile Only */}
              <div className="lg:hidden space-y-4">
                <a
                  href="tel:+917738814467"
                  className="flex items-center space-x-3 p-4 border border-cyan-700 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm text-white/90">+91 7738814467</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/917738814467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-green-700 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">WhatsApp Us</div>
                    <div className="text-sm text-white/90">Chat with our team</div>
                  </div>
                </a>

                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-orange-700 bg-orange-600 text-white rounded-lg hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Book a Call</div>
                    <div className="text-sm text-white/90">Schedule a consultation</div>
                  </div>
                </a>
              </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
