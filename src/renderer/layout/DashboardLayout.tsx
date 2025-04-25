import React from 'react';
import Header from '../components/shared/Header';
import Sidebar from '../components/shared/Sidebar';
import Footer from '../components/shared/Footer';

function DashboardLayout({
  children,
  toggleSidebar,
  isSidebarOpen,
}: {
  children: React.ReactNode;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-grow">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-grow p-4 bg-gray-100">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
