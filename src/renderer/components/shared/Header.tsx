// src/renderer/components/shared/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="bg-white text-black p-4 flex flex-wrap justify-between items-center shadow-md">
      <h1 className="text-2xl">Dashboard Header</h1>
      <div className="flex items-center">
        <Link to="/login" className="text-black hover:underline mx-2">
          Login
        </Link>
        <Link to="/signup" className="text-black hover:underline mx-2">
          Signup
        </Link>
        <button onClick={toggleSidebar} className="md:hidden text-black">
          &#9776;
        </button>
      </div>
    </header>
  );
}

export default Header;
