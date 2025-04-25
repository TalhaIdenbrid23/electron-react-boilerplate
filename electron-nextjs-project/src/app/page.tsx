'use client';
import React from 'react';
import Link  from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="bg-blue-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-green-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-green-600">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
