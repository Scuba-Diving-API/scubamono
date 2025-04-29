import { useMemo } from "react";
import { getThemeColors } from "../../utils/federationThemes";

// Define props interface
interface NewsletterProps {
  federation?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  privacyText?: string;
  placeholderText?: string;
}

function Newsletter({
  federation = "diving",
  title = "Tilmeld dig vores nyhedsbrev",
  subtitle = "Få de seneste nyheder, events og opdateringer direkte i din indbakke",
  buttonText = "Tilmeld",
  privacyText = "Vi respekterer dit privatliv og deler ikke dine oplysninger med tredjeparter.",
  placeholderText = "Din e-mail",
}: NewsletterProps) {
  // Get theme colors for the federation
  const themeColors = useMemo(() => getThemeColors(federation), [federation]);

  // Generate styling based on federation theme
  const gradientBg = useMemo(() => {
    if (federation === "diving") return "bg-gradient-to-l from-blue-100 to-blue-50";
    if (federation === "icehockey") return "bg-gradient-to-l from-red-100 to-red-50";
    return "bg-gradient-to-l from-blue-100 to-blue-50"; // Default
  }, [federation]);

  const buttonBg = useMemo(() => {
    if (federation === "diving") return "bg-blue-900 hover:bg-blue-800";
    if (federation === "icehockey") return "bg-red-800 hover:bg-red-700";
    return "bg-blue-900 hover:bg-blue-800"; // Default
  }, [federation]);

  const focusRing = useMemo(() => {
    if (federation === "diving") return "focus:ring-blue-600";
    if (federation === "icehockey") return "focus:ring-red-600";
    return "focus:ring-blue-600"; // Default
  }, [federation]);

  return (
    <div className={`${gradientBg} py-12`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-6">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder={placeholderText}
              className={`flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 ${focusRing} bg-white`}
            />
            <button className={`${buttonBg} text-white px-8 py-3 rounded-md transition-colors`}>{buttonText}</button>
          </div>
          <p className="text-xs text-gray-500 mt-4">{privacyText}</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
