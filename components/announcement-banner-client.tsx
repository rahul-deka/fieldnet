"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface AnnouncementData {
  title: string;
  link: string;
  status: string;
}

interface AnnouncementBannerClientProps {
  announcement: AnnouncementData;
}

export function AnnouncementBannerClient({ announcement }: AnnouncementBannerClientProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-cyan-600 text-white py-2.5 px-4 relative">
      <div className="mx-auto max-w-7xl flex items-center justify-center pr-8 text-sm">
        <p className="text-center flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="flex items-center gap-1">
            <strong>{announcement.title}</strong>
          </span>
          {announcement.link && (
            <Link 
              href={announcement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-100 font-semibold whitespace-nowrap"
            >
              Learn More →
            </Link>
          )}
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 p-1 hover:bg-cyan-700 rounded-full transition-colors flex-shrink-0"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
