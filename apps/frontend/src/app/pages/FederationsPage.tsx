import FederationGrid from "../components/federation/FederationGrid";

function FederationsPage() {
  // Sample federation data - in a real application, this might come from an API
  const federationData = [
    {
      id: "diving",
      name: "Dansk Sportsdykker Forbund",
      description: "Dansk Sportsdykker Forbund (DSF) er en sammenslutning af danske sportsdykkerklubber, der arbejder for at fremme undervandsaktiviteter og havmiljøet i Danmark.",
      logoUrl: "/src/assets/images/federation/dsf-logo.png", // You'll need to add these images
      backgroundImageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    },
    {
      id: "swimming",
      name: "Dansk Svømmeunion",
      description: "Dansk Svømmeunion er det officielle specialforbund for svømning i Danmark, der arbejder for at fremme svømmesporten på alle niveauer.",
      logoUrl: "/src/assets/images/federation/swimming-logo.png",
      backgroundImageUrl: "https://images.unsplash.com/photo-1519315901367-f34ff9154487",
    },
    {
      id: "sailing",
      name: "Dansk Sejlunion",
      description: "Dansk Sejlunion er sejlsportens organisation i Danmark, der varetager alle former for sejlsport, fra tursejlads til OL.",
      logoUrl: "/src/assets/images/federation/sailing-logo.png",
      backgroundImageUrl: "https://images.unsplash.com/photo-1534854638093-bada1813ca19",
    },
    {
      id: "rowing",
      name: "Dansk Forening for Rosport",
      description: "Dansk Forening for Rosport (DFfR) er hovedorganisationen for rosport i Danmark, der fremmer både konkurrence- og motionsroning.",
      logoUrl: "/src/assets/images/federation/rowing-logo.png",
      backgroundImageUrl: "https://images.unsplash.com/photo-1553108325-b133efbbb174",
    },
    {
      id: "triathlon",
      name: "Dansk Triatlon Forbund",
      description: "Dansk Triatlon Forbund er det officielle specialforbund for triatlon i Danmark, der arbejder for at fremme sporten nationalt og internationalt.",
      logoUrl: "/src/assets/images/federation/triathlon-logo.png",
      backgroundImageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
    },
    {
      id: "canoekayak",
      name: "Dansk Kano og Kajak Forbund",
      description: "Dansk Kano og Kajak Forbund er specialforbundet for kano- og kajaksporten i Danmark, der varetager både konkurrence- og turområdet.",
      logoUrl: "/src/assets/images/federation/canoekayak-logo.png",
      backgroundImageUrl: "https://images.unsplash.com/photo-1572697975560-1fa2d233cbf4",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sports Federations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Denmark's aquatic sports federations and discover opportunities 
            for participation, competition, and community engagement.
          </p>
        </div>
        
        <FederationGrid 
          federations={federationData}
        />
      </div>
    </div>
  );
}

export default FederationsPage;