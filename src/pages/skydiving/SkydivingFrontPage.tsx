import { Link } from "react-router-dom";
import skydivingBgVideo from "../../assets/video/skydiving-bg.mp4";

function SkydivingFrontPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={skydivingBgVideo}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dansk Faldskærms Union
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Oplev friheden i frit fald – Spring med DFU
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/skydiving/find-klub"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Find en klub
              </Link>
              <Link
                to="/skydiving/kurser"
                className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-full transition-colors"
              >
                Kom i gang med faldskærm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Om Dansk Faldskærms Union</h2>
            <p className="text-lg text-gray-700 mb-8">
              Dansk Faldskærms Union (DFU) er det officielle specialforbund for faldskærmsudspring i Danmark. Vi arbejder for at fremme sporten, sikre høj sikkerhed og udvikle talenter på alle niveauer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">For nybegyndere</h3>
                <p className="text-gray-700">
                  Vi tilbyder uddannelse og kurser for alle, der gerne vil opleve den ultimative frihed i luften. Vores certificerede instruktører sikrer en tryg og sjov oplevelse.
                </p>
                <Link to="/skydiving/kurser" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Læs mere om kurser
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Discipliner</h3>
                <p className="text-gray-700">
                  Faldskærmsudspring indeholder mange forskellige discipliner og områder – fra formation skydiving til freestyle og wingsuit.
                </p>
                <Link to="/skydiving/aktiviteter" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Udforsk discipliner
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">For klubber</h3>
                <p className="text-gray-700">
                  Vi støtter vores medlemsklubber med uddannelse, materialer og ressourcer for at sikre høj kvalitet og sikkerhed i hele landet.
                </p>
                <Link to="/skydiving/om-os" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Klubinformation
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
            <Link to="/skydiving/nyheder" className="text-blue-600 hover:text-blue-800 font-medium">
              Se alle nyheder
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/600x400" alt="DM i Formation Skydiving 2025" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">28. april 2025</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">DM i Formation Skydiving 2025</h3>
                <p className="text-gray-700 mb-4">
                  Dansk Faldskærms Union inviterer til Danmarksmesterskabet i Formation Skydiving 2025, som afholdes i Odense Faldskærmsklub.
                </p>
                <Link to="/skydiving/nyheder/dm-formation-skydiving-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                  Læs mere
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/600x400" alt="Nye sikkerhedsregler 2025" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">25. april 2025</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">Nye sikkerhedsregler for 2025</h3>
                <p className="text-gray-700 mb-4">
                  DFU's sikkerhedsudvalg har opdateret sikkerhedsreglerne for 2025-sæsonen. Alle springere skal sætte sig ind i de nye regler.
                </p>
                <Link to="/skydiving/nyheder/sikkerhedsregler-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                  Læs mere
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://via.placeholder.com/600x400" alt="Tandemspring sæson 2025" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">20. april 2025</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">Tandemspring sæson 2025 er åben</h3>
                <p className="text-gray-700 mb-4">
                  Foråret er her, og tandemspring-sæsonen er officielt åbnet! Find din nærmeste klub og book dit spring i dag.
                </p>
                <Link to="/skydiving/nyheder/tandem-saeson-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                  Læs mere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Faldskærmsaktiviteter</h2>
            <Link to="/skydiving/aktiviteter" className="text-blue-600 hover:text-blue-800 font-medium">
              Se alle aktiviteter
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-40 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-5xl text-blue-500">🪂</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tandemspring</h3>
              <p className="text-gray-700 text-sm mb-3">
                Oplev spændingen ved faldskærmsudspring fastspændt til en erfaren instruktør. Den perfekte oplevelse for nybegyndere.
              </p>
              <Link to="/skydiving/aktiviteter/tandemspring" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Læs mere
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-40 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-5xl text-blue-500">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Formation Skydiving</h3>
              <p className="text-gray-700 text-sm mb-3">
                Konkurrencedisciplin hvor hold af springere danner formationer under frit fald. Kræver præcision og samarbejde.
              </p>
              <Link to="/skydiving/aktiviteter/formation-skydiving" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Læs mere
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-40 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-5xl text-blue-500">🦅</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wingsuit</h3>
              <p className="text-gray-700 text-sm mb-3">
                Flyv som en fugl med en specialdesignet dragt, der giver dig mulighed for at svæve længere og mere kontrolleret.
              </p>
              <Link to="/skydiving/aktiviteter/wingsuit" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Læs mere
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-40 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-5xl text-blue-500">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Præcisionsspring</h3>
              <p className="text-gray-700 text-sm mb-3">
                Klassisk konkurrencedisciplin hvor målet er at lande så præcist som muligt på et markeret målområde.
              </p>
              <Link to="/skydiving/aktiviteter/praecisionsspring" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Læs mere
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Hold dig opdateret om faldskærmsaktiviteter</h2>
            <p className="text-xl mb-8">Tilmeld dig vores nyhedsbrev og få seneste nyt og kommende begivenheder direkte i din indbakke</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Din e-mail adresse"
                className="px-4 py-3 rounded-lg w-full md:w-96 text-gray-800 focus:outline-none"
              />
              <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-lg transition-colors">
                TILMELD
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkydivingFrontPage;