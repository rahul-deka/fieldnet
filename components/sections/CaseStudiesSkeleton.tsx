import React from "react";

const CaseStudiesSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-pulse">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden flex flex-col h-full bg-white rounded-lg border"
      >
        <div className="p-6 pt-0 border-b border-slate-100 bg-white min-h-[220px] flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100" />
            <div className="h-6 w-20 bg-cyan-50 rounded border border-cyan-200" />
          </div>
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-1" />
          <div className="h-4 w-1/3 bg-gray-200 rounded mb-1" />
        </div>
        <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-slate-50/50 to-slate-50/30">
          <div className="h-4 w-full bg-gray-200 rounded mb-4" />
          <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-slate-100">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="text-center">
                <div className="h-6 w-10 bg-cyan-100 rounded mx-auto mb-1" />
                <div className="h-3 w-12 bg-gray-200 rounded mx-auto" />
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-auto">
            <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="h-4 w-4 bg-green-100 rounded-full mt-0.5 shrink-0" />
                <div className="h-3 w-32 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CaseStudiesSkeleton;
