import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getThemeColors } from "../../utils/federationThemes";

// Define types for event items
interface EventItem {
  id?: string;
  title: string;
  date: string;
  location: string;
  info: string;
  link?: string;
}

// Define props interface
interface UpcomingEventsProps {
  federation?: string;
  title?: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllText?: string;
  events?: EventItem[];
  limit?: number;
}

// Sample events data for each federation
const federationEvents = {
  diving: [
    {
      id: "1",
      title: "Fridykning: DM i Pool 2025",
      date: "26-27. april 2025",
      location: "Odense Universitetssvømmehal",
      info: "DM i pool afholdes i Odense. Fredag d. 25. april: Mærk vandet (kl. 19-22), konkurrencer lørdag og søndag.",
      link: "/diving/events/1",
    },
    {
      id: "2",
      title: "UV-Jagt: DM 2025",
      date: "17-18. maj 2025",
      location: "Nordsjælland, Gilleleje og Hundested",
      info: "Danmarksmesterskab i UV-jagt hvor vi finder Danmarks bedste UV-jægere.",
      link: "/diving/events/2",
    },
    {
      id: "3",
      title: "Havmiljø: Stenrevskursus",
      date: "17. maj 2025",
      location: "Kommer snart",
      info: "Kursus for alle dykkere med interesse i stenrev og deres økosystem.",
      link: "/diving/events/3",
    },
  ],
  icehockey: [
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
  ],
  // Add more federations as needed
};

function UpcomingEvents({
  federation = "diving",
  title = "Kommende events",
  subtitle = "Deltag i spændende aktiviteter og events over hele landet",
  viewAllLink,
  viewAllText = "Se alle events",
  events,
  limit = 3,
}: UpcomingEventsProps) {
  // Get theme colors for the federation
  const themeColors = useMemo(() => getThemeColors(federation), [federation]);

  // Use provided events or get default ones for the federation
  const items = useMemo(() => {
    if (events && events.length > 0) {
      return events.slice(0, limit);
    }

    const defaultEvents = federationEvents[federation as keyof typeof federationEvents] || federationEvents.diving;
    return defaultEvents.slice(0, limit);
  }, [federation, events, limit]);

  // Determine the view all link based on federation
  const allEventsLink = viewAllLink || `/${federation}/events`;

  // Generate accent colors based on federation theme
  const gradientBg = useMemo(() => {
    if (federation === "diving") return "bg-gradient-to-r from-blue-100 to-blue-50";
    if (federation === "icehockey") return "bg-gradient-to-r from-red-100 to-red-50";
    return "bg-gradient-to-r from-blue-100 to-blue-50"; // Default
  }, [federation]);

  const borderColor = useMemo(() => {
    if (federation === "diving") return "border-cyan-600";
    if (federation === "icehockey") return "border-red-600";
    return "border-cyan-600"; // Default
  }, [federation]);

  const dateBadgeBg = useMemo(() => {
    if (federation === "diving") return "bg-blue-100 text-blue-800";
    if (federation === "icehockey") return "bg-red-100 text-red-800";
    return "bg-blue-100 text-blue-800"; // Default
  }, [federation]);

  const linkColor = useMemo(() => {
    if (federation === "diving") return "text-cyan-600 hover:text-cyan-700";
    if (federation === "icehockey") return "text-red-600 hover:text-red-700";
    return "text-cyan-600 hover:text-cyan-700"; // Default
  }, [federation]);

  const buttonBg = useMemo(() => {
    if (federation === "diving") return "bg-blue-900 hover:bg-blue-800";
    if (federation === "icehockey") return "bg-red-800 hover:bg-red-700";
    return "bg-blue-900 hover:bg-blue-800"; // Default
  }, [federation]);

  return (
    <div className={`${gradientBg} py-16`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className={`border-l-4 ${borderColor} p-6`}>
                <span className={`inline-block ${dateBadgeBg} text-xs px-2 py-1 rounded-full mb-3`}>{event.date}</span>
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">📍 {event.location}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.info}</p>
                <Link to={event.link || "#"} className={`${linkColor} font-medium`}>
                  Mere info →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to={allEventsLink}
            className={`inline-block ${buttonBg} text-white px-6 py-3 rounded-full font-medium transition-colors`}
          >
            {viewAllText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
