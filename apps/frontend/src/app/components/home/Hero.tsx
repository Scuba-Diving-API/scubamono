import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import divingVideo from '../../../assets/video/diving-bg.mp4';
import icehockeyVideo from '../../../assets/video/icehockey-bg.mp4';
import archeryVideo from '../../../assets/video/bow-bg.mp4';
import skydivingVideo from '../../../assets/video/skydiving-bg.mp4';
import surfingVideo from '../../../assets/video/surfing-bg.mp4';
import triathlonVideo from '../../../assets/video/triathlon-bg.mp4';

// Define props interface
interface HeroProps {
  federation?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  primaryButtonHash?: string; // New prop for primary button hash
  secondaryButtonHash?: string; // New prop for secondary button hash
}

// Federation-specific hero content
const federationContent = {
  diving: {
    video: divingVideo,
    bgGradient: 'bg-gradient-to-r from-darkblue to-lightblue',
    title: 'Velkommen til Dansk Sportsdykker Forbund',
    subtitle:
      'Oplev havets dyb og bliv en del af Danmarks største dykkernetværk',
    primaryButton: {
      text: 'Find lokal klub',
      link: '/diving/find-klub',
      style: 'bg-cyan-600 text-white hover:bg-cyan-700',
    },
    secondaryButton: {
      text: 'Bliv medlem',
      link: '/diving/bliv-medlem',
      style: 'bg-white text-blue-900 hover:bg-gray-100',
    },
  },
  icehockey: {
    video: icehockeyVideo,
    bgGradient: 'bg-gradient-to-r from-zinc-700 to-zinc-700',
    title: 'Velkommen til Danmarks Ishockey Union',
    subtitle: 'Oplev ishockeyens fart og spænding i en klub nær dig',
    primaryButton: {
      text: 'Find en klub',
      link: '/icehockey/klubinfo',
      style: 'bg-red-600 text-white hover:bg-red-700',
    },
    secondaryButton: {
      text: 'Se landshold',
      link: '/icehockey/landshold',
      style: 'bg-white text-red-900 hover:bg-gray-100',
    },
  },
  triathlon: {
    video: triathlonVideo,
    bgGradient: 'bg-gradient-to-r from-green-800 to-green-600',
    title: 'Velkommen til Dansk Triathlon Forbund',
    subtitle: 'Svømning, cykling og løb - udfordring for alle niveauer',
    primaryButton: {
      text: 'Find lokal klub',
      link: '/triathlon/find-klub',
      style: 'bg-green-600 text-white hover:bg-green-700',
    },
    secondaryButton: {
      text: 'Bliv medlem',
      link: '/triathlon/bliv-medlem',
      style: 'bg-white text-green-900 hover:bg-gray-100',
    },
  },
  archery: {
    video: archeryVideo,
    bgGradient: 'bg-gradient-to-r from-yellow-800 to-yellow-600',
    title: 'Velkommen til Dansk Bueskydning',
    subtitle: 'Oplev præcision og fokus i bueskydningens verden',
    primaryButton: {
      text: 'Find lokal klub',
      link: '/archery/find-klub',
      style: 'bg-yellow-600 text-white hover:bg-yellow-700',
    },
    secondaryButton: {
      text: 'Bliv medlem',
      link: '/archery/bliv-medlem',
      style: 'bg-white text-yellow-900 hover:bg-gray-100',
    },
  },
  surfing: {
    video: surfingVideo,
    bgGradient: 'bg-gradient-to-r from-blue-800 to-blue-600',
    title: 'Velkommen til Dansk Surf Forbund',
    subtitle: 'Oplev bølgerne og surfens frihed i Danmark',
    primaryButton: {
      text: 'Find lokal klub',
      link: '/surfing/find-klub',
      style: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    secondaryButton: {
      text: 'Bliv medlem',
      link: '/surfing/bliv-medlem',
      style: 'bg-white text-blue-900 hover:bg-gray-100',
    },
  },
  skydiving: {
    video: skydivingVideo,
    bgGradient: 'bg-gradient-to-r from-purple-800 to-purple-600',
    title: 'Velkommen til Dansk Faldskærms Forbund',
    subtitle: 'Oplev friheden ved faldskærmsudspring i Danmark',
    primaryButton: {
      text: 'Find lokal klub',
      link: '/skydiving/find-klub',
      style: 'bg-purple-600 text-white hover:bg-purple-700',
    },
    secondaryButton: {
      text: 'Bliv medlem',
      link: '/skydiving/bliv-medlem',
      style: 'bg-white text-purple-900 hover:bg-gray-100',
    },
  },
  // Add more federations as needed
};

function Hero({
  federation = 'diving',
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  primaryButtonHash,
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonHash,
}: HeroProps) {
  const navigate = useNavigate();

  // Get federation-specific content or use diving as default
  const content = useMemo(() => {
    return (
      federationContent[federation as keyof typeof federationContent] ||
      federationContent.diving
    );
  }, [federation]);

  // Use custom props if provided, otherwise fall back to federation defaults
  const heroTitle = title || content.title;
  const heroSubtitle = subtitle || content.subtitle;
  const primaryBtnText = primaryButtonText || content.primaryButton.text;
  const primaryBtnLink = primaryButtonLink || content.primaryButton.link;
  const primaryBtnStyle = content.primaryButton.style;
  const secondaryBtnText = secondaryButtonText || content.secondaryButton.text;
  const secondaryBtnLink = secondaryButtonLink || content.secondaryButton.link;
  const secondaryBtnStyle = content.secondaryButton.style;

  // Handle button click with navigation and scrolling
  const handleButtonClick = (link: string, hash?: string) => {
    // Navigate first
    navigate(link);

    // Then scroll after a short delay to allow the page to load
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <div className={`relative ${content.bgGradient} text-white`}>
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover mix-blend-overlay"
        >
          <source src={content.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-60 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle}</h1>
          <p className="text-xl mb-8">{heroSubtitle}</p>
          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <button
              onClick={() =>
                handleButtonClick(primaryBtnLink, primaryButtonHash)
              }
              className={`${primaryBtnStyle} px-6 py-3 rounded-full font-medium transition-colors`}
            >
              {primaryBtnText}
            </button>

            {/* Secondary Button */}
            <button
              onClick={() =>
                handleButtonClick(secondaryBtnLink, secondaryButtonHash)
              }
              className={`${secondaryBtnStyle} px-6 py-3 rounded-full font-medium transition-colors`}
            >
              {secondaryBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
