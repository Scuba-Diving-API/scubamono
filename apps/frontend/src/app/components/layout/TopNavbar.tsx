import { Link } from 'react-router-dom';

interface Organization {
  id: string;
  name: string;
  color: string;
}

interface TopNavbarProps {
  activeOrg?: Organization;
}

function TopNavbar({ activeOrg }: TopNavbarProps) {
  // If we're in a sports federation subsite
  const isSubsite = !!activeOrg;

  return (
    <nav className="text-black py-2 bg-difoffwhite">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-semibold">Danmarks Idrætsforbund</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* If we're in a subsite, show which one */}
            {isSubsite && (
              <div className="hidden md:block">
                <span className="text-black mr-2">Du er her:</span>
                <span className={`font-semibold px-2 py-1 rounded`}>
                  {activeOrg.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
