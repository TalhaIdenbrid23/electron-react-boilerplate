import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col h-screen bg-gray-100">{children}</div>;
}

export default AuthLayout;
