import { Routes, Route } from 'react-router-dom';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Dashboard from '../screens/dashboard/Dashboard'; // Assuming you want to keep Dashboard in a separate file
import AboutUs from '../screens/dashboard/AboutUs';
import ContactUs from '../screens/dashboard/ConactUs';
import Chat from '../screens/dashboard/Chat';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default AppRoutes;
