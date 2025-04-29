import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import dsfLogo from "../../assets/images/dsflogo.png";
import { getThemeColors } from "../../utils/federationThemes";

// Define the active organization for the current subpage
const dsfOrg = {
  id: "diving",
  name: "Dansk Sportsdykker Forbund",
  color: "brightblue",
};

// Get theme colors based on federation ID
const themeColors = getThemeColors(dsfOrg.id);

// Navigation links configuration for the diving federation
const divingLinks = [
  { to: "/diving/nyheder", label: "Nyheder" },
  { to: "/diving/uddannelse", label: "Uddannelse" },
  { to: "/diving/discipliner", label: "Discipliner" },
  { to: "/diving/events", label: "Events" },
  { to: "https://tailor.sportsdykning.dk/", label: "For medlemmer", isExternal: true },
  { to: "/diving/om-dsf", label: "Om DSF" },
  { to: "/diving/webshop", label: "Webshop", isButton: true },
];

// Navbar colors configuration based on federation theme
const navbarColors = {
  bgColor: "bg-blue-900",
  textColor: "text-white",
  hoverColor: "text-cyan-300",
  mobileMenuBorderColor: "border-blue-800",
  mobileLinkHoverBgColor: "bg-blue-800",
  buttonBgColor: "bg-cyan-600",
  buttonHoverBgColor: "bg-cyan-700",
};

// Footer configuration for the diving federation
const footerColumns = [
  {
    title: "Hurtige links",
    links: [
      { to: "/diving/nyheder", label: "Nyheder" },
      { to: "/diving/events", label: "Events" },
      { to: "/diving/uddannelse", label: "Uddannelse" },
      { to: "/diving/find-klub", label: "Find lokal klub" },
      { to: "/diving/bliv-medlem", label: "Bliv medlem" },
      { to: "/diving/webshop", label: "Webshop" },
    ],
  },
  {
    title: "Information",
    links: [
      { to: "/diving/om-dsf", label: "Om DSF" },
      { to: "/diving/bestyrelsen", label: "Bestyrelsen" },
      { to: "/diving/privatlivspolitik", label: "Privatlivspolitik" },
      { to: "/diving/faq", label: "Ofte stillede spørgsmål" },
      { to: "/diving/medlemsfordele", label: "Medlemsfordele" },
    ],
  },
];

const footerColors = {
  bgColor: "bg-darkblue",
  textColor: "text-white",
  headingColor: "text-white",
  accentColor: "text-cyan-400",
  borderColor: "border-gray-800",
  hoverColor: "text-white",
};

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar activeOrg={dsfOrg} />
      <Navbar
        logo={{
          src: dsfLogo,
          alt: "DSF Logo",
          primaryText: "Dansk Sportsdykker",
          secondaryText: "Forbund",
        }}
        links={divingLinks}
        colors={navbarColors}
        federationId={dsfOrg.id}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer
        logo={{
          src: dsfLogo,
          alt: "DSF Logo",
        }}
        description="Dansk Sportsdykker Forbund - Stedet for alle former for undervandsaktiviteter i Danmark."
        contact={{
          address: "Idrættens Hus, Brøndby Stadion 20, 2605 Brøndby",
          phone: "+45 62 65 61 30",
          email: "dsf@sportsdykning.dk",
        }}
        columns={footerColumns}
        socialLinks={{
          facebook: "https://www.facebook.com/sportsdykning",
          instagram: "https://www.instagram.com/sportsdykning",
          youtube: "https://www.youtube.com/user/sportsdykning",
        }}
        colors={footerColors}
        copyright="© 2025 Dansk Sportsdykker Forbund. Alle rettigheder forbeholdes."
      />
    </div>
  );
}

export default Layout;
