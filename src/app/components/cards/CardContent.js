'use client'

/* eslint-disable @next/next/no-img-element */

import React from 'react';

const CardContent = () => {
  return (
    <div className="bg-white rounded-lg float-left ml-3 mb-3 shadow-md p-6 w-64">
      <img
        src="https://via.placeholder.com/150"
        alt="Card Image"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">Card Title</h2>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a
        href="#"
        className="text-blue-500 inline-flex items-center font-semibold transition-all hover:text-blue-700"
      >
        Read More
      </a>
    </div>
  );
};

export default CardContent;
