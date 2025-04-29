import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import skydivingLogo from "../../assets/images/skydivinglogo.png";
import { getThemeColors } from "../../utils/federationThemes";

// Define the active organization for the skydiving federation
const skydivingOrg = {
  id: "skydiving",
  name: "Dansk Faldskærms Union",
  color: "blue",
};

// Get theme colors based on federation ID
const themeColors = getThemeColors(skydivingOrg.id);

// Navigation links configuration for the skydiving federation based on their activities
const skydivingLinks = [
  { to: "/skydiving/nyheder", label: "Nyheder" },
  { to: "/skydiving/aktiviteter", label: "Aktiviteter" },
  { to: "/skydiving/kurser", label: "Kurser" },
  { to: "/skydiving/konkurrencer", label: "Konkurrencer" },
  { to: "/skydiving/find-klub", label: "Find Klub" },
  { to: "/skydiving/om-os", label: "Om Os" },
  { to: "/skydiving/kontakt", label: "Kontakt" },
  { to: "/skydiving/webshop", label: "Webshop", isButton: true },
];

// Navbar colors configuration based on federation theme
const navbarColors = {
  bgColor: "bg-blue-900",
  textColor: "text-white",
  hoverColor: "text-blue-200",
  mobileMenuBorderColor: "border-blue-800",
  mobileLinkHoverBgColor: "bg-blue-800",
  buttonBgColor: "bg-blue-600",
  buttonHoverBgColor: "bg-blue-700",
};

// Footer configuration for the skydiving federation
const footerColumns = [
  {
    title: "Links",
    links: [
      { to: "/skydiving/nyheder", label: "Nyheder" },
      { to: "/skydiving/aktiviteter", label: "Aktiviteter" },
      { to: "/skydiving/kurser", label: "Kurser" },
      { to: "/skydiving/konkurrencer", label: "Konkurrencer" },
      { to: "/skydiving/find-klub", label: "Find Klub" },
    ],
  },
  {
    title: "Om DFU",
    links: [
      { to: "/skydiving/om-os", label: "Om Os" },
      { to: "/skydiving/bestyrelsen", label: "Bestyrelsen" },
      { to: "/skydiving/sikkerhed", label: "Sikkerhed" },
      { to: "/skydiving/privatlivspolitik", label: "Privatlivspolitik" },
      { to: "/skydiving/samarbejdspartnere", label: "Samarbejdspartnere" },
    ],
  },
];

const footerColors = {
  bgColor: "bg-blue-900",
  textColor: "text-white",
  headingColor: "text-white",
  accentColor: "text-blue-300",
  borderColor: "border-blue-800",
  hoverColor: "text-white",
};

function SkydivingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar activeOrg={skydivingOrg} />
      <Navbar
        logo={{
          src: skydivingLogo,
          alt: "Dansk Faldskærms Union Logo",
          primaryText: "Dansk Faldskærms",
          secondaryText: "Union",
        }}
        links={skydivingLinks}
        colors={navbarColors}
        federationId={skydivingOrg.id}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer
        logo={{
          src: skydivingLogo,
          alt: "Dansk Faldskærms Union Logo",
        }}
        description="Dansk Faldskærms Union (DFU) er det officielle specialforbund for faldskærmsudspring i Danmark, der arbejder for at fremme sporten og sikre høje sikkerhedsstandarder."
        contact={{
          address: "Idrættens Hus, Brøndby Stadion 20, 2605 Brøndby",
          phone: "+45 43 26 27 77",
          email: "dfu@dfu.dk",
        }}
        columns={footerColumns}
        socialLinks={{
          facebook: "https://www.facebook.com/danskfaldskærmsunion",
          instagram: "https://www.instagram.com/danskfaldskærmsunion",
          youtube: "https://www.youtube.com/user/danskfaldskærmsunion",
        }}
        colors={footerColors}
        copyright="© 2025 Dansk Faldskærms Union. Alle rettigheder forbeholdes."
      />
    </div>
  );
}

export default SkydivingLayout;