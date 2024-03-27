import React from "react";

const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="animate-pulse bg-gray-200 h-64 w-full"></div>

      <div className="p-4">
        <div className="animate-pulse bg-gray-200 h-6 w-3/4 mb-2"></div>
        <div className="animate-pulse bg-gray-200 h-4 w-1/2"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
