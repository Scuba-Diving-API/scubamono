import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import dsfLogo from "../../assets/images/dsflogo.png";

// Define the active organization for the current subpage
const dsfOrg = {
  id: "diving",
  name: "Dansk Sportsdykker Forbund",
  color: "brightblue",
};

// Get theme colors based on federation ID

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
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
