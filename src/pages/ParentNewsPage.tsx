import { Link } from "react-router-dom";

export default function ParentNewsPage() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Seneste nyheder</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* This would be populated with actual news, this is just placeholder */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="bg-gray-300 h-48"></div>
              <div className="p-6">
                <span className="text-sm text-gray-500">24 Apr 2025</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">Nyhed {i}: Sportens udviklingstiltag</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                <Link to="/news/1" className="text-blue-600 font-medium hover:text-blue-800">
                  Læs mere
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
