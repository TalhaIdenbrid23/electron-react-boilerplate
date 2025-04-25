import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex flex-col p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Active Sessions</h2>
          <p className="text-2xl">456</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">New Signups</h2>
          <p className="text-2xl">78</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Feedback Received</h2>
          <p className="text-2xl">23</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Pending Requests</h2>
          <p className="text-2xl">5</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-2xl">$12,345</p>
        </div>
      </div>
    </div>
  );
}
