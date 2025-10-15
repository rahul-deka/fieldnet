export function AnnouncementBannerSkeleton() {
  return (
    <div className="bg-cyan-600 text-white py-2 px-4 relative">
      <div className="mx-auto max-w-7xl flex items-center justify-center gap-2 text-sm">
        <div className="h-5 w-96 bg-cyan-500/50 animate-pulse rounded"></div>
      </div>
    </div>
  );
}
