import { MemoryRouter as Router, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import Footer from './components/shared/Footer';
import Breadcrumbs from './components/shared/Breadcrumbs';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check if the current path is either login or signup
  const isAuthRoute =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="flex flex-col h-screen">
      {!isAuthRoute && <Header toggleSidebar={toggleSidebar} />}
      <div className="flex flex-grow">
        {!isAuthRoute && <Sidebar isOpen={isSidebarOpen} />}
        <main className="flex-grow p-4 bg-gray-100">
          <AppRoutes />
        </main>
      </div>
      {!isAuthRoute && <Footer />}
    </div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
