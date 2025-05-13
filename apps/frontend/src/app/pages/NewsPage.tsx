import { useEffect, useState } from 'react';
import NewsCard from '../components/news/NewsCard';
import { NewsFeed } from '../../types/types';
import { getNewsFeed } from '../../api/endpoints';

// Mock news data with lorem ipsum
export const newsData = [
  {
    id: 1,
    category: 'UV-RUGDY',
    date: '22. april 2025',
    title: 'Danmarksmesterskab i Undervandsrugby',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget magna vel dolor ultrices rhoncus vitae ac massa.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
  },
  {
    id: 2,
    category: 'FRIDYKNING',
    date: '18. april 2025',
    title: 'Ny rekord sat ved DM i fridykning',
    excerpt:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae lobortis mi, ac congue magna.',
    image: 'https://images.unsplash.com/photo-1682687982502-cbcc53dc3502',
  },
  {
    id: 3,
    category: 'UV-FOTO',
    date: '15. april 2025',
    title: 'Resultater fra årets første UV-foto konkurrence',
    excerpt:
      'Nulla facilisi. Maecenas a nulla id eros efficitur faucibus. Suspendisse malesuada, neque eu pulvinar cursus.',
    image: 'https://images.unsplash.com/photo-1580019542155-247062e19ce4',
  },
  {
    id: 4,
    category: 'HAVMILJØ',
    date: '12. april 2025',
    title: 'Succesfuld fjernelse af spøgelsesnet ved Bornholm',
    excerpt:
      'Etiam sollicitudin, libero nec imperdiet facilisis, lorem nisi mollis nisl, eu tempus quam metus ac erat.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
  },
  {
    id: 5,
    category: 'ORGANISATION',
    date: '10. april 2025',
    title: 'Nye bestyrelsesmedlemmer i Dansk Sportsdykker Forbund',
    excerpt:
      'Cras tempus est nec metus dictum, vel maximus risus rhoncus. Phasellus sagittis, eros in varius volutpat.',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c',
  },
  {
    id: 6,
    category: 'KONKURRENCE',
    date: '5. april 2025',
    title: 'Udtagelse til landsholdet i finnesvømning',
    excerpt:
      'Praesent at diam magna. Ut suscipit tortor vitae dolor condimentum, ut tincidunt massa volutpat.',
    image: 'https://images.unsplash.com/photo-1599137248983-e6061c27ec80',
  },
  {
    id: 7,
    category: 'UV-JAGT',
    date: '1. april 2025',
    title: 'Sæsonstart for UV-jagt 2025',
    excerpt:
      'Sed condimentum mauris eu ligula auctor, vitae mattis ante convallis. Nullam semper massa id sapien condimentum porttitor.',
    image: 'https://images.unsplash.com/photo-1682687218147-9806132dc697',
  },
  {
    id: 8,
    category: 'UDDANNELSE',
    date: '28. marts 2025',
    title: 'Nye CMAS instruktører uddannet i weekenden',
    excerpt:
      'Donec consequat felis non arcu faucibus, sit amet efficitur eros varius. Nulla facilisi. Integer finibus diam et ipsum luctus.',
    image: 'https://images.unsplash.com/photo-1627634432973-ce0e62e4c707',
  },
  {
    id: 9,
    category: 'EVENTS',
    date: '25. marts 2025',
    title: 'Stort fremmøde til årets første dykkerweekend',
    excerpt:
      'Pellentesque interdum nisl vitae mauris rutrum, at commodo velit suscipit. Fusce ultrices nisl eget tempor pretium.',
    image: 'https://images.unsplash.com/photo-1559713044-a8b2f7f14ef6',
  },
];

function NewsPage() {
  const [news, setNews] = useState<NewsFeed[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNewsFeed();
        if (data) {
          setNews(data);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Nyheder
          </h1>
          <p className="text-gray-600">
            De seneste nyheder fra Dansk Sportsdykker Forbund
          </p>
        </div>

        {/* News Filter Categories - For future implementation */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
            Alle
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            UV-Rugby
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            Fridykning
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            UV-Foto
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            Havmiljø
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            Organisation
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news &&
            news.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                category={news.category}
                date={Intl.DateTimeFormat('da-DK', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                }).format(new Date(news.createdAt))}
                title={news.title}
                excerpt={news.subtitle}
                image={news.image}
              />
            ))}
        </div>

        {/* Pagination - For future implementation */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-1">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              Forrige
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-md">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              3
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              Næste
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
