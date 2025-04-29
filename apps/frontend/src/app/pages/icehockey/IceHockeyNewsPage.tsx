import React from "react";
import { Link } from "react-router-dom";

// News item type
interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category?: string;
}

// Sample news data based on the current ice hockey website
const allNews: NewsItem[] = [
  {
    id: "1",
    title: "Rekordstore officielle fanzoner til Ishockey VM 2025 i Danmark og Sverige",
    date: "24.04.2025",
    category: "VM 2025",
    excerpt:
      "Efterhånden som VM i ishockey 2025 nærmer sig, stiger spændingen i både Sverige og Danmark. Forberedelserne er i fuld gang i begge lande — og herunder planerne for det største officielle fanområde i historien.",
    imageUrl: "https://via.placeholder.com/400x250?text=Fanzone+VM+2025",
  },
  {
    id: "2",
    title: "U18-LANDSHOLDET udtaget til VM i Ungarn",
    date: "16.04.2025",
    category: "Landshold",
    excerpt:
      "Landstræner Flemming Green og staben har udtaget U18-landsholdet til det kommende VM i Ungarn, der begynder 20. april med en kamp mod Østrig.",
    imageUrl: "https://via.placeholder.com/400x250?text=U18+Landshold",
  },
  {
    id: "3",
    title: "UGGERHØJ BILER tager endnu en køretur som VM-partner",
    date: "15.04.2025",
    category: "VM 2025",
    excerpt:
      "Den stærke bilforhandler-virksomhed bliver Officiel Partner for Ishockey VM 2025. Siger man ishockey i Danmark, siger man også Uggerhøj Biler.",
    imageUrl: "https://via.placeholder.com/400x250?text=Uggerhøj+Biler",
  },
  {
    id: "4",
    title: "DIU afholder Metal Development Camp i uge 31",
    date: "11.04.2025",
    category: "Udvikling",
    excerpt:
      "Igen i år inviteres U16, U17, U18 og U20 til opstartscamp i Herning. For at realisere samlingen vil der i år være egenbetaling på campen for U16, U17 og U18.",
    imageUrl: "https://via.placeholder.com/400x250?text=Development+Camp",
  },
  {
    id: "5",
    title: "TEMPUR bliver den næste Ishockey VM 2025-partner",
    date: "10.04.2025",
    category: "VM 2025",
    excerpt:
      "Organisationen bag Ishockey VM er stolt over at kunne præsentere endnu en partner til Ishockey VM 2025. TEMPUR er den næste officielle partner for VM, der begynder 9. maj i Herning.",
    imageUrl: "https://via.placeholder.com/400x250?text=TEMPUR+Partner",
  },
  {
    id: "6",
    title: "Avicii hyldes når 'Levels' bliver den officielle VM-sang for 2025 IIHF Ishockey VM",
    date: "09.04.2025",
    category: "VM 2025",
    excerpt:
      "Når 2025 IIHF Ishockey VM begynder i Stockholm og Herning den 9. maj, sker det med en historisk åbningsceremoni akkompagneret af et ikonisk superhit.",
    imageUrl: "https://via.placeholder.com/400x250?text=Avicii+VM+Sang",
  },
  {
    id: "7",
    title: "U20-landsholdet på træningslejr i Sverige",
    date: "08.04.2025",
    category: "Landshold",
    excerpt:
      "Det danske U20-landshold drager på træningslejr i Sverige for at forberede sig til den kommende sæson med træningskampe mod svenske klubber.",
    imageUrl: "https://via.placeholder.com/400x250?text=U20+Landshold",
  },
  {
    id: "8",
    title: "Landsholdets træningsprogram offentliggjort forud for VM 2025",
    date: "05.04.2025",
    category: "Landshold",
    excerpt:
      "Det danske A-landshold har et intenst program med flere testkampe mod stærke nationer inden VM på hjemmebane i maj 2025.",
    imageUrl: "https://via.placeholder.com/400x250?text=Landsholdets+Træningsprogram",
  },
];

// Categories for filtering
const categories = ["Alle", "VM 2025", "Landshold", "Udvikling", "Turnering"];

function IceHockeyNewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("Alle");

  // Filter news based on selected category
  const filteredNews =
    selectedCategory === "Alle" ? allNews : allNews.filter((news) => news.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Nyheder</h1>
          <p className="text-lg text-gray-600 mt-2">Følg med i de seneste nyheder fra Danmarks Ishockey Union</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category ? "bg-red-700 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img src={news.imageUrl} alt={news.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-700 text-sm font-semibold">{news.date}</span>
                  {news.category && (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{news.category}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                <p className="text-gray-700 mb-4">{news.excerpt}</p>
                <Link
                  to={`/icehockey/nyheder/${news.id}`}
                  className="bg-red-700 text-white px-4 py-2 rounded-md font-medium hover:bg-red-800 transition-colors inline-block"
                >
                  Læs mere
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled
            >
              Forrige
            </button>
            <button className="px-4 py-2 bg-red-700 text-white rounded">1</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">2</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Næste</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IceHockeyNewsPage;
