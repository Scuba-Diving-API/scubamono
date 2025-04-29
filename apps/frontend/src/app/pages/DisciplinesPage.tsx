import { Link } from "react-router-dom";

// Mock disciplines data
const disciplines = [
  {
    id: 1,
    title: "Undervands-Rugby",
    description: "En intens holdsport der spilles under vandet med en saltvandsfyldt bold.",
    shortDescription: "Intenst holdspil under vandet med speciel bold.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
  },
  {
    id: 2,
    title: "Fridykning",
    description: "Dykning på ét åndedrag uden brug af dykkerudstyr, hvor man udforsker dybden eller længden.",
    shortDescription: "Dykning uden udstyr, kun på ét åndedrag.",
    image: "https://images.unsplash.com/photo-1517686667428-2a1e7b5c5e9b",
  },
  {
    id: 3,
    title: "UV-Jagt",
    description: "Undervandsjagt efter fisk med harpun, en sport der kræver præcision og tålmodighed.",
    shortDescription: "Jagt efter fisk med harpun under vandet.",
    image: "https://images.unsplash.com/photo-1682687218147-9806132dc697",
  },
  {
    id: 4,
    title: "UV-Foto",
    description: "Fotografering under vandet, hvor man indfanger havets skønhed og det maritime liv.",
    shortDescription: "Fotografering af havets skønhed og liv.",
    image: "https://images.unsplash.com/photo-1580019542155-247062e19ce4",
  },
  {
    id: 5,
    title: "Finnesvømning",
    description: "En svømmesport hvor man bruger monofinner eller bifinner til at svømme hurtigt gennem vandet.",
    shortDescription: "Svømning med monofinner eller bifinner.",
    image: "https://images.unsplash.com/photo-1516672496673-61d77dc901ef",
  },
  {
    id: 6,
    title: "Undervandsorientering",
    description: "En disciplin hvor dykkere navigerer under vandet ved hjælp af kompas og målebånd.",
    shortDescription: "Navigation under vandet med kompas og målebånd.",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c",
  },
];

function DisciplinesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d2d52] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3" alt="Underwater sports" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discipliner</h1>
          <p className="text-xl max-w-3xl">Opdagelse af de forskellige sportsdiscipliner under vandet - fra konkurrencesporter til rekreative aktiviteter.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">Mød vandets mange discipliner</h2>
          <p className="mb-4">Dykning er meget mere end bare at svømme under vandet. Dansk Sportsdykker Forbund tilbyder en række forskellige discipliner, der hver især giver unikke oplevelser og udfordringer under overfladen.</p>
          <p>Uanset om du er til konkurrence, udforskning eller kunstnerisk udfoldelse, så er der en undervandsdisciplin, der passer til dig. Udforsk vores forskellige discipliner nedenfor og find din passion under vandet.</p>
        </div>

        {/* Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {disciplines.map((discipline) => (
            <Link key={discipline.id} to={`/discipliner/${discipline.id}`} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg flex flex-col h-full">
              <div className="h-56 overflow-hidden">
                <img src={discipline.image} alt={discipline.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-2 text-[#0d2d52]">{discipline.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{discipline.shortDescription}</p>
                <span className="text-[#57b5eb] font-medium mt-auto">Læs mere →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Discipline */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5" alt="Underwater Rugby" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <span className="inline-block bg-[#b1d9f5] text-[#0d2d52] px-3 py-1 rounded-full text-sm font-medium mb-4">Fremhævet disciplin</span>
              <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">Undervands-Rugby</h2>
              <p className="text-gray-600 mb-6">Undervands-rugby er en intens og spændende holdsport, der spilles i et 3D-miljø under vandet. To hold kæmper om at score mål med en saltvandsfyldt bold i en metalkurv på bunden af poolen.</p>
              <p className="text-gray-600 mb-6">
                Sporten kræver god kondition, svømmeevner og evnen til at holde vejret, mens man manøvrerer og samarbejder med holdkammerater. Danmarks landshold i undervands-rugby er blandt de bedste i verden og har vundet adskillige medaljer ved
                verdensmesterskaber.
              </p>
              <Link to="/discipliner/1" className="inline-block bg-[#57b5eb] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
                Læs mere om UV-Rugby
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Competitions */}
        <div className="bg-[#b1d9f5] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#0d2d52]">Kommende konkurrencer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-gray-500 mb-2">26-28 maj 2025</div>
              <h3 className="font-bold text-lg mb-2 text-[#0d2d52]">DM i UV-Rugby</h3>
              <p className="text-gray-600 mb-4">Danmarksmesterskab i undervands-rugby for både herre- og damehold. Afholdes i Odense Svømmehal.</p>
              <Link to="/events/1" className="text-[#57b5eb] font-medium hover:text-[#0d2d52] transition-colors">
                Læs mere →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-gray-500 mb-2">12-13 juni 2025</div>
              <h3 className="font-bold text-lg mb-2 text-[#0d2d52]">DM i Finnesvømning</h3>
              <p className="text-gray-600 mb-4">Kom og se Danmarks hurtigste finnesvømmere konkurrere om de prestigefyldte DM-titler i Bellahøj Svømmestadion.</p>
              <Link to="/events/2" className="text-[#57b5eb] font-medium hover:text-[#0d2d52] transition-colors">
                Læs mere →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-gray-500 mb-2">3-4 juli 2025</div>
              <h3 className="font-bold text-lg mb-2 text-[#0d2d52]">Nordisk i UV-Foto</h3>
              <p className="text-gray-600 mb-4">De bedste undervandsfotografer fra de nordiske lande mødes for at konkurrere om de smukkeste undervandsbilleder.</p>
              <Link to="/events/3" className="text-[#57b5eb] font-medium hover:text-[#0d2d52] transition-colors">
                Læs mere →
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="inline-block bg-[#0d2d52] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Se alle konkurrencer
            </Link>
          </div>
        </div>

        {/* Join a Club CTA */}
        <div className="bg-[#0d2d52] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Klar til at prøve en undervandsdisciplin?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Find en klub i nærheden, der tilbyder den disciplin, du er interesseret i. Vores klubber har erfarne instruktører, der kan hjælpe dig i gang.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/find-klub" className="bg-[#57b5eb] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Find din nærmeste klub
            </Link>
            <Link to="/kontakt" className="bg-white text-[#0d2d52] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Kontakt os
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisciplinesPage;
