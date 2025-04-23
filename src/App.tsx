// Import components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import FeatureCards from "./components/home/FeatureCards";
import UpcomingEvents from "./components/home/UpcomingEvents";
import LatestNews from "./components/home/LatestNews";
import Membership from "./components/home/Membership";
import FAQ from "./components/home/FAQ";
import Newsletter from "./components/home/Newsletter";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureCards />
      <UpcomingEvents />
      <LatestNews />
      <Membership />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
