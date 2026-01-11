import React from "react";

const BlogSectionSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-pulse">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden flex flex-col h-full bg-white rounded-lg border pt-0 pb-0"
      >
        {/* Image Section */}
        <div className="relative w-full h-48 bg-gradient-to-br from-cyan-100 via-cyan-50 to-blue-100 overflow-hidden mb-0" />
        <div className="p-6 flex flex-col flex-grow">
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
          </div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
        </div>
      </div>
    ))}
  </div>
);

export default BlogSectionSkeleton;
