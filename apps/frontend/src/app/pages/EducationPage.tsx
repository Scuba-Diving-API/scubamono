import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Mock education courses with certifications
const educationCourses = [
  {
    id: 1,
    title: 'CMAS * En-stjernet dykker',
    level: 'Begynder',
    duration: '4-6 uger',
    description:
      'Grundlæggende kursus for nye dykkere. Lær de fundamentale teknikker og sikkerhedsprocedurer for dykning ned til 20 meter.',
    image: 'https://images.unsplash.com/photo-1601731708265-f4a1df3d41fc',
  },
  {
    id: 2,
    title: 'CMAS ** To-stjernet dykker',
    level: 'Øvet',
    duration: '6-8 uger',
    description:
      'For dykkere med erfaring. Udvid dine færdigheder og lær om natdykning, dybere dyk og undervandsorientering.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
  },
  {
    id: 3,
    title: 'CMAS *** Tre-stjernet dykker',
    level: 'Avanceret',
    duration: '8-10 uger',
    description:
      'Avanceret dykkercertifikat. Bliv forberedt på dybere dyk, krævende forhold og lederroller ved dykkerudflugter.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
  },
  {
    id: 4,
    title: 'Nitrox Specialty',
    level: 'Specialitet',
    duration: '2-3 dage',
    description:
      'Lær at dykke med iltberiget luft (nitrox) for at øge din bundtid og reducere dekompressionstiden.',
    image: 'https://images.unsplash.com/photo-1682687982502-cbcc53dc3502',
  },
  {
    id: 5,
    title: 'CMAS * Instruktør',
    level: 'Instruktør',
    duration: '10-12 uger',
    description:
      'Første niveau af instruktøruddannelsen. Lær at undervise og certificere CMAS * dykkere under supervision.',
    image: 'https://images.unsplash.com/photo-1580019542155-247062e19ce4',
  },
  {
    id: 6,
    title: 'CMAS ** Instruktør',
    level: 'Instruktør',
    duration: '12-16 uger',
    description:
      'Andet niveau af instruktøruddannelsen. Bliv kvalificeret til selvstændigt at undervise og certificere CMAS * og ** dykkere.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
  },
];

function EducationPage() {
  const location = useLocation();

  // Handle scrolling when the component mounts or the location changes
  useEffect(() => {
    // Check for hash in the URL
    if (location.hash) {
      // Find the element to scroll to
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Wait a bit for the page to fully render before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d2d52] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1601731757212-2a0faf2fad34"
            alt="Diving instructor with student"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Uddannelse</h1>
          <p className="text-xl max-w-3xl">
            Hos Dansk Sportsdykker Forbund tilbyder vi et bredt udvalg af
            internationalt anerkendte dykkercertificeringer og specialkurser for
            alle niveauer.
          </p>
        </div>
      </div>

      {/* Education Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">
            CMAS Certifikater
          </h2>
          <p className="mb-4">
            Dansk Sportsdykker Forbund er den officielle repræsentant for CMAS
            (Confédération Mondiale des Activités Subaquatiques) i Danmark. CMAS
            er en international dykkercertificeringsorganisation, der er
            anerkendt over hele verden.
          </p>
          <p className="mb-4">
            Vores uddannelser følger CMAS' høje standarder og sikrer, at du får
            den bedste og mest sikre uddannelse som dykker. Alle vores
            instruktører er certificerede CMAS-instruktører med omfattende
            erfaring og viden.
          </p>
          <p>
            Uanset om du er nybegynder eller erfaren dykker, har vi kurser, der
            passer til dit niveau og dine ambitioner. Nedenfor finder du vores
            mest populære kurser.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {educationCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-[#b1d9f5] text-[#0d2d52] px-3 py-1 rounded-full font-medium">
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">
                    {course.duration}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-[#0d2d52]">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link
                  to={`/uddannelse/${course.id}`}
                  className="text-[#57b5eb] font-medium hover:text-[#0d2d52] transition-colors"
                >
                  Læs mere →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How to get started section */}
        <div
          id="hvordan-kommer-jeg-i-gang"
          className="bg-[#b1d9f5] rounded-lg p-8 mb-12 scroll-mt-20"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">
            Hvordan kommer jeg i gang?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#57b5eb] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0d2d52]">
                Find en klub
              </h3>
              <p className="text-gray-600">
                Det første skridt er at finde en dykkerklub i dit lokalområde.
                DSF har over 150 klubber fordelt over hele landet.
              </p>
              <Link
                to="/find-klub"
                className="block mt-4 text-[#57b5eb] font-medium hover:text-[#0d2d52] transition-colors"
              >
                Find din nærmeste klub →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#57b5eb] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0d2d52]">
                Bliv medlem
              </h3>
              <p className="text-gray-600">
                Når du har fundet en klub, skal du melde dig ind i klubben og
                dermed også i Dansk Sportsdykker Forbund.
              </p>
              <Link
                to="/bliv-medlem"
                className="block mt-4 text-[#57b5eb] font-medium hover:text-[#0d2d52] transition-colors"
              >
                Læs om medlemskab →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#57b5eb] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0d2d52]">
                Tag på kursus
              </h3>
              <p className="text-gray-600">
                Din klub vil hjælpe dig med at tilmelde dig det rette
                begynderkursus, så du kan starte din rejse som dykker.
              </p>
              <Link
                to="/uddannelse/1"
                className="block mt-4 text-[#57b5eb] font-medium hover:text-[#0d2d52] transition-colors"
              >
                Se begynderkurser →
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#0d2d52]">
            Ofte stillede spørgsmål
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-medium text-lg mb-2 text-[#0d2d52]">
                Hvor gamle skal man være for at begynde at dykke?
              </h3>
              <p className="text-gray-600">
                For at tage et CMAS * certifikat skal du være minimum 14 år. Dog
                tilbyder mange klubber snorkeldykning og juniorprogrammer for
                børn ned til 8 år.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-medium text-lg mb-2 text-[#0d2d52]">
                Skal jeg have eget udstyr?
              </h3>
              <p className="text-gray-600">
                Som begynder kan du typisk låne det meste udstyr i din klub. Det
                anbefales dog at investere i din egen maske, snorkel og finner
                relativt tidligt.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-medium text-lg mb-2 text-[#0d2d52]">
                Hvor lang tid tager et begynderkursus?
              </h3>
              <p className="text-gray-600">
                Et CMAS * kursus tager typisk 4-6 uger med undervisning 1-2
                gange om ugen, inklusiv teori og praktiske øvelser.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-medium text-lg mb-2 text-[#0d2d52]">
                Er min CMAS-certificering gyldig i udlandet?
              </h3>
              <p className="text-gray-600">
                Ja, CMAS-certificeringer er internationalt anerkendte og
                accepteres verden over af dykkercentre og dykkerskibe.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#0d2d52] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Klar til at begynde dit dykkereventyr?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Kontakt os eller find din nærmeste klub for at høre mere om, hvordan
            du kommer i gang med dykning gennem Dansk Sportsdykker Forbund.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/find-klub"
              className="bg-[#57b5eb] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Find nærmeste klub
            </Link>
            <Link
              to="/kontakt"
              className="bg-white text-[#0d2d52] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Kontakt os
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
