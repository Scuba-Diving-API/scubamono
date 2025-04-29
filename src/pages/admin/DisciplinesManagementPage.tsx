import React, { useState } from 'react';

const DisciplinesManagementPage: React.FC = () => {
  // Mock data for disciplines
  const [disciplines, setDisciplines] = useState([
    { id: 1, name: 'Scuba Diving', description: 'Recreational diving with scuba gear', status: 'Active' },
    { id: 2, name: 'Free Diving', description: 'Underwater diving without breathing apparatus', status: 'Active' },
    { id: 3, name: 'Technical Diving', description: 'Advanced diving with extended range', status: 'Active' },
    { id: 4, name: 'Underwater Hockey', description: 'Team water sport played at the bottom of a swimming pool', status: 'Active' },
  ]);

  // Function to handle delete action (mock implementation)
  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this discipline?')) {
      setDisciplines(prevDisciplines => prevDisciplines.filter(discipline => discipline.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Disciplines Management</h1>
        <a 
          href="/diving/admin/disciplines/create" 
          className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
        >
          Add New Discipline
        </a>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
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
            {disciplines.map((discipline) => (
              <tr key={discipline.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{discipline.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">{discipline.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {discipline.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <a href={`/diving/admin/disciplines/edit/${discipline.id}`} className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <button 
                    onClick={() => handleDelete(discipline.id)} 
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

export default DisciplinesManagementPage;