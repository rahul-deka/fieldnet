"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const COOKIE_KEY = "cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent is already given
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem(COOKIE_KEY);
      if (!consent) setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };


  const rejectCookies = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className="relative pointer-events-auto bg-white text-card-foreground border-2 border-black shadow-xl rounded-xl m-4 px-6 py-4 flex flex-col md:flex-row items-center gap-4 max-w-2xl w-full">
        <span className="flex-1 text-sm md:text-base">
          We use cookies to improve your experience. By using our site, you agree to our cookie policy.
        </span>
        <div className="flex gap-2">
          <button
            onClick={acceptCookies}
              className="px-4 py-2 rounded-lg bg-black text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Accept
          </button>
          <button
            onClick={rejectCookies}
              className="px-4 py-2 rounded-lg bg-muted text-muted-foreground font-semibold shadow hover:bg-muted/80 border border-black transition-colors cursor-pointer"
          >
            Reject
          </button>
        </div>
        <button
          onClick={() => setVisible(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors cursor-pointer"
          aria-label="Close cookie consent"
        >
        </button>
      </div>
    </div>
  );
}
