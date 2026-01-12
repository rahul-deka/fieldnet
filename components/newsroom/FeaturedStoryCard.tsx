"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FeaturedStoryCardProps {
  story: {
    category: string;
    headline: string;
    summary?: string;
    description?: string;
    date: string;
    image: string;
    logo?: string;
    link: string;
  };
}

const categoryColors: Record<string, string> = {
  "Press Releases": "bg-blue-100 text-blue-800",
  "Media Coverage": "bg-purple-100 text-purple-800",
  "Awards": "bg-amber-100 text-amber-800",
  "Announcements": "bg-emerald-100 text-emerald-800",
};


const FeaturedStoryCard: React.FC<FeaturedStoryCardProps> = ({ story }) => (
  <div
    className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm overflow-hidden mb-8 sm:mb-10 transition-all duration-300 hover:shadow-lg hover:border"
    style={{
      ...(story.category === 'Press Releases' && { borderColor: '#38bdf8' }), // blue-400
      ...(story.category === 'Media Coverage' && { borderColor: '#a78bfa' }), // purple-400
      ...(story.category === 'Awards' && { borderColor: '#fbbf24' }), // amber-400
      ...(story.category === 'Announcements' && { borderColor: '#34d399' }), // emerald-400
    }}
    onMouseEnter={e => {
      const el = e.currentTarget;
      if (story.category === 'Press Releases') el.style.borderColor = '#38bdf8';
      else if (story.category === 'Media Coverage') el.style.borderColor = '#a78bfa';
      else if (story.category === 'Awards') el.style.borderColor = '#fbbf24';
      else if (story.category === 'Announcements') el.style.borderColor = '#34d399';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = '';
    }}
  >
    <div className="relative h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
      <Image
        src={story.image || "/placeholder.svg"}
        alt={story.headline}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="space-y-3 sm:space-y-4 relative">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-between">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {story.logo && (
            <Image
              src={story.logo}
              alt="Logo"
              width={100}
              height={100}
              className="object-contain rounded bg-white p-0.5 mr-1"
            />
          )}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[story.category] || "bg-gray-100 text-gray-800"}`}
          >
            {story.category}
          </span>
        </div>
        <span className="hidden sm:inline bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow ml-auto">Latest</span>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-balance">{story.headline}</h2>
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{story.summary || story.description}</p>
      <div className="flex items-center justify-between mt-2 sm:mt-4 gap-2">
        <span className="text-sm text-gray-400">{story.date}</span>
        <a
          href={story.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs gap-2 text-gray-400 font-semibold hover:text-black transition-all duration-200 group"
        >
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
);

export default FeaturedStoryCard;
