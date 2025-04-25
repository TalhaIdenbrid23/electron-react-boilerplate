// src/renderer/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }: { isOpen: boolean }) => (
  <nav
    className={`bg-gray-800 text-white w-64 h-full p-4 fixed top-0 left-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
  >
    <ul>
      <li className="mb-2">
        <Link to="/" className="text-white hover:underline">
          Home
        </Link>
      </li>
      <li className="mb-2">
        <Link to="/aboutUs" className="text-white hover:underline">
          aboutUs
        </Link>
      </li>
      <li className="mb-2">
        <Link to="/contactUs" className="text-white hover:underline">
          contactUs
        </Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
