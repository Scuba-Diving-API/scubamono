import { Link } from "react-router-dom";

function SkydivingNewsPage() {
  // Sample news data for Dansk Faldskærms Union
  const newsData = [
    {
      id: "dm-formation-skydiving-2025",
      title: "DM i Formation Skydiving 2025",
      date: "28. april 2025",
      excerpt: "Dansk Faldskærms Union inviterer til Danmarksmesterskabet i Formation Skydiving 2025, som afholdes i Odense Faldskærmsklub.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "sikkerhedsregler-2025",
      title: "Nye sikkerhedsregler for 2025",
      date: "25. april 2025",
      excerpt: "DFU's sikkerhedsudvalg har opdateret sikkerhedsreglerne for 2025-sæsonen. Alle springere skal sætte sig ind i de nye regler.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "tandem-saeson-2025",
      title: "Tandemspring sæson 2025 er åben",
      date: "20. april 2025",
      excerpt: "Foråret er her, og tandemspring-sæsonen er officielt åbnet! Find din nærmeste klub og book dit spring i dag.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "faldskærmskonference-2025",
      title: "Faldskærmskonference 2025",
      date: "15. april 2025",
      excerpt: "Sæt allerede nu kryds i kalenderen for årets store faldskærmskonference, der afholdes i Idrættens Hus i Brøndby d. 12. juni 2025.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "nye-licenser-udstedt",
      title: "Nye licenser udstedt til instruktører",
      date: "10. april 2025",
      excerpt: "DFU har udstedt nye licenser til en række instruktører efter succesfuld gennemførelse af uddannelsesforløb.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "international-konkurrence",
      title: "Danske springere deltager i international konkurrence",
      date: "5. april 2025",
      excerpt: "Det danske landshold i formation skydiving skal repræsentere Danmark ved den internationale konkurrence i Madrid i maj måned.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nyheder fra Dansk Faldskærms Union</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <h3 className="text-xl font-semibold my-2">{news.title}</h3>
                  <p className="text-gray-700 mb-4">{news.excerpt}</p>
                  <Link 
                    to={`/skydiving/nyheder/${news.id}`} 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Læs mere
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-16 bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Få de seneste nyheder fra DFU</h2>
            <p className="mb-6">Tilmeld dig vores nyhedsbrev og få seneste nyt direkte i din indbakke.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Din e-mail adresse"
                className="px-4 py-3 rounded-lg w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                TILMELD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkydivingNewsPage;