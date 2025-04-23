import { useState } from "react";
import dsfLogo from "./assets/images/dsflogo.png";

// Navbar component
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={dsfLogo} alt="DSF Logo" className="h-14 mr-3" />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight">Dansk Sportsdykker</span>
                <span className="font-medium text-sm tracking-tight">Forbund</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">Nyheder</a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">Uddannelse</a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">Discipliner</a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">Events</a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">For medlemmer</a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">Om DSF</a>
            <a href="#" className="font-medium bg-cyan-600 px-4 py-2 rounded-full hover:bg-cyan-700 transition-colors">Webshop</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-blue-800 mt-3">
            <div className="flex flex-col space-y-3">
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">Nyheder</a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">Uddannelse</a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">Discipliner</a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">Events</a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">For medlemmer</a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">Om DSF</a>
              <a href="#" className="px-3 py-2 bg-cyan-600 rounded-md text-center">Webshop</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero section
function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Velkommen til Dansk Sportsdykker Forbund</h1>
          <p className="text-xl mb-8">Oplev havets dyb og bliv en del af Danmarks største dykkernetværk</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-colors">Find lokal klub</a>
            <a href="#" className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">Bliv medlem</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature cards section
function FeatureCards() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-[url('https://images.unsplash.com/photo-1544551763-92ab472cad5d')] bg-cover bg-center"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Uddannelse</h3>
            <p className="text-gray-600 mb-4">Udforsk vores spændende uddannelser og kurser for dykkere på alle niveauer.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">Læs mere →</a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-[url('https://images.unsplash.com/photo-1547760556-b9ebb481a5f3')] bg-cover bg-center"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Spøgelsesnet</h3>
            <p className="text-gray-600 mb-4">Vær med til at bekæmpe havforurening ved at indrapportere og fjerne efterladte fiskenet.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">Indrapportér →</a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-[url('https://images.unsplash.com/photo-1612099197022-947c0811ac77')] bg-cover bg-center"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Discipliner</h3>
            <p className="text-gray-600 mb-4">Oplev mangfoldigheden i dykning - fra UV-jagt til fridykning og undervandsrugby.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">Udforsk →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Event section
function UpcomingEvents() {
  const events = [
    {
      title: "Fridykning: DM i Pool 2025",
      date: "26-27. april 2025",
      location: "Odense Universitetssvømmehal",
      info: "DM i pool afholdes i Odense. Fredag d. 25. april: Mærk vandet (kl. 19-22), konkurrencer lørdag og søndag."
    },
    {
      title: "UV-Jagt: DM 2025",
      date: "17-18. maj 2025",
      location: "Nordsjælland, Gilleleje og Hundested",
      info: "Danmarksmesterskab i UV-jagt hvor vi finder Danmarks bedste UV-jægere."
    },
    {
      title: "Havmiljø: Stenrevskursus",
      date: "17. maj 2025",
      location: "Kommer snart",
      info: "Kursus for alle dykkere med interesse i stenrev og deres økosystem."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Kommende events</h2>
          <p className="text-gray-600">Deltag i spændende dykkeraktiviteter og events over hele landet</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="border-l-4 border-cyan-600 p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">{event.date}</span>
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">📍 {event.location}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.info}</p>
                <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">Mere info →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors">Se alle events</a>
        </div>
      </div>
    </div>
  );
}

// News section
function LatestNews() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Seneste nyt</h2>
          <p className="text-gray-600">Hold dig opdateret med de seneste begivenheder og nyheder</p>
        </div>
        <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700 mt-4 md:mt-0">Se alle nyheder →</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="h-56 bg-[url('https://images.unsplash.com/photo-1543761084-556c4a44f8a1')] bg-cover bg-center"></div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-500">28. mar 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-xs text-blue-700 font-medium">Organisation</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Repræsentantskabsmøde 2025</h3>
            <p className="text-gray-600 mb-4">Husk at årets repræsentantskabsmøde afholdes den 26. april i Odense.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">Læs mere →</a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="h-56 bg-[url('https://images.unsplash.com/photo-1621881538090-b2b26e39b9a3')] bg-cover bg-center"></div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-500">7. mar 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-xs text-blue-700 font-medium">Havmiljø</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Vær med til at plante ålegræs</h3>
            <p className="text-gray-600 mb-4">Det Store Ålegræsinitiativ leder efter snorkeldykkere til et unikt projekt.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">Læs mere →</a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="h-56 bg-[url('https://images.unsplash.com/photo-1544591744-5842d4e0f6b3')] bg-cover bg-center"></div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-500">13. mar 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-xs text-blue-700 font-medium">UV Foto</span>
            </div>
            <h3 className="font-bold text-xl mb-2">DM i UV-foto 2025</h3>
            <p className="text-gray-600 mb-4">Sæt kryds i kalenderen den 14. juni 2025 for Danmarksmesterskabet i undervandsfoto.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">Læs mere →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Membership section
function Membership() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Bliv medlem af DSF</h2>
            <p className="text-xl mb-6">Som medlem får du en række fordele, herunder:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-cyan-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gratis krisehjælp ved uheld</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-cyan-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Adgang til kurser og certificeringer</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-cyan-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Deltagelse i events og konkurrencer</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-cyan-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Rabatter hos samarbejdspartnere</span>
              </li>
            </ul>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Find din nærmeste klub</h3>
              <p className="text-gray-600 mb-6">Indtast dit postnummer og find den nærmeste dykkerklub i dit område.</p>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Indtast postnummer" 
                  className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-blue-900 text-white px-4 py-3 rounded-r-md hover:bg-blue-800 transition-colors">
                  Søg
                </button>
              </div>
              <div className="mt-6">
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700">Se alle klubber →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ section
function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Ofte stillede spørgsmål</h2>
        <p className="text-gray-600">Find svar på de mest almindelige spørgsmål om dykning og medlemskab</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium text-lg mb-2">Hvordan kommer jeg i gang med at dykke?</h3>
            <p className="text-gray-600">Den bedste måde at komme i gang med dykning er at kontakte din lokale dykkerklub. Her kan du få information om begynderkurser og prøvedyk.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium text-lg mb-2">Hvad koster et medlemskab?</h3>
            <p className="text-gray-600">Medlemskabet varierer afhængigt af din lokale klub. Kontakt den nærmeste klub for at få information om deres kontingenter og medlemsfordele.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium text-lg mb-2">Hvad er CMAS-certificeringer?</h3>
            <p className="text-gray-600">CMAS er et internationalt anerkendt dykkercerificeringssystem. DSF tilbyder forskellige CMAS-kurser fra begynder til instruktørniveau.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium text-lg mb-2">Kan jeg dykke, hvis jeg har astma eller andre helbredsproblemer?</h3>
            <p className="text-gray-600">Det afhænger af din specifikke situation. Du bør altid konsultere en læge med kendskab til dykkermedicin før du begynder at dykke, hvis du har helbredsproblemer.</p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-200 transition-colors">Se alle spørgsmål og svar</a>
        </div>
      </div>
    </div>
  );
}

// Newsletter signup
function Newsletter() {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Tilmeld dig vores nyhedsbrev</h2>
          <p className="text-gray-600 mb-6">Få de seneste nyheder, events og opdateringer direkte i din indbakke</p>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Din e-mail" 
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Tilmeld
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">Vi respekterer dit privatliv og deler ikke dine oplysninger med tredjeparter.</p>
        </div>
      </div>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={dsfLogo} alt="DSF Logo" className="h-16 mb-4" />
            <p className="text-gray-400 mb-4">Dansk Sportsdykker Forbund - Stedet for alle former for undervandsaktiviteter i Danmark.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 text-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Idrættens Hus, Brøndby Stadion 20, 2605 Brøndby</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 text-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+45 62 65 61 30</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 text-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>dsf@sportsdykning.dk</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Hurtige links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Nyheder</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Uddannelse</a></li>
              <li><a href="#" className="hover:text-white">Find lokal klub</a></li>
              <li><a href="#" className="hover:text-white">Bliv medlem</a></li>
              <li><a href="#" className="hover:text-white">Webshop</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Om DSF</a></li>
              <li><a href="#" className="hover:text-white">Bestyrelsen</a></li>
              <li><a href="#" className="hover:text-white">Privatlivspolitik</a></li>
              <li><a href="#" className="hover:text-white">Ofte stillede spørgsmål</a></li>
              <li><a href="#" className="hover:text-white">Medlemsfordele</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-sm text-gray-500 text-center">© 2025 Dansk Sportsdykker Forbund. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureCards />
      <UpcomingEvents />
      <LatestNews />
      <Membership />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
