import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import archeryLogo from "../../assets/images/archerylogo.svg"; // You'll need to add this logo
import { getThemeColors } from "../../utils/federationThemes";

// Define the active organization for the archery federation
const archeryOrg = {
  id: "bueskydning",
  name: "Bueskydning Danmark",
  color: "green",
};

// Get theme colors based on federation ID
const themeColors = getThemeColors(archeryOrg.id);

// Navigation links configuration for the archery federation based on their website
const archeryLinks = [
  { to: "/bueskydning/nyheder", label: "Nyheder" },
  { to: "/bueskydning/stævner", label: "Stævner" },
  { to: "/bueskydning/kurser", label: "Kurser" },
  { to: "/bueskydning/udvalg", label: "Udvalg" },
  { to: "/bueskydning/find-klub", label: "Find Klub" },
  { to: "/bueskydning/om-os", label: "Om Os" },
  { to: "/bueskydning/kontakt", label: "Kontakt" },
];

// Navbar colors configuration based on federation theme
const navbarColors = {
  bgColor: "bg-green-800",
  textColor: "text-white",
  hoverColor: "text-green-200",
  mobileMenuBorderColor: "border-green-700",
  mobileLinkHoverBgColor: "bg-green-700",
  buttonBgColor: "bg-green-600",
  buttonHoverBgColor: "bg-green-700",
};

// Footer configuration for the archery federation
const footerColumns = [
  {
    title: "Links",
    links: [
      { to: "/bueskydning/nyheder", label: "Nyheder" },
      { to: "/bueskydning/stævner", label: "Stævner" },
      { to: "/bueskydning/kurser", label: "Kurser & Uddannelse" },
      { to: "/bueskydning/udvalg", label: "Udvalg" },
      { to: "/bueskydning/find-klub", label: "Find Klub" },
    ],
  },
  {
    title: "Om Bueskydning Danmark",
    links: [
      { to: "/bueskydning/om-os", label: "Om Os" },
      { to: "/bueskydning/privatlivspolitik", label: "Privatlivspolitik" },
      { to: "/bueskydning/love-regler", label: "Love & Regler" },
      { to: "/bueskydning/kontakt", label: "Kontakt" },
    ],
  },
];

const footerColors = {
  bgColor: "bg-green-900",
  textColor: "text-white",
  headingColor: "text-white",
  accentColor: "text-green-400",
  borderColor: "border-green-800",
  hoverColor: "text-white",
};

function ArcheryLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar activeOrg={archeryOrg} />
      <Navbar
        logo={{
          src: archeryLogo,
          alt: "Bueskydning Danmark Logo",
          primaryText: "Bueskydning",
          secondaryText: "Danmark",
        }}
        links={archeryLinks}
        colors={navbarColors}
        federationId={archeryOrg.id}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer
        logo={{
          src: archeryLogo,
          alt: "Bueskydning Danmark Logo",
        }}
        description="Bueskydning Danmark er den øverste faglige myndighed inden for bueskydning i Danmark, med det formål at fremme og udvikle sporten."
        contact={{
          address: "Brøndby Stadion 20, 2605 Brøndby",
          phone: "+45 5027 4237",
          email: "info@bueskydningdanmark.dk",
        }}
        columns={footerColumns}
        socialLinks={{
          facebook: "https://www.facebook.com/bueskydningdanmark",
          instagram: "https://www.instagram.com/bueskydningdanmark",
          youtube: "https://www.youtube.com/user/bueskydningdanmark",
        }}
        colors={footerColors}
        copyright="© 2025 Bueskydning Danmark. Alle rettigheder forbeholdes."
      />
    </div>
  );
}

export default ArcheryLayout;
