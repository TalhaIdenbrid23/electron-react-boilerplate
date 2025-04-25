import { MemoryRouter as Router, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import AuthLayout from './layout/AuthLayout';
import DashboardLayout from './layout/DashboardLayout';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check if the current path is either login or signup
  const isAuthRoute =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {isAuthRoute ? (
        <AuthLayout>
          <AppRoutes />
        </AuthLayout>
      ) : (
        <DashboardLayout
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        >
          <AppRoutes />
        </DashboardLayout>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
