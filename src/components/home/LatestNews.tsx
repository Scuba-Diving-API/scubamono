import { useMemo } from "react";
import { Link } from "react-router-dom";

// Define types for news items
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  link: string;
}

// Define props interface
interface LatestNewsProps {
  federation?: string;
  title?: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllText?: string;
  newsItems?: NewsItem[];
  limit?: number;
}

// Sample news data for each federation
const federationNews = {
  diving: [
    {
      id: "1",
      title: "Repræsentantskabsmøde 2025",
      excerpt: "Husk at årets repræsentantskabsmøde afholdes den 26. april i Odense.",
      date: "28. mar 2025",
      category: "Organisation",
      imageUrl:
        "https://images.unsplash.com/photo-1558328592-c073a4b95365?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/diving/nyheder/1",
    },
    {
      id: "2",
      title: "Vær med til at plante ålegræs",
      excerpt: "Det Store Ålegræsinitiativ leder efter snorkeldykkere til et unikt projekt.",
      date: "7. mar 2025",
      category: "Havmiljø",
      imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
      link: "/diving/nyheder/2",
    },
    {
      id: "3",
      title: "DM i UV-foto 2025",
      excerpt: "Sæt kryds i kalenderen den 14. juni 2025 for Danmarksmesterskabet i undervandsfoto.",
      date: "13. mar 2025",
      category: "UV Foto",
      imageUrl: "https://images.unsplash.com/photo-1580019542155-247062e19ce4",
      link: "/diving/nyheder/3",
    },
  ],
  icehockey: [
    {
      id: "1",
      title: "Rekordstore officielle fanzoner til Ishockey VM 2025",
      excerpt: "Efterhånden som VM i ishockey 2025 nærmer sig, stiger spændingen i både Sverige og Danmark.",
      date: "24. apr 2025",
      category: "VM 2025",
      imageUrl: "https://via.placeholder.com/800x600?text=Fanzone+VM+2025",
      link: "/icehockey/nyheder/1",
    },
    {
      id: "2",
      title: "U18-LANDSHOLDET udtaget til VM i Ungarn",
      excerpt: "Landstræner Flemming Green og staben har udtaget U18-landsholdet til det kommende VM i Ungarn.",
      date: "16. apr 2025",
      category: "Landshold",
      imageUrl: "https://via.placeholder.com/800x600?text=U18+Landshold",
      link: "/icehockey/nyheder/2",
    },
    {
      id: "3",
      title: "UGGERHØJ BILER tager endnu en køretur som VM-partner",
      excerpt: "Den stærke bilforhandler-virksomhed bliver Officiel Partner for Ishockey VM 2025.",
      date: "15. apr 2025",
      category: "VM 2025",
      imageUrl: "https://via.placeholder.com/800x600?text=Uggerhøj+Biler",
      link: "/icehockey/nyheder/3",
    },
  ],
  // Add more federations as needed
};

function LatestNews({
  federation = "diving",
  title = "Seneste nyt",
  subtitle = "Hold dig opdateret med de seneste begivenheder og nyheder",
  viewAllLink,
  viewAllText = "Se alle nyheder",
  newsItems,
  limit = 3,
}: LatestNewsProps) {
  // Use provided news items or get default ones for the federation
  const items = useMemo(() => {
    if (newsItems && newsItems.length > 0) {
      return newsItems.slice(0, limit);
    }

    const defaultNews = federationNews[federation as keyof typeof federationNews] || federationNews.diving;
    return defaultNews.slice(0, limit);
  }, [federation, newsItems, limit]);

  // Determine the view all link based on federation
  const allNewsLink = viewAllLink || `/${federation}/nyheder`;

  // Generate accent color for category badges based on federation theme
  const accentColor = useMemo(() => {
    if (federation === "diving") return "text-blue-700";
    if (federation === "icehockey") return "text-red-700";
    return "text-blue-700"; // Default
  }, [federation]);

  // Generate link color based on federation theme
  const linkColor = useMemo(() => {
    if (federation === "diving") return "text-cyan-600 hover:text-cyan-700";
    if (federation === "icehockey") return "text-red-600 hover:text-red-700";
    return "text-cyan-600 hover:text-cyan-700"; // Default
  }, [federation]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <Link to={allNewsLink} className={`${linkColor} font-medium mt-4 md:mt-0`}>
          {viewAllText} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${item.imageUrl}')` }}></div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-xs text-gray-500">{item.date}</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className={`text-xs ${accentColor} font-medium`}>{item.category}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Link to={item.link} className={`${linkColor} font-medium`}>
                Læs mere →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
