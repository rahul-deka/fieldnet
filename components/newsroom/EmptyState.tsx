import React from "react";

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-4 text-gray-300"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" /><path d="M16 24h16M16 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    <h4 className="text-lg font-semibold mb-2">No news found</h4>
    <p className="text-gray-500">Try a different filter or check back later.</p>
  </div>
);

export default EmptyState;
