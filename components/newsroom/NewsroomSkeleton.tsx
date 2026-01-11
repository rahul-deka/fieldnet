import React from "react";

const NewsroomSkeleton: React.FC = () => (
  <div className="animate-pulse">
    {/* Featured Story Skeleton */}
    <div
      className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm overflow-hidden mb-8 sm:mb-10 transition-all duration-300"
      style={{ minHeight: '100%' }}
    >
      <div className="relative h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200" />
      <div className="space-y-3 sm:space-y-4 relative w-full">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-between">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="h-6 w-20 bg-gray-200 rounded-full" />
          </div>
          <div className="h-6 w-14 bg-gray-300 rounded-full ml-auto" />
        </div>
        <div className="h-8 w-3/4 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-1/3 bg-gray-200 rounded mb-2" />
        <div className="flex items-center justify-between mt-2 sm:mt-4 gap-2">
          <div className="h-5 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-24 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
    {/* News Grid Skeleton */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm flex flex-col p-4 sm:p-8"
          style={{ minHeight: '100%' }}
        >
          <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-200 rounded mb-4" />
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 h-6 w-20 bg-gray-200" />
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
          <div className="flex items-center justify-between pt-2 mt-auto">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-5 w-20 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NewsroomSkeleton;
