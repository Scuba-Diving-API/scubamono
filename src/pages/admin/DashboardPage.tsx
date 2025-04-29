import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  // Mock data for dashboard
  const stats = [
    { title: 'Total News', count: 24, link: '/diving/admin/news' },
    { title: 'Upcoming Events', count: 8, link: '/diving/admin/events' },
    { title: 'Education Programs', count: 12, link: '/diving/admin/education' },
    { title: 'Disciplines', count: 6, link: '/diving/admin/disciplines' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link 
            key={index} 
            to={stat.link}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
            <p className="text-3xl font-bold mt-2 text-blue-600">{stat.count}</p>
          </Link>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link 
            to="/diving/admin/news/create" 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
          >
            Add News Article
          </Link>
          <Link 
            to="/diving/admin/events/create" 
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 inline-block text-center"
          >
            Create Event
          </Link>
          <Link 
            to="/diving/admin/education/create" 
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 inline-block text-center"
          >
            Add Education Program
          </Link>
          <Link 
            to="/diving/admin/disciplines/create" 
            className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 inline-block text-center"
          >
            Add Discipline
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;