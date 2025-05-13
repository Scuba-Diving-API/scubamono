import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetEventsQuery } from '../../api/api';
import EventCard from '../components/events/EventCard';
import { EventData } from '../../types/types';

// Mock events data
const eventsData = [
  {
    id: 1,
    title: 'DM i UV-Rugby',
    date: '26-28 maj 2025',
    location: 'Odense Svømmehal',
    category: 'Konkurrence',
    description:
      'Danmarksmesterskab i undervands-rugby for både herre- og damehold.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
  },
  {
    id: 2,
    title: 'DM i Finnesvømning',
    date: '12-13 juni 2025',
    location: 'Bellahøj Svømmestadion, København',
    category: 'Konkurrence',
    description:
      'Kom og se Danmarks hurtigste finnesvømmere konkurrere om de prestigefyldte DM-titler.',
    image: 'https://images.unsplash.com/photo-1516672496673-61d77dc901ef',
  },
  {
    id: 3,
    title: 'Nordisk i UV-Foto',
    date: '3-4 juli 2025',
    location: 'Lillebælt, Middelfart',
    category: 'Konkurrence',
    description:
      'De bedste undervandsfotografer fra de nordiske lande mødes for at konkurrere om de smukkeste undervandsbilleder.',
    image: 'https://images.unsplash.com/photo-1580019542155-247062e19ce4',
  },
  {
    id: 4,
    title: 'Dykkerweekend på Bornholm',
    date: '15-17 juli 2025',
    location: 'Bornholm',
    category: 'Dykkertur',
    description:
      'Oplev de fantastiske dykkersteder omkring Bornholm sammen med andre entusiastiske dykkere.',
    image: 'https://images.unsplash.com/photo-1682687982502-cbcc53dc3502',
  },
  {
    id: 5,
    title: 'Fridykningskursus for begyndere',
    date: '25 juli 2025',
    location: 'Køge Bugt',
    category: 'Kursus',
    description:
      'Introduktion til fridykning for nybegyndere med fokus på teknik og sikkerhed.',
    image: 'https://images.unsplash.com/photo-1517686667428-2a1e7b5c5e9b',
  },
  {
    id: 6,
    title: 'Marinbiologisk workshop',
    date: '8-9 august 2025',
    location: 'Naturcenter Amager Strand, København',
    category: 'Workshop',
    description:
      'Lær om livet i de danske farvande og hvordan vi bedst beskytter vores havmiljø.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
  },
  {
    id: 7,
    title: 'Nordsjællands dykkerdag',
    date: '22 august 2025',
    location: 'Hornbæk',
    category: 'Dykkertur',
    description:
      'Fælles dykkerdag for klubber i Nordsjælland med guidede dyk og socialt samvær.',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c',
  },
  {
    id: 8,
    title: 'Instruktørseminar',
    date: '5-6 september 2025',
    location: 'Vingsted Hotel & Konferencecenter, Vejle',
    category: 'Seminar',
    description:
      'Årligt seminar for DSF-instruktører med fokus på nye teknikker og standarder.',
    image: 'https://images.unsplash.com/photo-1601731708265-f4a1df3d41fc',
  },
  {
    id: 9,
    title: 'Teknisk dykningsworkshop',
    date: '19-20 september 2025',
    location: 'Århus',
    category: 'Workshop',
    description:
      'Workshop for erfarne dykkere, der ønsker at udvikle deres tekniske dykkerfærdigheder.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
  },
];

function EventsPage() {
  const [filterCategory, setFilterCategory] = useState('Alle');

  const { data: eventsResponse, isLoading, isFetching } = useGetEventsQuery();

  // Filter events based on selected category
  /* const filteredEvents =
    filterCategory === 'Alle'
      ? eventsData
      : eventsData.filter((event) => event.category === filterCategory); */

  // Get unique categories
  const categories = [
    'Alle',
    ...new Set(eventsData.map((event) => event.category)),
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d2d52] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c"
            alt="Diving events"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-3xl">
            Oplev spændende events, konkurencer, kurser og fællesskab med Dansk
            Sportsdykker Forbund.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">
            Kommende events
          </h2>
          <p className="mb-4">
            Dansk Sportsdykker Forbund arrangerer og støtter en lang række
            events for både nybegyndere og erfarne dykkere. Fra konkurrencer og
            mesterskaber til kurser, foredrag og sociale begivenheder.
          </p>
          <p>
            Find dit næste undervandsarrangement herunder og bliv en del af det
            aktive fællesskab i danske dykkerkredse.
          </p>
        </div>

        {/* Featured Event */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5"
                alt="DM i UV-Rugby"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#57b5eb] text-white px-4 py-2 rounded-full">
                26-28 maj 2025
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <span className="inline-block bg-[#b1d9f5] text-[#0d2d52] px-3 py-1 rounded-full text-sm font-medium mb-4">
                Fremhævet event
              </span>
              <h2 className="text-2xl font-bold mb-2 text-[#0d2d52]">
                DM i UV-Rugby
              </h2>
              <p className="text-gray-500 mb-4">Odense Svømmehal</p>
              <p className="text-gray-600 mb-6">
                Danmarksmesterskab i undervands-rugby for både herre- og
                damehold. Oplev intens action, når de bedste hold fra hele
                landet dyster om DM-titlen i denne spændende undervandssport.
              </p>
              <p className="text-gray-600 mb-6">
                Der er fri entré for tilskuere, og der vil være mulighed for at
                møde spillerne og lære mere om sporten.
              </p>
              <Link
                to="/events/1"
                className="inline-block bg-[#57b5eb] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Læs mere og tilmeld
              </Link>
            </div>
          </div>
        </div>

        {/* Event Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-[#0d2d52]">
            Filtrer efter kategori:
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filterCategory === category
                    ? 'bg-[#0d2d52] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {isLoading || isFetching ? (
            <div className="col-span-3 text-center">
              <p className="text-gray-500">Indlæser events...</p>
            </div>
          ) : (
            eventsResponse &&
            eventsResponse.data.map((event: EventData) => (
              <EventCard
                key={event.id}
                id={event.id}
                type={event.type}
                startDate={event.startDate}
                endDate={event.endDate}
                subtitle={event.subtitle}
                title={event.title}
                // @ts-expect-error this will give an error but the image url is always there
                image={event.image.url}
              />
            ))
          )}
        </div>

        {/* Add to Calendar CTA */}
        <div className="bg-[#b1d9f5] rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">
              Få besked om kommende events
            </h2>
            <p className="mb-6 max-w-2xl mx-auto text-gray-700">
              Tilmeld dig vores nyhedsbrev for at få besked om kommende events,
              eller følg os på sociale medier for at holde dig opdateret.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/nyhedsbrev"
                className="bg-[#0d2d52] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Tilmeld nyhedsbrev
              </Link>
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-[#0d2d52] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-[#0d2d52] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Submit Event CTA */}
        <div className="bg-[#0d2d52] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Har din klub et event?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Er du arrangør af et dykker-relateret event, som du gerne vil have
            med på vores eventskalender? Kontakt os med alle relevante
            oplysninger.
          </p>
          <Link
            to="/kontakt"
            className="bg-[#57b5eb] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Kontakt os
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
