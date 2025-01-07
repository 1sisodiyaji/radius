import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
     
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
 
      <div className="w-full h-24 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
 
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse w-3/4"></div>
      </div>
    </div>
  );
};

export default Skeleton;
