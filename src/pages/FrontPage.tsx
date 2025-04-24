// Import components
import Hero from "../components/home/Hero";
import FeatureCards from "../components/home/FeatureCards";
import UpcomingEvents from "../components/home/UpcomingEvents";
import LatestNews from "../components/home/LatestNews";
import Membership from "../components/home/Membership";
import FAQ from "../components/home/FAQ";
import Newsletter from "../components/home/Newsletter";

function FrontPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LatestNews />
      <UpcomingEvents />
      <FeatureCards />
      <Membership />
      <FAQ />
      <Newsletter />
    </div>
  );
}

export default FrontPage;
