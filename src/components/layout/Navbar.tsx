import { useState } from "react";
import dsfLogo from "../../assets/images/dsflogo.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-darkblue text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={dsfLogo} alt="DSF Logo" className="h-14 mr-3" />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight">Dansk Sportsdykker</span>
                <span className="font-medium text-sm tracking-tight">Forbund</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">
              Nyheder
            </a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">
              Uddannelse
            </a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">
              Discipliner
            </a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">
              Events
            </a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">
              For medlemmer
            </a>
            <a href="#" className="font-medium hover:text-cyan-300 transition-colors">
              Om DSF
            </a>
            <a href="#" className="font-medium bg-cyan-600 px-4 py-2 rounded-full hover:bg-cyan-700 transition-colors">
              Webshop
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-blue-800 mt-3">
            <div className="flex flex-col space-y-3">
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">
                Nyheder
              </a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">
                Uddannelse
              </a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">
                Discipliner
              </a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">
                Events
              </a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">
                For medlemmer
              </a>
              <a href="#" className="px-3 py-2 hover:bg-blue-800 rounded-md">
                Om DSF
              </a>
              <a href="#" className="px-3 py-2 bg-cyan-600 rounded-md text-center">
                Webshop
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
