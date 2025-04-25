// src/renderer/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl">Dashboard Header</h1>
    <div className="flex items-center">
      <Link to="/login" className="text-white hover:underline mx-2">
        Login
      </Link>
      <Link to="/signup" className="text-white hover:underline mx-2">
        Signup
      </Link>
      <button onClick={toggleSidebar} className="md:hidden text-white">
        &#9776;
      </button>
    </div>
  </header>
);

export default Header;
