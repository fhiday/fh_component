'use client';

import React from 'react';

const LoadingCard = ({ type }) => {
 return type === 'login'
  ? (
    <div className="bg-white rounded-lg shadow-md p-6 w-96 animate-pulse">
      <div className="h-5 w-1/3 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-3 w-1/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-10 w-full bg-gray-300 rounded-md mb-2"></div>
      <div className="h-3 w-1/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-10 w-full bg-gray-300 rounded-md mb-4"></div>
      <div className="h-10 w-full bg-gray-500 rounded-md"></div>
    </div>
  ) : (
    <div className="bg-white rounded-lg shadow-md p-6 w-96 animate-pulse">
      <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 w-2/3 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default LoadingCard;
