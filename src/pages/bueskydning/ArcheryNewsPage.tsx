import { Link } from "react-router-dom";

function ArcheryNewsPage() {
  // Sample news data based on Bueskydning Danmark's website
  const newsData = [
    {
      id: "sommerskydning-2025",
      title: "Invitation til Sommerskydning 2025",
      date: "29. april 2025",
      excerpt: "Bueskydning Danmark er klar med invitationen for Sommerskydning 2025! Sommerskydningen er et landsdækkende arrangement.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "mentaltraening",
      title: "Mentaltræning med bue og pil",
      date: "29. april 2025",
      excerpt: "Nedenstående artikel er bragt bladet BUESKYDNING i september 2010 og bragt i magasinet Psykologi.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "servicemeddelelse",
      title: "Servicemeddelelse til alle foreninger",
      date: "23. april 2025",
      excerpt: "Vigtig information til alle medlemsforeninger vedrørende kommende ændringer og arrangementer.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "flugger-andelen",
      title: "Flügger andelen",
      date: "20. april 2025",
      excerpt: "Vidste I, at Flügger farver har et koncept, der hedder Flügger andelen, hvor foreninger kan få økonomisk støtte.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "nyt-udvalg",
      title: "Nyt udvalg skal fremme bueskydning i Danmark",
      date: "15. april 2025",
      excerpt: "Bueskydning Danmark har nedsat et nyt udvalg, der skal arbejde med at fremme bueskydning i Danmark og øge synligheden af sporten.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
    {
      id: "europamesterskab",
      title: "Danske bueskytter klar til Europamesterskab",
      date: "10. april 2025",
      excerpt: "De danske bueskytter er klar til at repræsentere Danmark ved det kommende Europamesterskab i bueskydning.",
      imageUrl: "https://via.placeholder.com/800x450",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nyheder</h1>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <h3 className="text-xl font-semibold my-2">{news.title}</h3>
                  <p className="text-gray-700 mb-4">{news.excerpt}</p>
                  <Link to={`/bueskydning/nyheder/${news.id}`} className="text-green-600 hover:text-green-800 font-medium">
                    Læs mere
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-16 bg-green-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Vil du modtage nyheder fra Bueskydning Danmark?</h2>
            <p className="mb-6">Tilmeld dig vores nyhedsbrev og få seneste nyt direkte i din indbakke.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Din e-mail adresse" className="px-4 py-3 rounded-lg w-full text-gray-800 focus:outline-none" />
              <button className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">TILMELD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArcheryNewsPage;
