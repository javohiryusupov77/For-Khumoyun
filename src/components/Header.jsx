import React from "react";

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-md">
    <img className="w-16 h-auto" src="/logo.svg" alt="logo" />
    <a href="#about">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors"
        aria-label="Become a student"
      >
        Talaba bo'lish
      </button>
    </a>
  </header>
);

export default Header;
