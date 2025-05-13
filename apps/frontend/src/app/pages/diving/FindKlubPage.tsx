import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define club type
interface Club {
  id: number;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  website?: string;
  email?: string;
  phone?: string;
  position: [number, number]; // [latitude, longitude]
}

// Mock data for clubs
const mockClubs: Club[] = [
  {
    id: 1,
    name: 'København Sportsdykkerklub',
    address: 'Amager Strandvej 301',
    city: 'København',
    postalCode: '2300',
    website: 'https://www.sportsdykkerklub.dk',
    email: 'info@sportsdykkerklub.dk',
    phone: '45 12 34 56 78',
    position: [55.6638, 12.6046],
  },
  {
    id: 2,
    name: 'Århus Dykkerklub',
    address: 'Havnegade 12',
    city: 'Århus',
    postalCode: '8000',
    website: 'https://www.aarhusdykkerklub.dk',
    email: 'kontakt@aarhusdykkerklub.dk',
    phone: '45 23 45 67 89',
    position: [56.1572, 10.2107],
  },
  {
    id: 3,
    name: 'Odense Sportsdykkerklub',
    address: 'Havnegade 15',
    city: 'Odense',
    postalCode: '5000',
    website: 'https://www.odensedykkerklub.dk',
    email: 'info@odensedykkerklub.dk',
    phone: '45 34 56 78 90',
    position: [55.4038, 10.4024],
  },
  {
    id: 4,
    name: 'Aalborg Dykkerklub',
    address: 'Søndergade 23',
    city: 'Aalborg',
    postalCode: '9000',
    website: 'https://www.aalborgdykkerklub.dk',
    email: 'kontakt@aalborgdykkerklub.dk',
    phone: '45 45 67 89 01',
    position: [57.0488, 9.9217],
  },
  {
    id: 5,
    name: 'Roskilde Sportsdykkerklub',
    address: 'Havnevej 43',
    city: 'Roskilde',
    postalCode: '4000',
    website: 'https://www.roskildesportsdykker.dk',
    email: 'info@roskildesportsdykker.dk',
    phone: '45 56 78 90 12',
    position: [55.6428, 12.0801],
  },
];

const FindKlubPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(mockClubs);
  const [mapCenter, setMapCenter] = useState<[number, number]>([56, 11]); // Center of Denmark
  const [mapZoom, setMapZoom] = useState(7);

  // We'll use the DefaultIcon that gets applied to all markers by our leafletIcons utility

  useEffect(() => {
    if (searchTerm) {
      const filtered = mockClubs.filter(
        (club) =>
          club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          club.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          club.postalCode.includes(searchTerm)
      );
      setFilteredClubs(filtered);

      // If there's only one club, center the map on it
      if (filtered.length === 1) {
        setMapCenter(filtered[0].position);
        setMapZoom(12);
      } else if (filtered.length > 0) {
        setMapZoom(7); // Reset zoom if multiple results
      }
    } else {
      setFilteredClubs(mockClubs);
      setMapCenter([56, 11]); // Reset to center of Denmark
      setMapZoom(7); // Reset zoom
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#0d2d52] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1601464449516-228b0d6afea7"
            alt="Underwater diving"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find en Dykkerklub
          </h1>
          <p className="text-xl max-w-3xl">
            Find en lokal dykkerklub og bliv en del af et aktivt fællesskab af
            dykkere. Dansk Sportsdykker Forbund har klubber i hele landet.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">
            Søg efter en dykkerklub
          </h2>
          <p className="mb-6">
            Søg efter dykkerklubber i dit område ved at skrive et bynavn,
            postnummer eller klubnavn herunder. Klik på en markør på kortet for
            at se mere information om klubben.
          </p>
          <div className="w-full mb-4">
            <input
              type="text"
              placeholder="Søg efter by, postnummer eller klubnavn..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#57b5eb] focus:border-[#57b5eb]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map Container - Takes 3/5 of the width on large screens */}
          <div className="lg:col-span-3 h-[600px] rounded-lg overflow-hidden shadow-md relative z-10">
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              style={{ height: '100%', width: '100%' }}
              className="z-20"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredClubs.map((club) => (
                <Marker key={club.id} position={club.position}>
                  <Popup>
                    <div className="font-sans">
                      <h3 className="font-bold text-base mb-1">{club.name}</h3>
                      <p className="text-sm mb-1">{club.address}</p>
                      <p className="text-sm mb-2">
                        {club.postalCode} {club.city}
                      </p>
                      {club.phone && (
                        <p className="text-sm">Tlf: {club.phone}</p>
                      )}
                      {club.email && (
                        <p className="text-sm">Email: {club.email}</p>
                      )}
                      {club.website && (
                        <p className="text-sm mt-1">
                          <a
                            href={club.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#57b5eb] hover:underline"
                          >
                            Besøg hjemmeside
                          </a>
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Club List - Takes 2/5 of the width on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0d2d52]">
                Dykkerklubber{' '}
                {searchTerm ? `- Søgeresultater (${filteredClubs.length})` : ''}
              </h3>

              {filteredClubs.length === 0 ? (
                <p className="text-gray-500">
                  Ingen klubber matchede din søgning. Prøv med et andet søgeord.
                </p>
              ) : (
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {filteredClubs.map((club) => (
                    <div
                      key={club.id}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <h4 className="font-bold text-[#0d2d52]">{club.name}</h4>
                      <p className="text-sm text-gray-600">{club.address}</p>
                      <p className="text-sm text-gray-600">
                        {club.postalCode} {club.city}
                      </p>
                      <div className="mt-2">
                        {club.phone && (
                          <p className="text-sm">
                            <span className="font-medium">Tlf:</span>{' '}
                            {club.phone}
                          </p>
                        )}
                        {club.email && (
                          <p className="text-sm">
                            <span className="font-medium">Email:</span>{' '}
                            {club.email}
                          </p>
                        )}
                        {club.website && (
                          <a
                            href={club.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-block text-sm text-[#57b5eb] hover:underline"
                          >
                            Besøg hjemmeside →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Join Club CTA */}
      <div className="container mx-auto px-4 py-8 mb-12">
        <div className="bg-[#0d2d52] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Bliv en del af fællesskabet
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Som medlem af en klub under Dansk Sportsdykker Forbund får du adgang
            til kurser, arrangementer, og et stærkt netværk af dykkere i hele
            landet.
          </p>
          <a
            href="/diving/uddannelse"
            className="bg-[#57b5eb] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Læs mere om medlemsfordele
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindKlubPage;
