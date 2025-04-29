import { Link } from "react-router-dom";
import archeryBgVideo from "../../assets/video/bow-bg.mp4";

function ArcheryFrontPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline src={archeryBgVideo} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Bueskydning Danmark</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">– Det er sjovt at skyde med bue</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/bueskydning/find-klub" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Find en klub
              </Link>
              <Link to="/bueskydning/stævner" className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-full transition-colors">
                Se kommende stævner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Om Bueskydning Danmark</h2>
            <p className="text-lg text-gray-700 mb-8">
              Bueskydning Danmark er den øverste faglige myndighed inden for bueskydning i Danmark, med det formål at fremme og udvikle sporten. Vi er et forbund for alle bueskytter, og vi tilbyder bueskydning til alle niveauer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Vores Mission</h3>
                <p className="text-gray-700">At samle alle danske foreninger med bueskydning på programmet under én fælles ledelse og tilbyde udviklingsmuligheder for foreningerne og deres medlemmer.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-3">For Klubber</h3>
                <p className="text-gray-700">Vi tilbyder klubber støtte, uddannelse, and ressourcer for at fremme bueskydning i Danmark.</p>
                <Link to="/bueskydning/om-os" className="inline-block mt-4 text-green-600 hover:text-green-800 font-medium">
                  Læs mere om tilbud
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Stævner & Konkurrencer</h3>
                <p className="text-gray-700">Vi planlægger, afholder og fører tilsyn med alle stævneaktiviteter inden for forbundets område.</p>
                <Link to="/bueskydning/stævner" className="inline-block mt-4 text-green-600 hover:text-green-800 font-medium">
                  Se kommende stævner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Seneste Nyheder</h2>
            <Link to="/bueskydning/nyheder" className="text-green-600 hover:text-green-800 font-medium">
              Se alle nyheder
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/600x400" alt="Invitation til Sommerskydning" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">29. april 2025</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">Invitation til Sommerskydning 2025</h3>
                <p className="text-gray-700 mb-4">Bueskydning Danmark er klar med invitationen for Sommerskydning 2025! Sommerskydningen er et landsdækkende arrangement.</p>
                <Link to="/bueskydning/nyheder/sommerskydning-2025" className="text-green-600 hover:text-green-800 font-medium">
                  Læs mere
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/600x400" alt="Mentaltræning med bue og pil" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">29. april 2025</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">Mentaltræning med bue og pil</h3>
                <p className="text-gray-700 mb-4">Nedenstående artikel er bragt bladet BUESKYDNING i september 2010 og bragt i magasinet Psykologi.</p>
                <Link to="/bueskydning/nyheder/mentaltraening" className="text-green-600 hover:text-green-800 font-medium">
                  Læs mere
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/600x400" alt="Servicemeddelelse til alle foreninger" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">23. april 2025</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">Servicemeddelelse til alle foreninger</h3>
                <p className="text-gray-700 mb-4">Vigtig information til alle medlemsforeninger vedrørende kommende ændringer og arrangementer.</p>
                <Link to="/bueskydning/nyheder/servicemeddelelse" className="text-green-600 hover:text-green-800 font-medium">
                  Læs mere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Kommende Stævner</h2>
            <Link to="/bueskydning/stævner" className="text-green-600 hover:text-green-800 font-medium">
              Se alle stævner
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <span className="text-sm font-semibold text-green-600 block">3. maj 2025</span>
                <span className="text-sm text-gray-500">08:00-17:00</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Arcus Ligaen</h3>
              <p className="text-gray-700 text-sm mb-3">Arcus</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Alle stævner</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Udendørsstævne</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">WA godkendt</span>
              </div>
              <Link to="/bueskydning/stævner/arcus-ligaen" className="text-green-600 hover:text-green-800 font-medium text-sm">
                Læs mere
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <span className="text-sm font-semibold text-green-600 block">10. maj 2025</span>
                <span className="text-sm text-gray-500">08:00-17:00</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Grundtræner Modul C – Holstebro</h3>
              <p className="text-gray-700 text-sm mb-3">Holstebro Bueskytteforening</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Kursus</span>
              </div>
              <Link to="/bueskydning/kurser/grundtraener-modul-c" className="text-green-600 hover:text-green-800 font-medium text-sm">
                Læs mere
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <span className="text-sm font-semibold text-green-600 block">11. maj 2025</span>
                <span className="text-sm text-gray-500">10:00-16:00</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">30 måls 3D stævne</h3>
              <p className="text-gray-700 text-sm mb-3">Vejen Bueskytteforening</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">3D</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Alle stævner</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Udendørsstævne</span>
              </div>
              <Link to="/bueskydning/stævner/30-maals-3d" className="text-green-600 hover:text-green-800 font-medium text-sm">
                Læs mere
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <span className="text-sm font-semibold text-green-600 block">17. maj 2025</span>
                <span className="text-sm text-gray-500">10:15-17:00</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Teknikskole 1</h3>
              <p className="text-gray-700 text-sm mb-3">Københavns Bueskyttelaug</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Kursus</span>
              </div>
              <Link to="/bueskydning/kurser/teknikskole-1" className="text-green-600 hover:text-green-800 font-medium text-sm">
                Læs mere
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Vil du være opdateret på, hvad der sker i bueskydning?</h2>
            <p className="text-xl mb-8">Så tilmeld dig vores nyhedsbrev!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input type="email" placeholder="Din e-mail adresse" className="px-4 py-3 rounded-lg w-full md:w-96 text-gray-800 focus:outline-none" />
              <button className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-lg transition-colors">TILMELD</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArcheryFrontPage;
