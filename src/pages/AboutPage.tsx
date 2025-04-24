import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d2d52] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1580019542155-247062e19ce4" alt="Underwater diving" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Om DSF</h1>
          <p className="text-xl max-w-3xl">Dansk Sportsdykker Forbund er Danmarks officielle forbund for undervandsaktiviteter og repræsenterer ca. 8.000 sportsdykkere i 160 klubber.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">Vores mission</h2>
          <p className="mb-4">
            Dansk Sportsdykker Forbund arbejder for at fremme alle former for undervandsaktiviteter i Danmark. Vi repræsenterer sportsdykkere over for myndigheder og internationale organisationer og arbejder for at sikre gode forhold for dykning i
            danske farvande.
          </p>
          <p>Vi tilbyder uddannelse, sikkerhedskurser, konkurrencer og eventos inden for alle undervandsdiscipliner, og vi arbejder aktivt for at beskytte havmiljøet og kulturarven under vandet.</p>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">Vores historie</h2>
            <p className="mb-4">Dansk Sportsdykker Forbund blev grundlagt i 1965 af en gruppe entusiastiske dykkere, der ønskede at skabe en fælles organisation for alle undervandssportsgrene i Danmark.</p>
            <p className="mb-4">Siden da har vi vokset os til et forbund med ca. 8.000 medlemmer fordelt på omkring 160 klubber over hele landet, og vi er i dag Danmarks officielle forbund for alle former for sportsdykning.</p>
            <p>Vi er også det danske medlem af CMAS (Confédération Mondiale des Activités Subaquatiques), den internationale organisation for undervandssport, og vi samarbejder tæt med andre nationale og internationale organisationer.</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1621351116312-b3168fa61af3" alt="Diving history" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Organization Structure */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">Organisation</h2>
          <p className="mb-8">Dansk Sportsdykker Forbund er organiseret med en bestyrelse, et repræsentantskab og en række udvalg, der hver især har ansvaret for forskellige områder af forbundets aktiviteter.</p>

          <h3 className="text-xl font-bold mb-3 text-[#0d2d52]">Bestyrelse</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Jesper Risløv", title: "Formand", image: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Gitte Alsing Møller", title: "Næstformand", image: "https://randomuser.me/api/portraits/women/68.jpg" },
              { name: "Carl E. Tronhjem", title: "Økonomiansvarlig", image: "https://randomuser.me/api/portraits/men/41.jpg" },
              { name: "Jens Næsted", title: "Bestyrelsesmedlem", image: "https://randomuser.me/api/portraits/men/53.jpg" },
              { name: "Pia Borneland", title: "Bestyrelsesmedlem", image: "https://randomuser.me/api/portraits/women/29.jpg" },
              { name: "Peter Dreier", title: "Bestyrelsesmedlem", image: "https://randomuser.me/api/portraits/men/65.jpg" },
            ].map((member, index) => (
              <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-bold">{member.name}</h4>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-3 text-[#0d2d52]">Udvalg</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {["Teknisk Udvalg", "UV-Rugbyudvalg", "UV-Jagtudvalg", "Finnesvømmerudvalg", "Fridykkerudvalg", "Foto-Videoudvalg", "Ungdomsudvalg", "Biologiudvalg", "Arkæologiudvalg", "Kommunikationsudvalg"].map((committee, index) => (
              <li key={index} className="flex items-center bg-gray-50 p-3 rounded">
                <svg className="w-5 h-5 text-[#57b5eb] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                {committee}
              </li>
            ))}
          </ul>

          <p>Hvert udvalg består af frivillige medlemmer med særlig ekspertise inden for deres område, og de arbejder for at udvikle og forbedre forholdene for deres respektive aktiviteter.</p>
        </div>

        {/* Partnerships Section */}
        <div className="bg-[#b1d9f5] p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#0d2d52]">Samarbejdspartnere</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "DIF", logo: "https://placehold.co/200x100/57b5eb/ffffff?text=DIF" },
              { name: "CMAS", logo: "https://placehold.co/200x100/57b5eb/ffffff?text=CMAS" },
              { name: "Team Danmark", logo: "https://placehold.co/200x100/57b5eb/ffffff?text=Team+Danmark" },
              { name: "Sport Event Denmark", logo: "https://placehold.co/200x100/57b5eb/ffffff?text=Sport+Event+DK" },
              { name: "Dansk Svømmeunion", logo: "https://placehold.co/200x100/57b5eb/ffffff?text=Dansk+Svømmeunion" },
              { name: "Søsportens Sikkerhedsråd", logo: "https://placehold.co/200x100/57b5eb/ffffff?text=Søsportens+Sikkerhedsråd" },
              { name: "By & Havn", logo: "https://placehold.co/200x100/57b5eb/ffffff?text=By+&+Havn" },
              { name: "Tryg Fonden", logo: "https://placehold.co/200x100/57b5eb/ffffff?text=Tryg+Fonden" },
            ].map((partner, index) => (
              <div key={index} className="flex justify-center items-center bg-white p-4 rounded shadow">
                <img src={partner.logo} alt={partner.name} className="max-w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Sikkerhed først",
              icon: (
                <svg className="w-12 h-12 text-[#57b5eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              ),
              text: "Vi prioriterer sikkerhed højest i alle vores aktiviteter og uddannelser, og vi arbejder konstant på at forbedre sikkerhedsrutiner og -udstyr.",
            },
            {
              title: "Respekt for miljøet",
              icon: (
                <svg className="w-12 h-12 text-[#57b5eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              ),
              text: "Vi arbejder for at beskytte havmiljøet og undervandsfaunaen, og vi opfordrer alle vores medlemmer til at vise respekt for naturen og kulturarven under vandet.",
            },
            {
              title: "Fællesskab",
              icon: (
                <svg className="w-12 h-12 text-[#57b5eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              ),
              text: "Vi tror på værdien af et stærkt fællesskab og samarbejde mellem alle dykkere og undervandssportsudøvere i Danmark, uanset niveau og disciplin.",
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#0d2d52]">{value.title}</h3>
              <p className="text-gray-600">{value.text}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#0d2d52]">Kontakt os</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Har du spørgsmål til Dansk Sportsdykker Forbund eller vores aktiviteter? Du er altid velkommen til at kontakte os.</p>
              <div className="mb-4">
                <h3 className="font-bold text-[#0d2d52]">Sekretariat</h3>
                <p>Idrættens Hus</p>
                <p>Brøndby Stadion 20</p>
                <p>2605 Brøndby</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-[#0d2d52]">Telefon</h3>
                <p>+45 43 26 25 60</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0d2d52]">Email</h3>
                <p>info@sportsdykning.dk</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#0d2d52]">Find os på sociale medier</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-[#0d2d52] text-white p-3 rounded-full hover:bg-[#57b5eb] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="bg-[#0d2d52] text-white p-3 rounded-full hover:bg-[#57b5eb] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="bg-[#0d2d52] text-white p-3 rounded-full hover:bg-[#57b5eb] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="bg-[#0d2d52] text-white p-3 rounded-full hover:bg-[#57b5eb] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-[#0d2d52] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Bliv en del af fællesskabet</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">Overvejer du at blive medlem af en dykkerklub? Find din lokale klub og bliv en del af et spændende og aktivt fællesskab af dykkere i alle aldre.</p>
          <Link to="/klubber" className="bg-[#57b5eb] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Find din lokale klub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
