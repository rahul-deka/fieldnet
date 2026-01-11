import React from "react";

const ResourcesSectionSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-pulse">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden flex flex-col h-full bg-white rounded-lg border pt-0 pb-0"
      >
        {/* Icon Header */}
        <div className="p-6 border-b border-slate-100 bg-white">
          <div className="flex items-start gap-3 mb-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 flex-shrink-0" />
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-slate-50/50 to-slate-50/30">
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
          <div className="flex items-center gap-2 mt-auto">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ResourcesSectionSkeleton;
