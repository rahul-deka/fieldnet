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
        <a
          key={item.id}
          href={item.link}
          className="group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300 fade-in-up flex flex-col"
          style={{ animationDelay: `${idx * 50}ms` }}
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
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${categoryColors[item.category] || "bg-gray-100 text-gray-800"}`}
            >
              {item.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold leading-tight text-balance group-hover:text-blue-600 transition-colors">
              {item.headline}
            </h3>
            {item.description && (
              <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-2">{item.description}</p>
            )}
            <div className="flex items-center justify-between pt-2 mt-auto">
              <span className="text-xs text-gray-400">{item.date}</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NewsGrid;
