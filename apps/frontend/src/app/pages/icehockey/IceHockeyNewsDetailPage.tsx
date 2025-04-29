import React from "react";
import { Link, useParams } from "react-router-dom";

// News item type
interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category?: string;
}

// Sample news data with full content
const newsData: { [key: string]: NewsItem } = {
  "1": {
    id: "1",
    title: "Rekordstore officielle fanzoner til Ishockey VM 2025 i Danmark og Sverige",
    date: "24.04.2025",
    category: "VM 2025",
    excerpt:
      "Efterhånden som VM i ishockey 2025 nærmer sig, stiger spændingen i både Sverige og Danmark. Forberedelserne er i fuld gang i begge lande — og herunder planerne for det største officielle fanområde i historien.",
    content: `<p>Efterhånden som VM i ishockey 2025 nærmer sig, stiger spændingen i både Sverige og Danmark. Forberedelserne er i fuld gang i begge lande — og herunder planerne for det største officielle fanområde i historien for VM i ishockey.</p>
    
    <p>Organisationen bag årets VM har netop offentliggjort planerne for de kommende VM-fanzoner i Stockholm og Herning, som bliver de største i ishockey-VM-historien og kommer til at byde på et hav af oplevelser og underholdning – både for ishockeyfans og andre nysgerrige besøgende.</p>
    
    <p>De to fanzoner kommer til at understøtte VM-kampene i Avicii Arena i Stockholm og Jyske Bank Boxen i Herning, hvor 56 kampe skal afvikles i løbet af 17 dage fra 9. til 25. maj 2025.</p>
    
    <p>Og samtidig skal de to områder sikre, at endnu flere får mulighed for at blive en del af VM-festen — også dem, der ikke har billet til selve kampene i de to arenaer.</p>
    
    <h3>UNIK FANZONE MED FANWALK I HERNING</h3>
    
    <p>I Herning bliver der en unik fanzone rundt om Jyske Bank Boxen på næsten 22.000 kvadratmeter, der kan rumme op til 5.000 mennesker. Der bliver desuden etableret en helt unik "fanwalk", som bliver en strækning på ca. 1,5 km fra banegården i Herning til Jyske Bank Boxen.</p>
    
    <p>Langs denne fanwalk-rute bliver der rig mulighed for at få adgang til mad og drikke i forskellige versioner — også danske specialiteter. Ja — og så kommer der of course til at være masser af øl til hånde, nok i særdeleshed Carsberg, men det siger sig selv, når Danmark er vært for VM i ishockey.</p>`,
    imageUrl: "https://via.placeholder.com/800x450?text=Fanzone+VM+2025",
  },
  "2": {
    id: "2",
    title: "U18-LANDSHOLDET udtaget til VM i Ungarn",
    date: "16.04.2025",
    category: "Landshold",
    excerpt:
      "Landstræner Flemming Green og staben har udtaget U18-landsholdet til det kommende VM i Ungarn, der begynder 20. april med en kamp mod Østrig.",
    content: `<p>Landstræner Flemming Green og staben har udtaget U18-landsholdet til det kommende VM i Ungarn, der begynder 20. april med en kamp mod Østrig.</p>
    
    <p>Truppen ser ud som følger:</p>
    
    <table class="border-collapse border border-gray-300 w-full my-4">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-2">Navn</th>
          <th class="border border-gray-300 p-2">Fødselsdato</th>
          <th class="border border-gray-300 p-2">Alder</th>
          <th class="border border-gray-300 p-2">Klub</th>
          <th class="border border-gray-300 p-2">Højde</th>
          <th class="border border-gray-300 p-2">Shoots</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-2">Albert Grossmann</td>
          <td class="border border-gray-300 p-2">10-05-2007</td>
          <td class="border border-gray-300 p-2">17</td>
          <td class="border border-gray-300 p-2">Vojens Ishockey Klub/SønderjyskE</td>
          <td class="border border-gray-300 p-2">198</td>
          <td class="border border-gray-300 p-2">R</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-2">Andreas Kløve Mogensen</td>
          <td class="border border-gray-300 p-2">09-07-2008</td>
          <td class="border border-gray-300 p-2">16</td>
          <td class="border border-gray-300 p-2">Vojens Ishockey Klub/SønderjyskE</td>
          <td class="border border-gray-300 p-2">179</td>
          <td class="border border-gray-300 p-2">L</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">Anton Emil Olsen</td>
          <td class="border border-gray-300 p-2">22-01-2007</td>
          <td class="border border-gray-300 p-2">18</td>
          <td class="border border-gray-300 p-2">Rungsted IK</td>
          <td class="border border-gray-300 p-2">180</td>
          <td class="border border-gray-300 p-2">L</td>
        </tr>
      </tbody>
    </table>
    
    <p>Turneringen afholdes i Ungarn fra 20. - 26. april.</p>
    
    <p>U18-landsholdet spiller følgende kampe:</p>
    
    <ul class="list-disc pl-5 my-4">
      <li>Lørdag d. 20. april kl. 16.30: Danmark - Østrig</li>
      <li>Søndag d. 21. april kl. 20.00: Frankrig - Danmark</li>
      <li>Tirsdag d. 23. april kl. 16.30: Danmark - Ungarn</li>
      <li>Onsdag d. 24. april kl. 20.00: Danmark - Japan</li>
    </ul>
    
    <p>Herefter vil der fra fredag d. 26. april blive spillet placeringskampe.</p>`,
    imageUrl: "https://via.placeholder.com/800x450?text=U18+Landshold",
  },
  "3": {
    id: "3",
    title: "UGGERHØJ BILER tager endnu en køretur som VM-partner",
    date: "15.04.2025",
    category: "VM 2025",
    excerpt:
      "Den stærke bilforhandler-virksomhed bliver Officiel Partner for Ishockey VM 2025. Siger man ishockey i Danmark, siger man også Uggerhøj Biler.",
    content: `<p>Den stærke bilforhandler-virksomhed bliver Officiel Partner for Ishockey VM 2025.</p>
    
    <p>Siger man ishockey i Danmark, siger man også Uggerhøj Biler. Den stærke bilforhandler, der har rødder i Frederikshavn og startede sin virksomhed helt tilbage i 1954, har altid været en medspiller i dansk ishockey. Også ved VM 2018 i Herning.</p>
    
    <p>Derfor er det med stor glæde, at der nu kan sættes hak ved endnu en sponsor til næste års VM i ishockey, der finder sted i Herning og Stockholm. Uggerhøj Biler bliver officiel partner for den store begivenhed, der begynder 9. maj 2025.</p>
    
    <p>"For os har det altid været en helt naturlig ting at være en del af ishockey i Danmark. Vi har fulgt og spillet med på den her bane i mange år, og da der så blev mulighed for at være med ved et VM på hjemmebane igen, så skulle vi naturligvis også være med. Vi var jo også partner i 2018, hvor det blev en stor succes for alle," siger Uggerhøjs marketingdirektør Flemming Jensen.</p>
    
    <p>Uggerhøj er en af Danmarks førende bilforhandlere, der med 13 forskellige adresser i store dele af Jylland og på Fyn – og med en stærk online tilstedeværelse – har et godt tag i de danske bilkøbere.</p>`,
    imageUrl: "https://via.placeholder.com/800x450?text=Uggerhøj+Biler",
  },
};

// Related news for the sidebar
const relatedNews = [
  {
    id: "5",
    title: "TEMPUR bliver den næste Ishockey VM 2025-partner",
    date: "10.04.2025",
    imageUrl: "https://via.placeholder.com/100x60?text=TEMPUR",
  },
  {
    id: "6",
    title: "Avicii hyldes når 'Levels' bliver den officielle VM-sang for 2025 IIHF Ishockey VM",
    date: "09.04.2025",
    imageUrl: "https://via.placeholder.com/100x60?text=Avicii",
  },
  {
    id: "8",
    title: "Landsholdets træningsprogram offentliggjort forud for VM 2025",
    date: "05.04.2025",
    imageUrl: "https://via.placeholder.com/100x60?text=Landshold",
  },
];

function IceHockeyNewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const article = id ? newsData[id] : null;

  // If article doesn't exist, show a not found message
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Artikel ikke fundet</h1>
        <p className="mb-4">Den søgte nyhed kunne ikke findes.</p>
        <Link to="/icehockey/nyheder" className="text-red-700 hover:underline">
          ← Tilbage til nyhedsoversigten
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <nav className="text-gray-500 text-sm">
            <Link to="/icehockey" className="hover:text-red-700">
              Forside
            </Link>
            <span className="mx-2">/</span>
            <Link to="/icehockey/nyheder" className="hover:text-red-700">
              Nyheder
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Article Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{article.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{article.date}</span>
                {article.category && (
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">{article.category}</span>
                )}
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img src={article.imageUrl} alt={article.title} className="w-full h-auto rounded-lg shadow-md" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Share Buttons */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-gray-900 font-semibold mb-3">Del denne artikel</h4>
              <div className="flex gap-3">
                <button className="p-2 bg-blue-600 text-white rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
                <button className="p-2 bg-blue-400 text-white rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="p-2 bg-green-600 text-white rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Relaterede nyheder</h3>
              <div className="space-y-4">
                {relatedNews.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.imageUrl} alt={item.title} className="w-20 h-12 object-cover rounded" />
                    <div>
                      <span className="text-xs text-gray-600">{item.date}</span>
                      <h4 className="text-sm font-medium">
                        <Link to={`/icehockey/nyheder/${item.id}`} className="hover:text-red-700">
                          {item.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Kategorier</h3>
                <div className="space-y-2">
                  <Link to="/icehockey/nyheder?category=VM 2025" className="block text-gray-700 hover:text-red-700">
                    VM 2025
                  </Link>
                  <Link to="/icehockey/nyheder?category=Landshold" className="block text-gray-700 hover:text-red-700">
                    Landshold
                  </Link>
                  <Link to="/icehockey/nyheder?category=Udvikling" className="block text-gray-700 hover:text-red-700">
                    Udvikling
                  </Link>
                  <Link to="/icehockey/nyheder?category=Turnering" className="block text-gray-700 hover:text-red-700">
                    Turnering
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IceHockeyNewsDetailPage;
