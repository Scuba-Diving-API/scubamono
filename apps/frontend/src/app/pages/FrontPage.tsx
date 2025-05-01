// Import components
import Hero from '../components/home/Hero';
import FeatureCards from '../components/home/FeatureCards';
import UpcomingEvents from '../components/home/UpcomingEvents';
import LatestNews from '../components/home/LatestNews';
import Membership from '../components/home/Membership';
import FAQ from '../components/home/FAQ';
import Newsletter from '../components/home/Newsletter';

// Define props interface for configurable components
interface FrontPageProps {
  federation?: string; // Federation identifier (diving, icehockey, etc.)
  components?: {
    hero?: boolean;
    latestNews?: boolean;
    upcomingEvents?: boolean;
    featureCards?: boolean;
    membership?: boolean;
    faq?: boolean;
    newsletter?: boolean;
    // Can add more components here as needed
  };
  // Custom component content that can be passed from parent
  customContent?: {
    heroProps?: any;
    newsProps?: any;
    eventsProps?: any;
    featureProps?: any;
    membershipProps?: any;
    faqProps?: any;
    newsletterProps?: any;
  };
}

function FrontPage({
  federation = 'diving',
  components = {
    hero: true,
    latestNews: true,
    upcomingEvents: true,
    featureCards: true,
    membership: true,
    faq: true,
    newsletter: true,
  },
  customContent = {},
}: FrontPageProps) {
  // Destructure customContent for easier access
  const {
    heroProps,
    newsProps,
    eventsProps,
    featureProps,
    membershipProps,
    faqProps,
    newsletterProps,
  } = customContent;

  // Diving specific customizations
  const divingHeroProps =
    federation === 'diving'
      ? {
          primaryButtonText: 'Ny til dykning? Klik her',
          primaryButtonLink: '/diving/uddannelse',
          primaryButtonHash: '#hvordan-kommer-jeg-i-gang',
          secondaryButtonLink: '/diving/webshop',
          secondaryButtonText: 'Besøg webshop',
        }
      : {};

  return (
    <div className="min-h-screen bg-white">
      {components.hero && (
        <Hero
          federation={federation}
          {...heroProps}
          {...(federation === 'diving' ? divingHeroProps : {})}
        />
      )}
      {components.latestNews && (
        <LatestNews
          federation={federation}
          {...newsProps}
          title="Seneste nyt"
          subtitle="Hold dig opdateret med de seneste begivenheder og nyheder"
        />
      )}
      {components.upcomingEvents && (
        <UpcomingEvents federation={federation} {...eventsProps} />
      )}
      {components.featureCards && (
        <FeatureCards federation={federation} {...featureProps} />
      )}
      {components.membership && (
        <Membership federation={federation} {...membershipProps} />
      )}
      {components.faq && <FAQ federation={federation} {...faqProps} />}
      {components.newsletter && (
        <Newsletter federation={federation} {...newsletterProps} />
      )}
    </div>
  );
}

export default FrontPage;
