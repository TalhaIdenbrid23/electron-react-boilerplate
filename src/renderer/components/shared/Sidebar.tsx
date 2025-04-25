// src/renderer/components/shared/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const location = useLocation(); // Get the current location

  return (
    <nav
      className={`bg-white text-black w-64 h-full p-4 fixed top-0 left-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={toggleSidebar} className="text-black md:hidden">
          &times; {/* Cross icon for closing */}
        </button>
      </div>
      <ul>
        <li className="mb-2">
          <Link
            to="/"
            className={`block p-2 rounded ${location.pathname === '/' ? 'bg-gray-200' : ''} hover:bg-gray-300`}
            onClick={toggleSidebar}
          >
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/aboutUs"
            className={`block p-2 rounded ${location.pathname === '/aboutUs' ? 'bg-gray-200' : ''} hover:bg-gray-300`}
            onClick={toggleSidebar}
          >
            About Us
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/contactUs"
            className={`block p-2 rounded ${location.pathname === '/contactUs' ? 'bg-gray-200' : ''} hover:bg-gray-300`}
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
