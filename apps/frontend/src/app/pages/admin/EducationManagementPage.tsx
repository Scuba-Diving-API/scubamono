import React, { useState } from "react";

const EducationManagementPage: React.FC = () => {
  // Mock data for education programs
  const [programs, setPrograms] = useState([
    { id: 1, title: "Open Water Diver Certification", level: "Beginner", duration: "4 weeks", status: "Active" },
    { id: 2, title: "Advanced Open Water Diver", level: "Intermediate", duration: "3 weeks", status: "Active" },
    { id: 3, title: "Rescue Diver", level: "Advanced", duration: "2 weeks", status: "Active" },
    { id: 4, title: "Divemaster Training", level: "Professional", duration: "8 weeks", status: "Upcoming" },
  ]);

  // Function to handle delete action (mock implementation)
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this education program?")) {
      setPrograms((prevPrograms) => prevPrograms.filter((program) => program.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Education Management</h1>
        <a href="/diving/admin/education/create" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
          Add New Program
        </a>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {programs.map((program) => (
              <tr key={program.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{program.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{program.level}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{program.duration}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${program.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
                  >
                    {program.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <a href={`/diving/admin/education/edit/${program.id}`} className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <button onClick={() => handleDelete(program.id)} className="text-red-600 hover:text-red-900">
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

export default EducationManagementPage;
