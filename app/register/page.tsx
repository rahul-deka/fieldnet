"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, User, Phone, Globe, MapPin, Calendar, Briefcase, GraduationCap, Languages, Wallet } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

export default function RegisterPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  // Removed OTP flow: keep form simple
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [payoutMethod, setPayoutMethod] = useState<string>("");

  const toggleSelection = (value: string, list: string[], setter: (list: string[]) => void) => {
    if (list.includes(value)) {
      setter(list.filter(item => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Registration functionality coming soon!",
        description: "This feature is currently under development.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-md lg:max-w-4xl px-4">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-cyan-600 hover:no-underline"
            >
              ← Back to Home
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome to FieldNet Global Research</h1>
            <p className="text-slate-600">Join as a Respondent & Earn Rewards — Worldwide</p>
          </div>

          <Card>
            <form onSubmit={handleRegister}>
              <CardContent className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <User className="h-5 w-5 text-cyan-600" />
                        Personal Information
                      </h3>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@example.com"
                              className="pl-10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (WhatsApp Preferred) *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="pl-10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender *</Label>
                          <Select required>
                            <SelectTrigger className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="non-binary">Non-binary</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="age">Age *</Label>
                          <Input
                            id="age"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={3}
                            placeholder="25"
                            className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Location Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-cyan-600" />
                        Location
                      </h3>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2 lg:col-span-2">
                          <Label htmlFor="country">Country *</Label>
                          <Select required>
                            <SelectTrigger className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              {/* APAC region + UAE + Pakistan + some common western countries */}
                              <SelectItem value="india">India</SelectItem>
                              <SelectItem value="pakistan">Pakistan</SelectItem>
                              <SelectItem value="bangladesh">Bangladesh</SelectItem>
                              <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                              <SelectItem value="maldives">Maldives</SelectItem>
                              <SelectItem value="nepal">Nepal</SelectItem>
                              <SelectItem value="bhutan">Bhutan</SelectItem>

                              <SelectItem value="china">China</SelectItem>
                              <SelectItem value="taiwan">Taiwan</SelectItem>
                              <SelectItem value="hong-kong">Hong Kong</SelectItem>
                              <SelectItem value="macau">Macau</SelectItem>

                              <SelectItem value="japan">Japan</SelectItem>
                              <SelectItem value="south-korea">South Korea</SelectItem>

                              <SelectItem value="indonesia">Indonesia</SelectItem>
                              <SelectItem value="malaysia">Malaysia</SelectItem>
                              <SelectItem value="singapore">Singapore</SelectItem>
                              <SelectItem value="thailand">Thailand</SelectItem>
                              <SelectItem value="philippines">Philippines</SelectItem>
                              <SelectItem value="vietnam">Vietnam</SelectItem>
                              <SelectItem value="cambodia">Cambodia</SelectItem>
                              <SelectItem value="laos">Laos</SelectItem>

                              <SelectItem value="myanmar">Myanmar</SelectItem>
                              <SelectItem value="brunei">Brunei</SelectItem>

                              <SelectItem value="australia">Australia</SelectItem>
                              <SelectItem value="new-zealand">New Zealand</SelectItem>

                              <SelectItem value="united-arab-emirates">United Arab Emirates</SelectItem>
                              <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>

                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="state">Region/State *</Label>
                          <Input
                            id="state"
                            type="text"
                            placeholder="State/Region"
                            className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            type="text"
                            placeholder="City"
                            className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Postal Code *</Label>
                          <Input
                            id="postalCode"
                            type="text"
                            placeholder="123456"
                            className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone *</Label>
                          <Select required>
                            <SelectTrigger className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                              <SelectItem value="est">EST (UTC-5)</SelectItem>
                              <SelectItem value="pst">PST (UTC-8)</SelectItem>
                              <SelectItem value="gmt">GMT (UTC+0)</SelectItem>
                              <SelectItem value="cet">CET (UTC+1)</SelectItem>
                              <SelectItem value="aest">AEST (UTC+10)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Preferred Currency removed */}
                      </div>
                    </div>

                    {/* Professional Background */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-cyan-600" />
                        Professional Background
                      </h3>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="education">Education *</Label>
                          <Select required>
                            <SelectTrigger className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                              <SelectValue placeholder="Select education level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high-school">High School</SelectItem>
                              <SelectItem value="diploma">Diploma</SelectItem>
                              <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                              <SelectItem value="masters">Master's Degree</SelectItem>
                              <SelectItem value="phd">PhD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience (Years) *</Label>
                          <Input
                            id="experience"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={2}
                            placeholder="0"
                            className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="languages">Languages (Comma-separated) *</Label>
                          <div className="relative">
                            <Languages className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                            <Input
                              id="languages"
                              type="text"
                              placeholder="English, Hindi, Spanish"
                              className="pl-10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-cyan-600" />
                        Availability
                      </h3>

                      <div className="space-y-3">
                        <Label>Select your availability *</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Weekdays', 'Weekends', 'Evenings', 'Full-time', 'Part-time', 'Remote only', 'On-site OK'].map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox
                                id={`availability-${option}`}
                                checked={selectedAvailability.includes(option)}
                                onCheckedChange={() => toggleSelection(option, selectedAvailability, setSelectedAvailability)}
                              />
                              <label
                                htmlFor={`availability-${option}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preferred Work Types */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-cyan-600" />
                        Preferred Work Types
                      </h3>

                      <div className="space-y-3">
                        <Label>Select work types you're interested in *</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Online Surveys', 'CATI', 'CAPI/Intercepts', 'In-home Tests', 'Mystery Shop', 'Sampling/Promotions', 'Retail Audit', 'Events/BTL', 'Diary/UX Tests'].map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox
                                id={`worktype-${option}`}
                                checked={selectedWorkTypes.includes(option)}
                                onCheckedChange={() => toggleSelection(option, selectedWorkTypes, setSelectedWorkTypes)}
                              />
                              <label
                                htmlFor={`worktype-${option}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sectors */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-cyan-600" />
                        Sectors You Can Work In
                      </h3>

                      <div className="space-y-3">
                        <Label>Select sectors *</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {['FMCG', 'BFSI', 'Healthcare/Pharma', 'Telecom', 'Automobile', 'Real Estate', 'Energy/Solar/EV', 'Hospitality/Travel', 'Retail/E-commerce', 'Technology/Software', 'Education', 'Public Sector', 'Media/Entertainment'].map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox
                                id={`sector-${option}`}
                                checked={selectedSectors.includes(option)}
                                onCheckedChange={() => toggleSelection(option, selectedSectors, setSelectedSectors)}
                              />
                              <label
                                htmlFor={`sector-${option}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <Wallet className="h-5 w-5 text-cyan-600" />
                        Payment Information
                      </h3>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="payoutMethod">Payout Method *</Label>
                          <Select value={payoutMethod} onValueChange={setPayoutMethod} required>
                            <SelectTrigger className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                              <SelectValue placeholder="Select payout method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="paypal">PayPal</SelectItem>
                              <SelectItem value="upi">UPI (India)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          {payoutMethod === 'paypal' && (
                            <div className="space-y-2">
                              <Label htmlFor="paypalEmail">PayPal Email *</Label>
                              <Input
                                id="paypalEmail"
                                name="paypalEmail"
                                type="email"
                                placeholder="your@paypal.com"
                                className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                                required
                              />
                            </div>
                          )}

                          {payoutMethod === 'upi' && (
                            <div className="space-y-2">
                              <Label htmlFor="upiId">UPI ID *</Label>
                              <Input
                                id="upiId"
                                name="upiId"
                                type="text"
                                placeholder="your@upi"
                                className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                                required
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                  </CardContent>
                  <CardFooter className="flex flex-col gap-4 pt-6">
                    <Button
                      type="submit"
                      className="w-full bg-cyan-600 hover:bg-cyan-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Register Now"}
                    </Button>
                    {/* <p className="text-sm text-slate-600 text-center">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          const loginTab = document.querySelector('[value="login"]') as HTMLButtonElement;
                          loginTab?.click();
                        }}
                        className="text-cyan-600 hover:text-cyan-700 hover:underline font-semibold"
                      >
                        Sign in
                      </button>
                    </p> */}
                  </CardFooter>
                </form>
              </Card>
        </div>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
