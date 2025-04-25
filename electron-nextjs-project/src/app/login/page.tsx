import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login Page</h1>
      {/* Add your login form here */}
      <Link href="/" passHref>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
