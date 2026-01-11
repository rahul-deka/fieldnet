import React from "react";


const tabs = [
  "All",
  "Press Releases",
  "Media Coverage",
  "Awards",
  "Announcements",
];

const tabColors: Record<string, string> = {
  "All": "bg-black text-white border-black",
  "Press Releases": "bg-blue-100 text-blue-800 border-blue-200",
  "Media Coverage": "bg-purple-100 text-purple-800 border-purple-200",
  "Awards": "bg-amber-100 text-amber-800 border-amber-200",
  "Announcements": "bg-emerald-100 text-emerald-800 border-emerald-200",
};

interface NewsroomTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NewsroomTabs: React.FC<NewsroomTabsProps> = ({ activeTab, onTabChange }) => (
  <div className="flex flex-wrap gap-2 md:gap-3 my-6 justify-center">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`px-4 py-1.5 rounded-full font-semibold text-sm border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap ${
          activeTab === tab
            ? tabColors[tab] + " shadow"
            : tabColors[tab]?.replace(/bg-\S+/, "bg-gray-100")?.replace(/text-\S+/, "text-gray-700")?.replace(/border-\S+/, "border-gray-200") + " hover:bg-gray-200"
        }`}
        onClick={() => onTabChange(tab)}
        aria-pressed={activeTab === tab}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default NewsroomTabs;
