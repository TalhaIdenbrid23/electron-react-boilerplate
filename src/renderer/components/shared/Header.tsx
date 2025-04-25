// src/renderer/components/Header.tsx
import React from 'react';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl">Dashboard Header</h1>
    <button onClick={toggleSidebar} className="md:hidden text-white">
      &#9776;
    </button>
  </header>
);

export default Header;
