import React from "react";

interface PaginationProps {
  onLoadMore: () => void;
  hasMore: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ onLoadMore, hasMore }) => (
  hasMore ? (
    <div className="flex justify-center my-10">
      <button
        onClick={onLoadMore}
        className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      >
        Load more
      </button>
    </div>
  ) : null
);

export default Pagination;
