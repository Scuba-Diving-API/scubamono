import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";

// Define the active organization for the current subpage
const dsfOrg = {
  id: "diving",
  name: "Dansk Sportsdykker Forbund",
  color: "brightblue",
};

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar activeOrg={dsfOrg} />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
