import React, { useState } from 'react';

const EventsManagementPage: React.FC = () => {
  // Mock data for events
  const [events, setEvents] = useState([
    { id: 1, title: 'Open Water Diving Workshop', date: '2025-05-15', location: 'Copenhagen', status: 'Upcoming' },
    { id: 2, title: 'Underwater Photography Competition', date: '2025-06-10', location: 'Aarhus', status: 'Upcoming' },
    { id: 3, title: 'Safety Training Seminar', date: '2025-04-25', location: 'Odense', status: 'Completed' },
    { id: 4, title: 'Junior Diving Championship', date: '2025-07-05', location: 'Aalborg', status: 'Upcoming' },
  ]);

  // Function to handle delete action (mock implementation)
  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Events Management</h1>
        <a 
          href="/diving/admin/events/create" 
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Create New Event
        </a>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{event.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{event.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <a href={`/diving/admin/events/edit/${event.id}`} className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <button 
                    onClick={() => handleDelete(event.id)} 
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsManagementPage;