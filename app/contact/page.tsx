// ...removed 'use client' directive to allow metadata export...
export const metadata = {
  title: "Contact | FieldNet Global Research",
  description: "Contact FieldNet for market research services, project inquiries, or support. Offices in India, UK, and worldwide.",
};

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, Mail, Calendar, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";

import { Toaster } from "@/components/ui/toaster";
import { MapSVG } from "@/components/map-svg";
import { OfficeGridMap } from "@/components/office-grid-map";
import BackToTopButton from "@/components/back-to-top";
import Reveal from "@/components/reveal";

export default function ContactPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    purpose: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch time slots from Google Sheets when booking form is shown
  useEffect(() => {
    if (showBookingForm && timeSlots.length === 0) {
      fetchTimeSlots();
    }
  }, [showBookingForm]);

  // Pre-fill message from URL parameter if present
  useEffect(() => {
    const messageParam = searchParams.get("message");
    if (messageParam) {
      setFormData((prev) => ({
        ...prev,
        message: decodeURIComponent(messageParam),
      }));
    }
  }, [searchParams]);

  const fetchTimeSlots = async () => {
    setIsLoadingSlots(true);
    try {
      const response = await fetch('/api/get-timeslots');
      if (response.ok) {
        const data = await response.json();
        if (data.timeSlots && data.timeSlots.length > 0) {
          setTimeSlots(data.timeSlots);
        } else {
          // Fallback to default slots if none found
          setTimeSlots([
            "09:00 AM - 10:00 AM",
            "10:00 AM - 11:00 AM",
            "11:00 AM - 12:00 PM",
            "02:00 PM - 03:00 PM",
            "03:00 PM - 04:00 PM",
            "04:00 PM - 05:00 PM",
          ]);
        }
      }
    } catch (error) {
      console.error('Failed to fetch time slots:', error);
      // Use fallback slots
      setTimeSlots([
        "09:00 AM - 10:00 AM",
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "02:00 PM - 03:00 PM",
        "03:00 PM - 04:00 PM",
        "04:00 PM - 05:00 PM",
      ]);
    } finally {
      setIsLoadingSlots(false);
    }
  };

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

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your call has been scheduled successfully. We'll send you a confirmation email shortly.",
          duration: 5000,
        });
        // Reset form
        setBookingData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          timeSlot: "",
          purpose: "",
        });
        setShowBookingForm(false);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to schedule call. Please try again.",
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

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBookingForm(true);
    
    // Scroll to the form section only on mobile (screen width < 1024px)
    setTimeout(() => {
      if (formRef.current && window.innerWidth < 1024) {
        const elementPosition = formRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100; // 100px offset to show the title
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20">
        <Reveal>
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
                  href="tel:+919892787127"
                  className="flex items-center space-x-3 p-4 border border-cyan-700 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm text-white/90">+91 9892787127</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919892787127"
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
                  href="#book-call"
                  onClick={handleBookingClick}
                  className="flex items-center space-x-3 p-4 border border-orange-700 bg-orange-600 text-white rounded-lg hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <Calendar className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Book a Call</div>
                    <div className="text-sm text-white/90">Schedule a consultation</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div ref={formRef} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              {showBookingForm ? (
                <>
                  {/* Back Button */}
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-6 transition-colors cursor-pointer!"
                  >
                    <ArrowLeft className="h-4 w-4 cursor-pointer!" />
                    <span className="text-sm font-medium cursor-pointer!">Back to Contact Form</span>
                  </button>

                  {/* Booking Form */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-6 w-6 text-orange-600" />
                      <h2 className="text-2xl font-bold text-slate-900">Schedule a Call</h2>
                    </div>
                    <p className="text-slate-600">Book a convenient time slot for your consultation</p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bookingFirstName" className="text-slate-900">
                          First Name *
                        </Label>
                        <Input
                          id="bookingFirstName"
                          name="firstName"
                          type="text"
                          required
                          value={bookingData.firstName}
                          onChange={handleBookingChange}
                          placeholder="John"
                          className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus-visible:ring-orange-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bookingLastName" className="text-slate-900">
                          Last Name *
                        </Label>
                        <Input
                          id="bookingLastName"
                          name="lastName"
                          type="text"
                          required
                          value={bookingData.lastName}
                          onChange={handleBookingChange}
                          placeholder="Doe"
                          className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus-visible:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="bookingEmail" className="text-slate-900">
                        Email *
                      </Label>
                      <Input
                        id="bookingEmail"
                        name="email"
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={handleBookingChange}
                        placeholder="john.doe@example.com"
                        className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus-visible:ring-orange-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="bookingPhone" className="text-slate-900">
                        Phone *
                      </Label>
                      <Input
                        id="bookingPhone"
                        name="phone"
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={handleBookingChange}
                        placeholder="+91 98765 43210"
                        className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus-visible:ring-orange-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="bookingDate" className="text-slate-900">
                        Preferred Date *
                      </Label>
                      <Input
                        id="bookingDate"
                        name="date"
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={handleBookingChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus-visible:ring-orange-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="bookingTimeSlot" className="text-slate-900">
                        Preferred Time Slot *
                      </Label>
                      <Select
                        value={bookingData.timeSlot}
                        onValueChange={(value) => setBookingData({ ...bookingData, timeSlot: value })}
                        required
                        disabled={isLoadingSlots}
                      >
                        <SelectTrigger className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus-visible:ring-orange-500">
                          <SelectValue placeholder={isLoadingSlots ? "Loading time slots..." : "Select a time slot"} />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem 
                              key={slot} 
                              value={slot}
                              className="focus:bg-orange-500 focus:text-white"
                            >
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bookingPurpose" className="text-slate-900">
                        Purpose of Call *
                      </Label>
                      <Textarea
                        id="bookingPurpose"
                        name="purpose"
                        required
                        value={bookingData.purpose}
                        onChange={handleBookingChange}
                        placeholder="Briefly describe what you'd like to discuss..."
                        rows={4}
                        className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus-visible:ring-orange-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 text-white !cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? "Scheduling..." : "Schedule Call"}
                    </Button>
                  </form>
                </>
              ) : (
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
              )}
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
                  href="tel:+919892787127"
                  className="flex items-center space-x-3 p-4 border border-cyan-700 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm text-white/90">+91 9892787127</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919892787127"
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
                  href="#book-call"
                  onClick={handleBookingClick}
                  className="flex items-center space-x-3 p-4 border border-orange-700 bg-orange-600 text-white rounded-lg hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <Calendar className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Book a Call</div>
                    <div className="text-sm text-white/90">Schedule a consultation</div>
                  </div>
                </a>
              </div>
          </div>
          </div>
        </Reveal>
      </main>
      {/* Head Offices Grid & Map */}
      <section className="w-full flex justify-center py-8">
        <div className="max-w-6xl w-full px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Head Offices Across India</h2>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 w-full">
            {/* Left: Map (wider) */}
            <div className="flex items-center justify-center md:pr-8">
              <div className="w-full h-[400px] md:h-[500px] max-w-2xl relative">
                <MapSVG className="w-full h-full" />
              </div>
            </div>
            {/* Right: All 6 offices stacked, no gap, no border radius, grid style (narrower) */}
            <div className="grid grid-cols-1 divide-y divide-gray-200 border border-gray-200 bg-white w-full mx-auto max-w-2xl md:max-w-xs md:mx-0">
              <div className="flex items-center gap-3 p-4">
                <span className="inline-block w-4 h-4 rounded-full border-2" style={{ backgroundColor: '#EF4444', borderColor: '#EF4444' }} title="Mumbai Office" />
                <div>
                  <div className="font-semibold text-gray-800">Delhi Office</div>
                  <div className="text-sm text-gray-500">Innov8 - 3rd Floor, Property No. 44, Regal Building, above Madame Tussauds, Connaught Place, New Delhi, Delhi 110001</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <span className="inline-block w-4 h-4 rounded-full border-2" style={{ backgroundColor: '#3B82F6', borderColor: '#3B82F6' }} title="Delhi Office" />
                <div>
                  <div className="font-semibold text-gray-800">Mumbai Office</div>
                  <div className="text-sm text-gray-500">F-220, First Floor, The Dreams Mall, Station Road, Bhandup (West, near Bhandup Railway Station, Mumbai, Maharashtra 400078</div>
                </div>
              </div>
              {/* <div className="flex items-center gap-3 p-4">
                <span className="inline-block w-4 h-4 rounded-full border-2" style={{ backgroundColor: '#22C55E', borderColor: '#22C55E' }} title="Bangalore Office" />
                <div>
                  <div className="font-semibold text-gray-800">Kolkata Office</div>
                  <div className="text-sm text-gray-500">654 Park Street, Kolkata, WB</div>
                </div>
              </div> */}
              {/* <div className="flex items-center gap-3 p-4">
                <span className="inline-block w-4 h-4 rounded-full border-2" style={{ backgroundColor: '#F59E42', borderColor: '#F59E42' }} title="Hyderabad Office" />
                <div>
                  <div className="font-semibold text-gray-800">Hyderabad Office</div>
                  <div className="text-sm text-gray-500">321 Banjara Hills, Hyderabad, TS</div>
                </div>
              </div> */}
              <div className="flex items-center gap-3 p-4">
                <span className="inline-block w-4 h-4 rounded-full border-2" style={{ backgroundColor: '#14B8A6', borderColor: '#14B8A6' }} title="Chennai Office" />
                <div>
                  <div className="font-semibold text-gray-800">Bangaluru Office</div>
                  <div className="text-sm text-gray-500">BHIVE Premium Whitefield Campus Jbr Tech Park, Plot No. 77, 6th Rd, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066</div>
                </div>
              </div>
              {/* <div className="flex items-center gap-3 p-4">
                <span className="inline-block w-4 h-4 rounded-full border-2" style={{ backgroundColor: '#A855F7', borderColor: '#A855F7' }} title="Kolkata Office" />
                <div>
                  <div className="font-semibold text-gray-800">Chennai Office</div>
                  <div className="text-sm text-gray-500">987 Anna Salai, Chennai, TN</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* FO Offices Grid */}
      <section className="w-full flex justify-center py-8 bg-white">
        <div className="max-w-4xl w-full px-4">
          <h3 className="text-xl font-bold mb-4 text-center">Field Offices (FO)</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 border border-gray-200 divide-x divide-y divide-gray-200 bg-white max-w-2xl mx-auto">
            {/* Row 1 */}
            <div className="flex items-center justify-center p-4 text-center">Lucknow</div>
            <div className="flex items-center justify-center p-4 text-center">Jaipur</div>
            <div className="flex items-center justify-center p-4 text-center">Chandigarh</div>
            <div className="flex items-center justify-center p-4 text-center">Ludhiana</div>
            <div className="flex items-center justify-center p-4 text-center">Patna</div>
            <div className="flex items-center justify-center p-4 text-center">Cuttack</div>
            {/* Row 2 */}
            <div className="flex items-center justify-center p-4 text-center">Guwahati</div>
            <div className="flex items-center justify-center p-4 text-center">Ahmedabad</div>
            <div className="flex items-center justify-center p-4 text-center">Pune</div>
            <div className="flex items-center justify-center p-4 text-center">Nagpur</div>
            <div className="flex items-center justify-center p-4 text-center">Cochin</div>
            <div className="flex items-center justify-center p-4 text-center">Trivandrum</div>
          </div>
        </div>
      </section>

      {/* Local Offices Grid */}
      <section className="w-full flex justify-center py-8 bg-white">
        <div className="max-w-4xl w-full px-4">
          <h3 className="text-xl font-bold mb-4 text-center">Local Offices</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 border border-gray-200 divide-x divide-y divide-gray-200 bg-white max-w-2xl mx-auto">
            {/* Row 1 */}
            <div className="flex items-center justify-center p-4 text-center">Kanpur</div>
            <div className="flex items-center justify-center p-4 text-center">Allahabad</div>
            <div className="flex items-center justify-center p-4 text-center">Varanasi</div>
            <div className="flex items-center justify-center p-4 text-center">Prayagraj</div>
            <div className="flex items-center justify-center p-4 text-center">Ranchi</div>
            <div className="flex items-center justify-center p-4 text-center">Bubaneswar</div>
            {/* Row 2 */}
            <div className="flex items-center justify-center p-4 text-center">Kolhapur</div>
            <div className="flex items-center justify-center p-4 text-center">Indore</div>
            <div className="flex items-center justify-center p-4 text-center">Coimbatore</div>
            <div className="flex items-center justify-center p-4 text-center">Madurai</div>
            <div className="flex items-center justify-center p-4 text-center">Vizag</div>
            <div className="flex items-center justify-center p-4 text-center">Vijaywada</div>
          </div>
        </div>
      </section>
      <BackToTopButton />
      <Footer />
      <Toaster />
    </>
  );
}
