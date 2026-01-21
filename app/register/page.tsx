export const metadata = {
  title: "Register | FieldNet Global Research",
  description: "Join FieldNet's research panel. Register to participate in paid studies and surveys worldwide.",
};
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
import BackToTopButton from "@/components/back-to-top";

export default function RegisterPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [consent, setConsent] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [ageVal, setAgeVal] = useState('');
  const [stateVal, setStateVal] = useState('');
  const [cityVal, setCityVal] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [educationVal, setEducationVal] = useState('');
  const [occupationVal, setOccupationVal] = useState('');
  const [languagesVal, setLanguagesVal] = useState<string[]>([]);
  const [otherLanguage, setOtherLanguage] = useState('');

  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [payoutMethod, setPayoutMethod] = useState<string>("");
  const [otherPayout, setOtherPayout] = useState("");
  const [contactPrefs, setContactPrefs] = useState<string[]>([]);
  const [priorResearch, setPriorResearch] = useState('');
  const [hearAbout, setHearAbout] = useState('');
  const [hearAboutOther, setHearAboutOther] = useState('');
  const [storeContactConsent, setStoreContactConsent] = useState('');

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

    try {
      const payload = {
        consent,
        fullName,
        email,
        phone,
        gender,
        age: ageVal,
        region: stateVal,
        city: cityVal,
        postalCode,
        education: educationVal,
        occupation: occupationVal,
        languages: languagesVal.includes('Other') && otherLanguage
          ? [...languagesVal.filter(l => l !== 'Other'), otherLanguage].join(', ')
          : languagesVal.join(', '),
        availability: selectedAvailability.join(', '),
        workTypes: selectedWorkTypes.join(', '),
        sectors: selectedSectors.join(', '),
        paymentMethod: payoutMethod === 'Other' && otherPayout ? `Other: ${otherPayout}` : payoutMethod,
        paypalEmail: (document.getElementById('paypalEmail') as HTMLInputElement)?.value || '',
        upiId: (document.getElementById('upiId') as HTMLInputElement)?.value || '',
        contactPreferences: contactPrefs.join(', '),
        priorResearch: priorResearch,
        hearAbout: hearAbout === 'Other' && hearAboutOther ? `Other: ${hearAboutOther}` : hearAbout,
        storeContactConsent,
      };

      const res = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submission failed');

      toast({ title: 'Thank you!', description: 'Your registration has been submitted.' });
      // Reset form
      setConsent('');
      setFullName(''); setEmail(''); setPhone(''); setGender(''); setAgeVal(''); setStateVal(''); setCityVal(''); setPostalCode(''); setEducationVal(''); setOccupationVal(''); setLanguagesVal([]); setOtherLanguage('');
      setSelectedAvailability([]); setSelectedWorkTypes([]); setSelectedSectors([]); setPayoutMethod(''); setOtherPayout(""); setContactPrefs([]); setPriorResearch(''); setHearAbout(''); setHearAboutOther(''); setStoreContactConsent('');
    } catch (err: any) {
      console.error('Registration submit error', err);
      toast({ title: 'Submission failed', description: err?.message || 'Please try again later.' });
    } finally {
      setIsLoading(false);
    }
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
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Consent</h3>
                  <div className="space-y-2">
                    <Label className="block mb-2">Do you agree to be contacted for research surveys, interviews, or product feedback studies? <span className="text-red-500">*</span></Label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="consent"
                          value="yes"
                          checked={consent === 'yes'}
                          onChange={() => setConsent('yes')}
                          required
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="consent"
                          value="no"
                          checked={consent === 'no'}
                          onChange={() => setConsent('no')}
                          required
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

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
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select value={gender} onValueChange={setGender} required>
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
                      <Label htmlFor="ageGroup">Age Group *</Label>
                      <Select value={ageVal} onValueChange={setAgeVal} required>
                        <SelectTrigger id="ageGroup" className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                          <SelectValue placeholder="Select age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18–24">18–24</SelectItem>
                          <SelectItem value="25–34">25–34</SelectItem>
                          <SelectItem value="35–44">35–44</SelectItem>
                          <SelectItem value="45–54">45–54</SelectItem>
                          <SelectItem value="55+">55+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-cyan-600" />
                        Location
                      </h3>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="state">State/UT *</Label>
                          <Select value={stateVal} onValueChange={setStateVal} required>
                            <SelectTrigger id="state" className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                              <SelectValue placeholder="Select State/UT" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                              <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                              <SelectItem value="Assam">Assam</SelectItem>
                              <SelectItem value="Bihar">Bihar</SelectItem>
                              <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                              <SelectItem value="Goa">Goa</SelectItem>
                              <SelectItem value="Gujarat">Gujarat</SelectItem>
                              <SelectItem value="Haryana">Haryana</SelectItem>
                              <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                              <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                              <SelectItem value="Karnataka">Karnataka</SelectItem>
                              <SelectItem value="Kerala">Kerala</SelectItem>
                              <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                              <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                              <SelectItem value="Manipur">Manipur</SelectItem>
                              <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                              <SelectItem value="Mizoram">Mizoram</SelectItem>
                              <SelectItem value="Nagaland">Nagaland</SelectItem>
                              <SelectItem value="Odisha">Odisha</SelectItem>
                              <SelectItem value="Punjab">Punjab</SelectItem>
                              <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                              <SelectItem value="Sikkim">Sikkim</SelectItem>
                              <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                              <SelectItem value="Telangana">Telangana</SelectItem>
                              <SelectItem value="Tripura">Tripura</SelectItem>
                              <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                              <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                              <SelectItem value="West Bengal">West Bengal</SelectItem>
                              <SelectItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</SelectItem>
                              <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                              <SelectItem value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
                              <SelectItem value="Delhi">Delhi</SelectItem>
                              <SelectItem value="Jammu and Kashmir">Jammu and Kashmir</SelectItem>
                              <SelectItem value="Ladakh">Ladakh</SelectItem>
                              <SelectItem value="Lakshadweep">Lakshadweep</SelectItem>
                              <SelectItem value="Puducherry">Puducherry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            type="text"
                            placeholder="City"
                            value={cityVal}
                            onChange={(e) => setCityVal(e.target.value)}
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
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-cyan-600" />
                        Professional Background
                      </h3>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="education">Highest Education Level *</Label>
                          <Select value={educationVal} onValueChange={setEducationVal} required>
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
                          <Label htmlFor="occupation">Occupation *</Label>
                          <Select value={occupationVal} onValueChange={setOccupationVal} required>
                            <SelectTrigger id="occupation" className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                              <SelectValue placeholder="Select occupation" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Student">Student</SelectItem>
                              <SelectItem value="Homemaker">Homemaker</SelectItem>
                              <SelectItem value="Working Professional">Working Professional</SelectItem>
                              <SelectItem value="Business Owner">Business Owner</SelectItem>
                              <SelectItem value="Retired">Retired</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2 mt-4">
                        <Label>Languages You Are Comfortable With *</Label>
                        <div className="flex flex-wrap gap-4">
                          {['Hindi', 'English', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Other'].map((lang) => (
                            <label key={lang} className="flex items-center gap-2">
                              <Checkbox
                                id={`lang-${lang}`}
                                checked={languagesVal.includes(lang)}
                                onCheckedChange={() => {
                                  if (languagesVal.includes(lang)) {
                                    setLanguagesVal(languagesVal.filter(l => l !== lang));
                                  } else {
                                    setLanguagesVal([...languagesVal, lang]);
                                  }
                                }}
                                required={languagesVal.length === 0}
                              />
                              {lang}
                            </label>
                          ))}
                        </div>
                        {languagesVal.includes('Other') && (
                          <div className="mt-2">
                            <Input
                              id="otherLanguage"
                              type="text"
                              placeholder="Please specify other language(s)"
                              value={otherLanguage}
                              onChange={e => setOtherLanguage(e.target.value)}
                              className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                              required
                            />
                          </div>
                        )}
                      </div>
                    </div>

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
                        Participation Preferences
                      </h3>

                      <div className="space-y-3">
                        <Label>What kind of research activities would you be comfortable participating in? *</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Online Surveys (via mobile or desktop)", "Phone Interviews (short calls for research)", "In-person Surveys (e.g. in malls, clinics, markets)", "Product Testing at Home (samples sent to you)", "Mystery Shopping (visit and review retail stores)", "Sampling/Promotions (try products, share views)", "Retail Audits (check product visibility in shops)", "Event Participation (at exhibitions, launches)", "UX / Diary Studies (track usage, daily input)"].map((option) => (
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

                      {/* Contact Preferences */}
                      <div className="space-y-3 mt-6">
                        <Label>How would you prefer to be contacted for research opportunities?</Label>
                        <div className="flex flex-wrap gap-4">
                          {['WhatsApp', 'Phone Call', 'Email', 'SMS'].map((method) => (
                            <label key={method} className="flex items-center gap-2">
                              <Checkbox
                                id={`contactpref-${method}`}
                                checked={contactPrefs.includes(method)}
                                onCheckedChange={() => {
                                  if (contactPrefs.includes(method)) {
                                    setContactPrefs(contactPrefs.filter(m => m !== method));
                                  } else {
                                    setContactPrefs([...contactPrefs, method]);
                                  }
                                }}
                              />
                              {method}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Prior Research Participation */}
                      <div className="space-y-3 mt-6">
                        <Label>Have you participated in any market research or paid survey before?</Label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="priorResearch"
                              value="yes"
                              checked={priorResearch === 'yes'}
                              onChange={() => setPriorResearch('yes')}
                              required
                            />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="priorResearch"
                              value="no"
                              checked={priorResearch === 'no'}
                              onChange={() => setPriorResearch('no')}
                              required
                            />
                            No
                          </label>
                        </div>
                      </div>

                      {/* How did you hear about FieldNet Panel? */}
                      <div className="space-y-3">
                        <Label>How did you hear about FieldNet Panel?</Label>
                        <div className="flex gap-2 items-center">
                          <div style={{ minWidth: 180 }}>
                            <Select value={hearAbout} onValueChange={value => { setHearAbout(value); if (value !== 'Other') setHearAboutOther(''); }} required>
                              <SelectTrigger className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="WhatsApp group">WhatsApp group</SelectItem>
                                <SelectItem value="Social media">Social media</SelectItem>
                                <SelectItem value="Friend/Referral">Friend/Referral</SelectItem>
                                <SelectItem value="FieldNet Representative">FieldNet Representative</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          {hearAbout === 'Other' && (
                            <Input
                              style={{ width: 180 }}
                              type="text"
                              placeholder="Please specify"
                              value={hearAboutOther}
                              onChange={e => setHearAboutOther(e.target.value)}
                              required
                            />
                          )}
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
                        <Label>Which topics or sectors are you most interested in? *</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Packaged Foods / FMCG", "Finance / Banking / Insurance", "Healthcare / Medicines", "Telecom / Mobile Services", "Automobiles / EVs", "Real Estate / Housing", "Retail / E-commerce", "Travel / Hospitality", "Education / Learning", "Tech / Apps / Software", "Government / Public Services", "Media / Entertainment", "Other"].map((option) => (
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
                          <Label htmlFor="payoutMethod">Preferred Method to Receive Rewards/Payouts *</Label>
                          <Select value={payoutMethod} onValueChange={value => { setPayoutMethod(value); if (value !== 'Other') setOtherPayout(''); }} required>
                            <SelectTrigger className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500">
                              <SelectValue placeholder="Select payout method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="paypal">PayPal</SelectItem>
                              <SelectItem value="upi">UPI (India)</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
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

                          {payoutMethod === 'Other' && (
                            <div className="space-y-2">
                              <Label htmlFor="upiId">Please Specify *</Label>
                              <Input
                                type="text"
                                placeholder="Netbanking, etc"
                                value={otherPayout}
                                className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500"
                                onChange={e => setOtherPayout(e.target.value)}
                                required
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Store Contact Consent */}
                    <div className="mb-6">
                      <label className="block font-semibold mb-2">
                        Do you give permission to store your contact information securely for future research opportunities?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="storeContactConsent"
                            value="Yes"
                            checked={storeContactConsent === "Yes"}
                            onChange={() => setStoreContactConsent("Yes")}
                            className="mr-2"
                            required
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="storeContactConsent"
                            value="No"
                            checked={storeContactConsent === "No"}
                            onChange={() => setStoreContactConsent("No")}
                            className="mr-2"
                            required
                          />
                          No
                        </label>
                      </div>
                    </div>

                  </CardContent>
                  <CardFooter className="flex flex-col gap-4 pt-6">
                    <Button
                      type="submit"
                      className="w-full bg-cyan-600 hover:bg-cyan-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Registering..." : "Register Now"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
        </div>
      </main>
      <BackToTopButton />
      <Footer />
      <Toaster />
    </>
  );
}