import React, { useState } from "react";

const NewsManagementPage: React.FC = () => {
  // Mock data for news articles
  const [newsArticles, setNewsArticles] = useState([
    { id: 1, title: "New Diving Course Announced", date: "2025-04-20", status: "Published" },
    { id: 2, title: "Diving Championship Results", date: "2025-04-15", status: "Published" },
    { id: 3, title: "Safety Guidelines Update", date: "2025-04-10", status: "Draft" },
    { id: 4, title: "Interview with Championship Winner", date: "2025-04-05", status: "Published" },
  ]);

  // Function to handle delete action (mock implementation)
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this news article?")) {
      setNewsArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">News Management</h1>
        <a href="/diving/admin/news/create" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add New Article
        </a>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {newsArticles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{article.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{article.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${article.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <a href={`/diving/admin/news/edit/${article.id}`} className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <button onClick={() => handleDelete(article.id)} className="text-red-600 hover:text-red-900">
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

export default NewsManagementPage;
