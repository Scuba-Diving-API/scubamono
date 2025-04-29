import FrontPage from "../FrontPage";

// Define custom news items for ice hockey
const icehockeyNews = [
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
];

// Define custom events for ice hockey
const icehockeyEvents = [
  {
    id: "1",
    title: "Kvindernes VM Kvalifikation 2025",
    date: "5-11. maj 2025",
    location: "Vojens Skøjtehal",
    info: "Danmark spiller kvalifikation til kvindernes VM med kampe mod Frankrig, Ungarn og Østrig.",
    link: "/icehockey/events/1",
  },
  {
    id: "2",
    title: "IIHF World Championship 2025",
    date: "9-25. maj 2025",
    location: "Herning, Jyske Bank Boxen",
    info: "Danmark er vært for VM i ishockey 2025 sammen med Sverige. Oplev verdens bedste hold i aktion.",
    link: "/icehockey/events/2",
  },
  {
    id: "3",
    title: "Metal Cup Finale 2025",
    date: "30. maj 2025",
    location: "Aalborg, Sparekassen Danmark Isarena",
    info: "Finalestævne i Metal Cup for U17 hold, hvor landets bedste klubber mødes.",
    link: "/icehockey/events/3",
  },
];

// Define custom feature cards for ice hockey
const icehockeyCards = [
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
    description: "Vil du prøve kræfter med ishockey? Find en klub nær dig og kom i gang med Danmarks hurtigste sport.",
    imageUrl: "https://via.placeholder.com/800x600?text=Ny+til+ishockey",
    linkText: "Find en klub",
    linkUrl: "/icehockey/ny-til-ishockey",
  },
];

function IceHockeyFrontPage() {
  // Configure which components to show for ice hockey
  const componentConfig = {
    hero: true,
    latestNews: true,
    upcomingEvents: true,
    featureCards: true,
    membership: false, // No membership section for ice hockey
    faq: false, // No FAQ section for ice hockey
    newsletter: true,
  };

  // Custom content for the components
  const customContent = {
    heroProps: {
      title: "Oplev Ishockeyens Verden",
      subtitle: "Fra nybegynder til landshold - vær med i Danmarks hurtigste sport",
    },
    newsProps: {
      title: "Seneste ishockeynyheder",
      subtitle: "Få de seneste opdateringer fra ishockeyens verden",
      newsItems: icehockeyNews,
    },
    eventsProps: {
      title: "Kommende kampe og events",
      subtitle: "Sæt kryds i kalenderen til de næste store ishockey-begivenheder",
      events: icehockeyEvents,
    },
    featureProps: {
      cards: icehockeyCards,
    },
    newsletterProps: {
      title: "Tilmeld dig DIU's nyhedsbrev",
      subtitle: "Bliv opdateret om landshold, turneringer og andre ishockey-nyheder",
      buttonText: "Tilmeld",
      privacyText: "Vi respekterer dit privatliv. Du kan afmelde dig når som helst.",
    },
  };

  return <FrontPage federation="icehockey" components={componentConfig} customContent={customContent} />;
}

export default IceHockeyFrontPage;
