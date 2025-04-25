// src/renderer/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <nav
      className={`bg-gray-800 text-white w-64 h-full p-4 fixed top-0 left-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={toggleSidebar} className="text-white md:hidden">
          &times; {/* Cross icon for closing */}
        </button>
      </div>
      <ul>
        <li className="mb-2">
          <Link
            to="/"
            className="text-white hover:underline"
            onClick={toggleSidebar}
          >
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/aboutUs"
            className="text-white hover:underline"
            onClick={toggleSidebar}
          >
            About Us
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/contactUs"
            className="text-white hover:underline"
            onClick={toggleSidebar}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
