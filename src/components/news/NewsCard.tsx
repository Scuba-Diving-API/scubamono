import { Link } from "react-router-dom";

interface NewsCardProps {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

function NewsCard({ id, category, date, title, excerpt, image }: NewsCardProps) {
  return (
    <Link to={`/nyheder/${id}`} className="block bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
        <div className="absolute top-0 left-0 bg-blue-900 text-white text-xs px-3 py-1">{category}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <span className="text-cyan-600 font-medium hover:text-cyan-700">Læs mere →</span>
      </div>
    </Link>
  );
}

export default NewsCard;
