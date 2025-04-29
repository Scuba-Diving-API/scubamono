import { Link } from "react-router-dom";

function ArcheryNewsPage() {
  // Sample news data for Bueskydning Danmark
  const newsData = [
    {
      id: "sommerskydning-2025",
      title: "Invitation til Sommerskydning 2025",
      date: "29. april 2025",
      excerpt: "Bueskydning Danmark er klar med invitationen for Sommerskydning 2025! Sommerskydningen er et landsdækkende arrangement, der er åbent for alle skytter og klubber.",
      imageUrl: "https://via.placeholder.com/800x450",
      category: "Stævner",
    },
    {
      id: "mentaltraening",
      title: "Mentaltræning med bue og pil",
      date: "29. april 2025",
      excerpt: "Nedenstående artikel er bragt bladet BUESKYDNING i september 2010 og bragt i magasinet Psykologi. Læs om hvordan bueskydning kan anvendes i mentaltræning.",
      imageUrl: "https://via.placeholder.com/800x450",
      category: "Artikler",
    },
    {
      id: "servicemeddelelse",
      title: "Servicemeddelelse til alle foreninger",
      date: "23. april 2025",
      excerpt: "Vigtig information til alle medlemsforeninger vedrørende kommende ændringer og arrangementer. Læs hele meddelelsen her.",
      imageUrl: "https://via.placeholder.com/800x450",
      category: "Meddelelser",
    },
    {
      id: "fluegger-andelen",
      title: "Flügger andelen",
      date: "20. april 2025",
      excerpt: "Vidste I, at Flügger farver har et koncept, der hedder Flügger andelen, hvor foreninger kan tjene 5% på medlemmers køb i Flügger farver?",
      imageUrl: "https://via.placeholder.com/800x450",
      category: "Sponsorer",
    },
    {
      id: "foraarsstaevne-2025",
      title: "Forårsstævne hos TIK Bueskydning",
      date: "15. april 2025",
      excerpt: "TIK Bueskydning inviterer til forårsstævne den 24. maj 2025. Stævnet er WA godkendt og åbent for alle bueskytter.",
      imageUrl: "https://via.placeholder.com/800x450",
      category: "Stævner",
    },
    {
      id: "3d-jagtstævne",
      title: "30 måls 3D Jagtstævne",
      date: "10. april 2025",
      excerpt: "Vejen Bueskytteforening inviterer til 30 måls 3D jagtstævne den 11. maj 2025. Kom og oplev den spændende 3D-disciplin i naturskønne omgivelser.",
      imageUrl: "https://via.placeholder.com/800x450",
      category: "Stævner",
    },
    {
      id: "grundtraenerkursus",
      title: "Nye datoer for grundtrænerkursus",
      date: "5. april 2025",
      excerpt: "Bueskydning Danmark har fastlagt nye datoer for grundtrænerkursus Modul C i Holstebro. Tilmeldingen er åben nu.",
      imageUrl: "https://via.placeholder.com/800x450",
      category: "Kurser",
    },
    {
      id: "landsholdsudtagelse",
      title: "Udtagelse til landsholdet 2025",
      date: "1. april 2025",
      excerpt: "Bueskydning Danmark har udtaget landsholdsskytterne for 2025-sæsonen. Se den komplette liste over udtagne skytter her.",
      imageUrl: "https://via.placeholder.com/800x450",
      category: "Landshold",
    },
  ];

  // Category filters for news items
  const categories = ["Alle", "Stævner", "Kurser", "Meddelelser", "Artikler", "Landshold", "Sponsorer"];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nyheder fra Bueskydning Danmark</h1>

        {/* Category filter */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === "Alle" ? "bg-[#075a3a] text-white" : "bg-white text-gray-700 hover:bg-[#e7f7ef] hover:text-[#075a3a] border border-gray-200"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <span className="bg-[#e7f7ef] text-[#075a3a] text-xs px-2 py-1 rounded">{news.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                  <p className="text-gray-700 mb-4">{news.excerpt}</p>
                  <Link to={`/bueskydning/nyheder/${news.id}`} className="text-[#32b67a] hover:text-[#075a3a] font-medium inline-flex items-center">
                    Læs mere
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Forrige
              </a>
              <a href="#" className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 bg-[#075a3a] text-sm font-medium text-white">
                1
              </a>
              <a href="#" className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="inline-flex items-center px-4 py-2 rounded-r-md border border-l-0 border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Næste
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </nav>
          </div>

          {/* Newsletter signup */}
          <div className="mt-16 bg-[#075a3a] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Få de seneste nyheder fra Bueskydning Danmark</h2>
            <p className="mb-6">Tilmeld dig vores nyhedsbrev og få seneste nyt direkte i din indbakke.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Din e-mail adresse" className="px-4 py-3 rounded-lg w-full text-gray-800 focus:outline-none" />
              <button className="bg-white hover:bg-gray-100 text-[#075a3a] font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">TILMELD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArcheryNewsPage;
