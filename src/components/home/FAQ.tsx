import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getThemeColors } from "../../utils/federationThemes";

// Define types for FAQ items
interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

// Define props interface
interface FAQProps {
  federation?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  faqItems?: FAQItem[];
  limit?: number;
}

// Sample FAQ data for each federation
const federationFAQs = {
  diving: [
    {
      id: "1",
      question: "Hvordan kommer jeg i gang med at dykke?",
      answer:
        "Den bedste måde at komme i gang med dykning er at kontakte din lokale dykkerklub. Her kan du få information om begynderkurser og prøvedyk.",
    },
    {
      id: "2",
      question: "Hvad koster et medlemskab?",
      answer:
        "Medlemskabet varierer afhængigt af din lokale klub. Kontakt den nærmeste klub for at få information om deres kontingenter og medlemsfordele.",
    },
    {
      id: "3",
      question: "Hvad er CMAS-certificeringer?",
      answer:
        "CMAS er et internationalt anerkendt dykkercerificeringssystem. DSF tilbyder forskellige CMAS-kurser fra begynder til instruktørniveau.",
    },
    {
      id: "4",
      question: "Kan jeg dykke, hvis jeg har astma eller andre helbredsproblemer?",
      answer:
        "Det afhænger af din specifikke situation. Du bør altid konsultere en læge med kendskab til dykkermedicin før du begynder at dykke, hvis du har helbredsproblemer.",
    },
  ],
  icehockey: [
    {
      id: "1",
      question: "Hvordan kommer jeg i gang med ishockey?",
      answer:
        "Den bedste måde at starte med ishockey er at kontakte en lokal klub. Mange klubber tilbyder introforløb og prøvetræninger for begyndere i alle aldre.",
    },
    {
      id: "2",
      question: "Hvad koster det at spille ishockey?",
      answer:
        "Prisen varierer fra klub til klub. De fleste klubber har forskellige prisklasser for forskellige aldersgrupper og niveauer. Kontakt din lokale klub for præcise oplysninger.",
    },
    {
      id: "3",
      question: "Hvilket udstyr skal jeg bruge for at komme i gang?",
      answer:
        "Som begynder er det ofte muligt at låne udstyr fra klubben. Basalt udstyr inkluderer skøjter, hjelm, handsker, beskyttelsesudstyr og stav. Tal med din lokale klub om udstyrskrav.",
    },
    {
      id: "4",
      question: "Er ishockey farligt?",
      answer:
        "Som i andre kontaktsportsgrene er der en risiko for skader. Men med korrekt udstyr, god træning og fokus på sikkerhed minimeres risikoen betydeligt. Begyndere lærer først at skøjte sikkert, før de deltager i kampe.",
    },
  ],
  // Add more federations as needed
};

// Federation-specific content
const federationContent = {
  diving: {
    title: "Ofte stillede spørgsmål",
    subtitle: "Find svar på de mest almindelige spørgsmål om dykning og medlemskab",
    buttonText: "Se alle spørgsmål og svar",
    buttonLink: "/diving/faq",
  },
  icehockey: {
    title: "Ofte stillede spørgsmål",
    subtitle: "Find svar på de mest almindelige spørgsmål om ishockey og klubmedlemskab",
    buttonText: "Se alle spørgsmål og svar",
    buttonLink: "/icehockey/faq",
  },
  // Add more federations as needed
};

function FAQ({ federation = "diving", title, subtitle, buttonText, buttonLink, faqItems, limit = 4 }: FAQProps) {
  // Get theme colors for the federation
  const themeColors = useMemo(() => getThemeColors(federation), [federation]);

  // Get federation-specific content
  const content = useMemo(() => {
    return federationContent[federation as keyof typeof federationContent] || federationContent.diving;
  }, [federation]);

  // Use provided props or fall back to federation defaults
  const faqTitle = title || content.title;
  const faqSubtitle = subtitle || content.subtitle;
  const viewAllText = buttonText || content.buttonText;
  const viewAllLink = buttonLink || content.buttonLink;

  // Use provided FAQ items or get default ones for the federation
  const items = useMemo(() => {
    if (faqItems && faqItems.length > 0) {
      return faqItems.slice(0, limit);
    }

    const defaultFAQs = federationFAQs[federation as keyof typeof federationFAQs] || federationFAQs.diving;
    return defaultFAQs.slice(0, limit);
  }, [federation, faqItems, limit]);

  // Generate styling based on federation theme
  const buttonStyle = useMemo(() => {
    if (federation === "diving") return "bg-blue-100 text-blue-900 hover:bg-blue-200";
    if (federation === "icehockey") return "bg-red-100 text-red-900 hover:bg-red-200";
    return "bg-blue-100 text-blue-900 hover:bg-blue-200"; // Default
  }, [federation]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">{faqTitle}</h2>
        <p className="text-gray-600">{faqSubtitle}</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-medium text-lg mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to={viewAllLink}
            className={`inline-block ${buttonStyle} px-6 py-3 rounded-full font-medium transition-colors`}
          >
            {viewAllText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
