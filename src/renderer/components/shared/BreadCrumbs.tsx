// src/renderer/components/Breadcrumbs.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => (
  <nav className="bg-gray-200 p-2 rounded mb-4">
    <Link to="/" className="text-blue-600 hover:underline">Home</Link> &gt;
    <Link to="/login" className="text-blue-600 hover:underline"> Login</Link>
  </nav>
);

export default Breadcrumbs;