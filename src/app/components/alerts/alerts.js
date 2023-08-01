'use client';

import React, { useState } from 'react';

const Alert = ({ type, message }) => {
  const [isHidden, setIsHidden] = useState(false);
  const alertColorClass =
    type === 'success'
      ? 'bg-green-500 text-white'
      : type === 'warning'
      ? 'bg-yellow-500 text-white'
      : type === 'error'
      ? 'bg-red-500 text-white'
      : 'bg-blue-500 text-white';

    const hidden = 
    isHidden ? 'hidden' : 'flex';

  return (
    <div className={`${hidden} items-center justify-between px-4 py-3 my-3 ${alertColorClass} rounded-md`}>
      <p className="text-sm">{message}</p>
      <button className="text-white font-bold" onClick={() => setIsHidden(true)}>
        X
      </button>
    </div>
  );
};

export default Alert;
