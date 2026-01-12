"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import EmptyState from "./EmptyState";

interface NewsGridProps {
  news: Array<{
    id: string;
    category: string;
    headline: string;
    description?: string;
    date: string;
    image?: string;
    logo?: string;
    link: string;
  }>;
}

const categoryColors: Record<string, string> = {
  "Press Releases": "bg-blue-100 text-blue-800",
  "Media Coverage": "bg-purple-100 text-purple-800",
  "Awards": "bg-amber-100 text-amber-800",
  "Announcements": "bg-emerald-100 text-emerald-800",
};

const NewsGrid: React.FC<NewsGridProps> = ({ news }) => {
  if (!news.length) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {news.map((item, idx) => (
        <div
          key={item.id}
          className="group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 fade-in-up flex flex-col"
          style={{
            animationDelay: `${idx * 50}ms`,
            ...(item.category === 'Press Releases' && {}),
            ...(item.category === 'Media Coverage' && {}),
            ...(item.category === 'Awards' && {}),
            ...(item.category === 'Announcements' && {}),
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            if (item.category === 'Press Releases') el.style.borderColor = '#38bdf8';
            else if (item.category === 'Media Coverage') el.style.borderColor = '#a78bfa';
            else if (item.category === 'Awards') el.style.borderColor = '#fbbf24';
            else if (item.category === 'Announcements') el.style.borderColor = '#34d399';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '';
          }}
        >
          <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
            <Image
              src={item.image || item.logo || "/placeholder.svg"}
              alt={item.headline}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 sm:p-8 space-y-2 sm:space-y-3 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="object-contain rounded bg-white p-0.5"
                />
              )}
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category] || "bg-gray-100 text-gray-800"}`}
              >
                {item.category}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold leading-tight text-balance transition-colors">
              {item.headline}
            </h3>
            {item.description && (
              <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-2">{item.description}</p>
            )}
            <div className="flex items-center justify-between pt-2 mt-auto">
              <span className="text-xs text-gray-400">{item.date}</span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-black no-underline group/readmore"
                tabIndex={0}
              >
                Read More
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all group-hover/readmore:text-black hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
