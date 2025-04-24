import React from "react";
import { Link } from "react-router-dom";
import { getThemeColors } from "../../utils/federationThemes";

interface Organization {
  id: string;
  name: string;
  color: string;
}

interface TopNavbarProps {
  activeOrg?: Organization;
}

function TopNavbar({ activeOrg }: TopNavbarProps) {
  const parentLinks = [
    { name: "DIF", path: "/" },
    { name: "Om DIF", path: "/om-dif" },
    { name: "Nyheder", path: "/nyheder" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  // If we're in a sports federation subsite
  const isSubsite = !!activeOrg;
  const themeColors = isSubsite ? getThemeColors(activeOrg.id) : null;

  const navbarStyle = isSubsite
    ? {
        backgroundColor: themeColors?.secondary || "#0d2d52",
        borderBottom: `4px solid ${themeColors?.primary || "#57b5eb"}`,
      }
    : {
        backgroundColor: "#0a1f33",
        borderBottom: "4px solid #003366",
      };

  return (
    <nav style={navbarStyle} className="text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-semibold">Danmarks Idrætsforbund</span>
            </Link>

            {/* Only show parent links if we're in a subsite */}
            {isSubsite && (
              <div className="hidden md:flex space-x-4">
                {parentLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* If we're in a subsite, show which one */}
            {isSubsite && (
              <div className="hidden md:block">
                <span className="text-gray-300 mr-2">Du er her:</span>
                <span className="font-semibold px-2 py-1 rounded" style={{ backgroundColor: themeColors?.primary || "#57b5eb", color: "white" }}>
                  {activeOrg.name}
                </span>
              </div>
            )}

            {/* Login button */}
            <button className="bg-white text-gray-900 px-4 py-1 rounded hover:bg-gray-200 transition-colors">Log ind</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
