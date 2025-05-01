import { Link, useNavigate } from 'react-router-dom';
import { getThemeColors } from '../../utils/federationThemes';

interface FederationCardProps {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  backgroundImageUrl: string;
  linkText?: string;
  linkUrl?: string;
}

function FederationCard({
  id,
  name,
  description,
  logoUrl,
  backgroundImageUrl,
  linkText = 'Se mere',
  linkUrl,
}: FederationCardProps) {
  const theme = getThemeColors(id);
  const finalLinkUrl = linkUrl || `/${id}`;
  const navigate = useNavigate();

  // Handle federation link click with scroll to top
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate programmatically
    navigate(finalLinkUrl);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
      style={{ borderTop: `4px solid ${theme.primary}` }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={backgroundImageUrl}
          alt={`${name} backdrop`}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${theme.secondary}40` }} // 40 is for 25% opacity
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="max-h-24 max-w-24 object-contain"
          />
        </div>
      </div>
      <div className="p-6">
        <h3
          className="font-bold text-xl mb-2"
          style={{ color: theme.secondary }}
        >
          {name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          to={finalLinkUrl}
          className="inline-block font-medium transition-colors"
          style={{ color: theme.primary }}
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.secondary)}
          onMouseLeave={(e) => (e.currentTarget.style.color = theme.primary)}
          onClick={handleLinkClick}
        >
          {linkText} →
        </Link>
      </div>
    </div>
  );
}

export default FederationCard;
