import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getThemeColors } from "../../utils/federationThemes";

// Define types for feature card items
interface FeatureCard {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkUrl: string;
}

// Define props interface
interface FeatureCardsProps {
  federation?: string;
  cards?: FeatureCard[];
}

// Sample feature cards data for each federation
const federationCards = {
  diving: [
    {
      id: "1",
      title: "Uddannelse",
      description: "Udforsk vores spændende uddannelser og kurser for dykkere på alle niveauer.",
      imageUrl:
        "https://images.unsplash.com/photo-1581771085083-2353cf475ff5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkText: "Læs mere",
      linkUrl: "/diving/uddannelse",
    },
    {
      id: "2",
      title: "Spøgelsesnet",
      description: "Vær med til at bekæmpe havforurening ved at indrapportere og fjerne efterladte fiskenet.",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      linkText: "Indrapportér",
      linkUrl: "/diving/havmiljo/spogelsesnet",
    },
    {
      id: "3",
      title: "Discipliner",
      description: "Oplev mangfoldigheden i dykning - fra UV-jagt til fridykning og undervandsrugby.",
      imageUrl: "https://images.unsplash.com/photo-1599137248983-e6061c27ec80",
      linkText: "Udforsk",
      linkUrl: "/diving/discipliner",
    },
  ],
  icehockey: [
    {
      id: "1",
      title: "VM 2025",
      description:
        "Danmark er vært for VM i ishockey 2025 sammen med Sverige. Køb billetter og oplev verdens bedste i aktion.",
      imageUrl: "https://via.placeholder.com/800x600?text=VM+2025",
      linkText: "Se mere",
      linkUrl: "/icehockey/vm-2025",
    },
    {
      id: "2",
      title: "Landshold",
      description: "Følg de danske landshold på deres vej mod internationale succeser og se kommende landskampe.",
      imageUrl: "https://via.placeholder.com/800x600?text=Landshold",
      linkText: "Læs mere",
      linkUrl: "/icehockey/landshold",
    },
    {
      id: "3",
      title: "Ny til ishockey",
      description:
        "Vil du prøve kræfter med ishockey? Find en klub nær dig og kom i gang med Danmarks hurtigste sport.",
      imageUrl: "https://via.placeholder.com/800x600?text=Ny+til+ishockey",
      linkText: "Find en klub",
      linkUrl: "/icehockey/ny-til-ishockey",
    },
  ],
  // Add more federations as needed
};

function FeatureCards({ federation = "diving", cards }: FeatureCardsProps) {
  // Get theme colors for the federation
  const themeColors = useMemo(() => getThemeColors(federation), [federation]);

  // Use provided cards or get default ones for the federation
  const featureCards = useMemo(() => {
    if (cards && cards.length > 0) {
      return cards;
    }

    return federationCards[federation as keyof typeof federationCards] || federationCards.diving;
  }, [federation, cards]);

  // Generate link color based on federation theme
  const linkColor = useMemo(() => {
    if (federation === "diving") return "text-cyan-600 hover:text-cyan-700";
    if (federation === "icehockey") return "text-red-600 hover:text-red-700";
    return "text-cyan-600 hover:text-cyan-700"; // Default
  }, [federation]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${card.imageUrl}')` }}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <Link to={card.linkUrl} className={`${linkColor} font-medium`}>
                {card.linkText} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;
