'use client';

import React, { useState } from 'react';
import { Modal } from '../modals';
//import { Alert } from '../alerts';

const CardLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSubmited = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rounded-lg shadow-md p-6 bg-white w-96">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      {/* <Alert message={'Username dan password salah'}/> */}

      <form onSubmit={handleSubmited}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Login
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
        <p>Modal Content</p>
      </Modal>
    </div>
  );
};

export default CardLogin;
