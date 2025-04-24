import { useParams, Link } from "react-router-dom";
import NewsCard from "../components/news/NewsCard";

// Import the mock news data
import { newsData } from "./NewsPage";

function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const newsId = parseInt(id || "1");

  // Find the news item with the matching id
  const newsItem = newsData.find((item) => item.id === newsId);

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Nyhed ikke fundet</h1>
        <p className="mb-8">Den nyhed, du leder efter, findes ikke.</p>
        <Link to="/nyheder" className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors">
          Tilbage til nyheder
        </Link>
      </div>
    );
  }

  // Get related news (excluding current news item)
  const relatedNews = newsData.filter((item) => item.id !== newsId).slice(0, 3);

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-900">
              Forside
            </Link>
            <span className="mx-2">›</span>
            <Link to="/nyheder" className="hover:text-blue-900">
              Nyheder
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">{newsItem.title}</span>
          </div>
        </div>

        {/* News Header */}
        <div className="mb-8">
          <span className="inline-block bg-blue-900 text-white text-xs px-3 py-1 mb-4">{newsItem.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{newsItem.title}</h1>
          <div className="text-gray-500 text-sm">{newsItem.date}</div>
        </div>

        {/* News Image */}
        <div className="mb-8">
          <img src={newsItem.image} alt={newsItem.title} className="w-full h-[400px] object-cover rounded-lg shadow-md" />
        </div>

        {/* News Content */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">{newsItem.excerpt}</p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula nisi vel orci gravida, vel fringilla felis feugiat. Vivamus hendrerit nunc et lectus pharetra, quis scelerisque eros dignissim. Phasellus dignissim nibh vitae
              gravida efficitur. Phasellus convallis lectus eu lorem ultricies, non varius massa pharetra. Morbi sed congue libero. Donec eget odio semper, ultrices ipsum eget, mattis nulla. Aenean iaculis elementum elit, eu tristique nisi posuere
              vel.
            </p>
            <p className="mb-4">
              Suspendisse ut facilisis dolor. Nullam aliquam dictum risus, vel euismod sem mattis et. Morbi vitae arcu quis augue consequat convallis. Morbi tempus libero vitae odio egestas, ut pellentesque lectus congue. Donec aliquam elementum
              finibus. Aenean sit amet convallis nulla. Mauris vestibulum nulla quis tellus feugiat vehicula.
            </p>
            <p className="mb-4">
              Cras commodo nisl id tempor facilisis. Duis suscipit magna id tortor ultrices, non pellentesque ligula finibus. Nam interdum placerat urna, quis facilisis urna dignissim et. Sed feugiat venenatis sapien, a commodo libero mollis at.
              Nulla id orci felis. Curabitur viverra lobortis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mb-4">
              Nulla facilisis nibh vitae orci auctor suscipit. Aenean vel dui eu tellus efficitur semper. Quisque finibus justo ut enim rhoncus sagittis. Nam euismod tellus quis eros ultricies, a sodales nisl pharetra. Fusce eu luctus ipsum. Integer
              eget lacus vel nibh varius pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>

        {/* Related News */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Relaterede nyheder</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} id={news.id} category={news.category} date={news.date} title={news.title} excerpt={news.excerpt} image={news.image} />
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link to="/nyheder" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors">
            Tilbage til alle nyheder
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailPage;
