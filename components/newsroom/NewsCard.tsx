import React from "react";

interface NewsCardProps {
  id: string;
  category: string;
  headline: string;
  description?: string;
  date: string;
  image?: string;
  logo?: string;
  link: string;
}

const categoryColors: Record<string, string> = {
  "Press Releases": "bg-green-100 text-green-700",
  "Media Coverage": "bg-blue-100 text-blue-700",
  "Awards": "bg-yellow-100 text-yellow-700",
  "Announcements": "bg-purple-100 text-purple-700",
  "All": "bg-gray-100 text-gray-700",
};

const NewsCard: React.FC<NewsCardProps> = ({ category, headline, description, date, image, logo, link }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden animate-fade-in flex flex-col h-full">
    {(image || logo) && (
      <img
        src={image || logo}
        alt={headline}
        className="w-full h-56 object-cover"
      />
    )}
    <div className="flex-1 flex flex-col p-6">
      <span className={`inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold ${categoryColors[category] || categoryColors["All"]}`}>
        {category}
      </span>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{headline}</h3>
      {description && <p className="text-gray-600 mb-4 text-base">{description}</p>}
      <div className="flex items-end justify-between mt-auto">
        <span className="text-sm text-gray-500">{date}</span>
        <a href={link} className="flex items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors font-medium group" aria-label="Read more">
          <span className="text-sm group-hover:underline">Learn more</span>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default NewsCard;
