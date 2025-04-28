import { useState } from "react";
import { Link } from "react-router-dom";

// Define types for the navbar component
interface NavLink {
  to: string;
  label: string;
  isExternal?: boolean;
  isButton?: boolean;
}

interface NavbarProps {
  logo: {
    src: string;
    alt: string;
    primaryText?: string;
    secondaryText?: string;
  };
  links: NavLink[];
  colors: {
    bgColor: string;
    textColor: string;
    hoverColor: string;
    mobileMenuBorderColor: string;
    mobileLinkHoverBgColor: string;
    buttonBgColor: string;
    buttonHoverBgColor: string;
  };
}

function Navbar({ logo, links, colors }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`${colors.bgColor} ${colors.textColor} sticky top-0 z-50`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo.src} alt={logo.alt} className="h-14 mr-3" />
              {(logo.primaryText || logo.secondaryText) && (
                <div className="flex flex-col">
                  {logo.primaryText && <span className="font-bold text-lg tracking-tight">{logo.primaryText}</span>}
                  {logo.secondaryText && (
                    <span className="font-medium text-sm tracking-tight">{logo.secondaryText}</span>
                  )}
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) =>
              link.isButton ? (
                <Link
                  key={index}
                  to={link.to}
                  className={`font-medium ${colors.buttonBgColor} px-4 py-2 rounded-full hover:${colors.buttonHoverBgColor} transition-colors`}
                  target={link.isExternal ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  className={`font-medium hover:${colors.hoverColor} transition-colors`}
                  target={link.isExternal ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={colors.textColor + " focus:outline-none"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden pt-4 pb-3 border-t ${colors.mobileMenuBorderColor} mt-3`}>
            <div className="flex flex-col space-y-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className={
                    link.isButton
                      ? `px-3 py-2 ${colors.buttonBgColor} rounded-md text-center`
                      : `px-3 py-2 hover:${colors.mobileLinkHoverBgColor} rounded-md`
                  }
                  target={link.isExternal ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
