import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import diuLogo from "../../assets/images/diulogo.png";
import { getThemeColors } from "../../utils/federationThemes";

// Define the active organization for the ice hockey federation
const diuOrg = {
  id: "icehockey",
  name: "Danmarks Ishockey Union",
  color: "red",
};

// Get theme colors based on federation ID
const themeColors = getThemeColors(diuOrg.id);

// Navigation links configuration for the ice hockey federation based on their website
const icehockeyLinks = [
  { to: "/icehockey/nyheder", label: "Nyheder" },
  { to: "/icehockey/turnering", label: "Turnering" },
  { to: "/icehockey/klubinfo", label: "Klubinfo" },
  { to: "/icehockey/uddannelse", label: "Uddannelse" },
  { to: "/icehockey/landshold", label: "Landshold" },
  { to: "/icehockey/integritet", label: "Integritet" },
  { to: "/icehockey/udvikling", label: "Udvikling" },
  { to: "/icehockey/ny-til-ishockey", label: "Ny til ishockey" },
  { to: "/icehockey/shop", label: "Shop", isButton: true },
];

// Navbar colors configuration based on federation theme
const navbarColors = {
  bgColor: "bg-red-800",
  textColor: "text-white",
  hoverColor: "text-gray-200",
  mobileMenuBorderColor: "border-red-700",
  mobileLinkHoverBgColor: "bg-red-700",
  buttonBgColor: "bg-red-600",
  buttonHoverBgColor: "bg-red-700",
};

// Footer configuration for the ice hockey federation
const footerColumns = [
  {
    title: "Links",
    links: [
      { to: "/icehockey/nyheder", label: "Nyheder" },
      { to: "/icehockey/turnering", label: "Turnering" },
      { to: "/icehockey/landshold", label: "Landshold" },
      { to: "/icehockey/udvikling", label: "Udvikling" },
      { to: "/icehockey/shop", label: "Shop" },
    ],
  },
  {
    title: "Om DIU",
    links: [
      { to: "/icehockey/om-diu", label: "Om DIU" },
      { to: "/icehockey/bestyrelsen", label: "Bestyrelsen" },
      { to: "/icehockey/persondata", label: "Persondatapolitik" },
      { to: "/icehockey/sponsorer", label: "Sponsorer" },
      { to: "/icehockey/vm-2025", label: "VM 2025" },
    ],
  },
];

const footerColors = {
  bgColor: "bg-red-900",
  textColor: "text-white",
  headingColor: "text-white",
  accentColor: "text-red-400",
  borderColor: "border-red-800",
  hoverColor: "text-white",
};

function IceHockeyLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar activeOrg={diuOrg} />
      <Navbar
        logo={{
          src: diuLogo,
          alt: "DIU Logo",
          primaryText: "Danmarks Ishockey",
          secondaryText: "Union",
        }}
        links={icehockeyLinks}
        colors={navbarColors}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer
        logo={{
          src: diuLogo,
          alt: "DIU Logo",
        }}
        description="Danmarks Ishockey Union (DIU) er det officielle specialforbund for ishockey i Danmark, som varetager ishockeyens interesser nationalt og internationalt."
        contact={{
          address: "Idrættens Hus, Brøndby Stadion 20, 2605 Brøndby",
          phone: "+45 43 26 27 10",
          email: "info@ishockey.dk",
        }}
        columns={footerColumns}
        socialLinks={{
          facebook: "https://www.facebook.com/DanmarksIshockeyUnion",
          instagram: "https://www.instagram.com/danskishockey",
          youtube: "https://www.youtube.com/user/DanishIceHockey",
          twitter: "https://twitter.com/DIshockeyUnion",
        }}
        colors={footerColors}
        copyright="© 2025 Danmarks Ishockey Union. Alle rettigheder forbeholdes."
      />
    </div>
  );
}

export default IceHockeyLayout;
