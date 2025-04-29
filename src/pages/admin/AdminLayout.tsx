import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem('adminUser') || 'Admin';

  const handleLogout = () => {
    // Clear authentication state
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('adminUser');
    // Redirect to login page
    navigate('/diving/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <div className="p-4 border-b border-blue-700">
          <h2 className="text-2xl font-semibold">Diving Admin</h2>
          <p className="text-sm text-blue-300">Welcome, {username}</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/diving/admin/dashboard" 
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/diving/admin/news" 
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                News Management
              </Link>
            </li>
            <li>
              <Link 
                to="/diving/admin/events" 
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Events Management
              </Link>
            </li>
            <li>
              <Link 
                to="/diving/admin/education" 
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Education Management
              </Link>
            </li>
            <li>
              <Link 
                to="/diving/admin/disciplines" 
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Disciplines Management
              </Link>
            </li>
            <li className="mt-8">
              <button 
                onClick={handleLogout}
                className="w-full text-left py-2 px-4 rounded hover:bg-red-700 text-red-200"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;