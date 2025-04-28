import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getThemeColors } from "../../utils/federationThemes";

// Define types for membership benefits
interface MembershipBenefit {
  id?: string;
  text: string;
}

// Define props interface
interface MembershipProps {
  federation?: string;
  title?: string;
  subtitle?: string;
  benefits?: MembershipBenefit[];
  cardTitle?: string;
  cardSubtitle?: string;
  cardButtonText?: string;
  cardLinkText?: string;
  cardLinkUrl?: string;
  placeholderText?: string;
}

// Sample benefits data for each federation
const federationBenefits = {
  diving: [
    { id: "1", text: "Gratis krisehjælp ved uheld" },
    { id: "2", text: "Adgang til kurser og certificeringer" },
    { id: "3", text: "Deltagelse i events og konkurrencer" },
    { id: "4", text: "Rabatter hos samarbejdspartnere" },
  ],
  icehockey: [
    { id: "1", text: "Adgang til turneringer og kampe" },
    { id: "2", text: "Træning med kvalificerede trænere" },
    { id: "3", text: "Forsikringsdækning ved skader" },
    { id: "4", text: "Rabatter på udstyr og billetter" },
  ],
  // Add more federations as needed
};

// Federation-specific content
const federationContent = {
  diving: {
    title: "Bliv medlem af DSF",
    subtitle: "Som medlem får du en række fordele, herunder:",
    cardTitle: "Find din nærmeste klub",
    cardSubtitle: "Indtast dit postnummer og find den nærmeste dykkerklub i dit område.",
    cardButtonText: "Søg",
    cardLinkText: "Se alle klubber",
    cardLinkUrl: "/diving/find-klub",
    placeholderText: "Indtast postnummer",
  },
  icehockey: {
    title: "Bliv medlem af en ishockeyklub",
    subtitle: "Som medlem af en klub under DIU får du adgang til:",
    cardTitle: "Find din lokale ishockeyklub",
    cardSubtitle: "Find den nærmeste ishockeyklub og kom i gang med Danmarks hurtigste sport.",
    cardButtonText: "Søg",
    cardLinkText: "Se alle klubber",
    cardLinkUrl: "/icehockey/klubinfo",
    placeholderText: "Indtast postnummer",
  },
  // Add more federations as needed
};

function Membership({
  federation = "diving",
  title,
  subtitle,
  benefits,
  cardTitle,
  cardSubtitle,
  cardButtonText,
  cardLinkText,
  cardLinkUrl,
  placeholderText,
}: MembershipProps) {
  // Get theme colors for the federation
  const themeColors = useMemo(() => getThemeColors(federation), [federation]);

  // Get federation-specific content
  const content = useMemo(() => {
    return federationContent[federation as keyof typeof federationContent] || federationContent.diving;
  }, [federation]);

  // Use provided props or fall back to federation defaults
  const membershipTitle = title || content.title;
  const membershipSubtitle = subtitle || content.subtitle;
  const cardHeading = cardTitle || content.cardTitle;
  const cardDescription = cardSubtitle || content.cardSubtitle;
  const buttonText = cardButtonText || content.cardButtonText;
  const linkText = cardLinkText || content.cardLinkText;
  const linkUrl = cardLinkUrl || content.cardLinkUrl;
  const inputPlaceholder = placeholderText || content.placeholderText;

  // Use provided benefits or get default ones for the federation
  const membershipBenefits = useMemo(() => {
    if (benefits && benefits.length > 0) {
      return benefits;
    }

    return federationBenefits[federation as keyof typeof federationBenefits] || federationBenefits.diving;
  }, [federation, benefits]);

  // Generate styling based on federation theme
  const bgGradient = useMemo(() => {
    if (federation === "diving") return "bg-gradient-to-r from-blue-900 to-blue-700";
    if (federation === "icehockey") return "bg-gradient-to-r from-red-900 to-red-700";
    return "bg-gradient-to-r from-blue-900 to-blue-700"; // Default
  }, [federation]);

  const accentColor = useMemo(() => {
    if (federation === "diving") return "text-cyan-300";
    if (federation === "icehockey") return "text-red-300";
    return "text-cyan-300"; // Default
  }, [federation]);

  const cardHeadingColor = useMemo(() => {
    if (federation === "diving") return "text-blue-900";
    if (federation === "icehockey") return "text-red-900";
    return "text-blue-900"; // Default
  }, [federation]);

  const buttonBg = useMemo(() => {
    if (federation === "diving") return "bg-blue-900 hover:bg-blue-800";
    if (federation === "icehockey") return "bg-red-800 hover:bg-red-700";
    return "bg-blue-900 hover:bg-blue-800"; // Default
  }, [federation]);

  const linkColor = useMemo(() => {
    if (federation === "diving") return "text-blue-600 hover:text-blue-700";
    if (federation === "icehockey") return "text-red-600 hover:text-red-700";
    return "text-blue-600 hover:text-blue-700"; // Default
  }, [federation]);

  const focusRing = useMemo(() => {
    if (federation === "diving") return "focus:ring-blue-600";
    if (federation === "icehockey") return "focus:ring-red-600";
    return "focus:ring-blue-600"; // Default
  }, [federation]);

  return (
    <div className={`${bgGradient} text-white py-16`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">{membershipTitle}</h2>
            <p className="text-xl mb-6">{membershipSubtitle}</p>
            <ul className="space-y-3">
              {membershipBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 mr-2 ${accentColor} flex-shrink-0`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className={`text-xl font-bold mb-4 ${cardHeadingColor}`}>{cardHeading}</h3>
              <p className="text-gray-600 mb-6">{cardDescription}</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder={inputPlaceholder}
                  className={`flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 ${focusRing}`}
                />
                <button className={`${buttonBg} text-white px-4 py-3 rounded-r-md transition-colors`}>
                  {buttonText}
                </button>
              </div>
              <div className="mt-6">
                <Link to={linkUrl} className={`${linkColor} font-medium`}>
                  {linkText} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
