import { useState } from 'react';
import { Link } from 'react-router-dom';

// Product interface for type safety
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isOnSale?: boolean;
}

// Mock product data based on the shop.sportsdykning.dk content
const products: Product[] = [
  {
    id: 1,
    name: "Sommerlejr (Norge og Sverige)",
    price: 2100,
    image: "https://images.unsplash.com/photo-1564652518878-669c5d59f8f0",
    category: "Ungdomsaktiviteter"
  },
  {
    id: 2,
    name: "Sommerlejr deltagergebyr",
    price: 1200,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    category: "Ungdomsaktiviteter"
  },
  {
    id: 3,
    name: "Dykkerlederhåndbogen",
    price: 199,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    category: "Uddannelses- og lærebøger",
    isOnSale: true
  },
  {
    id: 4,
    name: "Luft og Nitrox tabel",
    price: 145,
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14",
    category: "Tabeller"
  },
  {
    id: 5,
    name: "Avanceret Sportsdykning",
    price: 275,
    image: "https://images.unsplash.com/photo-1580019542155-247062e19ce4",
    category: "Uddannelses- og lærebøger"
  },
  {
    id: 6,
    name: "Certifikat CMAS *",
    price: 150,
    image: "https://images.unsplash.com/photo-1582650945938-6debef7561e9",
    category: "Certifikater"
  },
  {
    id: 7,
    name: "DSF Dykkermaske",
    price: 325,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    category: "DSF varer"
  },
  {
    id: 8,
    name: "CMAS Logbog",
    price: 120,
    image: "https://images.unsplash.com/photo-1586168878521-a614e769f36c",
    category: "Logbøger og -blade"
  },
  {
    id: 9,
    name: "DSF Signalflag",
    price: 280,
    image: "https://images.unsplash.com/photo-1627634432973-ce0e62e4c707",
    category: "Sikkerhedsudstyr og signalflag"
  }
];

// Categories extracted from the shop page
const categories = [
  "Accessories",
  "Certifikater",
  "DSF varer",
  "Logbøger og -blade",
  "Sikkerhedsudstyr og signalflag",
  "Tabeller",
  "Uddannelses- og lærebøger",
  "Ungdomsaktiviteter"
];

function WebshopPage() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter products based on search query and active category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? product.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Webshop Header */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">DSF Webshop</h1>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative w-64">
                <input 
                  type="text"
                  placeholder="Skriv søgeord"
                  className="w-full px-4 py-2 bg-white text-gray-800 rounded-full focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Shopping Cart */}
              <div className="relative">
                <button className="flex items-center space-x-1 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-medium">Kurv ({cartCount})</span>
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex space-x-6">
            <Link to="/webshop" className="hover:text-cyan-300 font-medium">Alle produkter</Link>
            <Link to="/webshop/min-konto" className="hover:text-cyan-300 font-medium">Min Konto</Link>
            <Link to="/webshop/handelsbetingelser" className="hover:text-cyan-300 font-medium">Handelsbetingelser</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with Categories */}
          <div className="md:w-1/4 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Kategorier</h2>
            <ul className="space-y-2">
              <li>
                <button 
                  className={`w-full text-left py-2 px-3 rounded-md transition-colors ${activeCategory === null ? 'bg-blue-900 text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveCategory(null)}
                >
                  Alle kategorier
                </button>
              </li>
              {categories.map((category, index) => (
                <li key={index}>
                  <button 
                    className={`w-full text-left py-2 px-3 rounded-md transition-colors ${activeCategory === category ? 'bg-blue-900 text-white' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content - Products */}
          <div className="md:w-3/4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {activeCategory ? `Produkter i ${activeCategory}` : 'Fremhævede produkter'}
            </h2>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Ingen produkter fundet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                      {product.isOnSale && (
                        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-3 py-1">
                          UDSALG
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-gray-500">{product.category}</span>
                      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                      <div className="mb-3">
                        {product.originalPrice ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400 line-through text-sm">{product.originalPrice.toFixed(2)} kr.</span>
                            <span className="text-red-500 font-bold">{product.price.toFixed(2)} kr.</span>
                          </div>
                        ) : (
                          <span className="font-bold">{product.price.toFixed(2)} kr.</span>
                        )}
                      </div>
                      <button 
                        onClick={addToCart}
                        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
                      >
                        Tilføj til kurv
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-900">KONTAKT</h3>
              <p className="text-gray-600">
                Dansk Sportsdykker Forening<br />
                Idrættens Hus · Brøndby Stadion 20<br />
                DK 2605 Brøndby<br />
                Tlf. 62 65 61 30<br />
                dsf@sportsdykning.dk
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-900">SPORTSDYKNING.DK</h3>
              <p className="text-gray-600">
                Besøg vores hovedhjemmeside for at finde flere informationer om Dansk Sportsdykker Forbund, dets aktiviteter og muligheder.
              </p>
              <a href="https://sportsdykning.dk" className="text-cyan-600 font-medium hover:text-cyan-700 mt-2 inline-block">
                Gå til sportsdykning.dk →
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-900">FIND OS PÅ FACEBOOK</h3>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-900">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                <a href="https://facebook.com/dansksportsdykkerforbund" className="text-blue-900 hover:underline">
                  Dansk Sportsdykker Forbund
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebshopPage;