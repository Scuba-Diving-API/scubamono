import FederationCard from "./FederationCard";

interface Federation {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  backgroundImageUrl: string;
  linkText?: string;
  linkUrl?: string;
}

interface FederationGridProps {
  federations: Federation[];
  title?: string;
  description?: string;
}

function FederationGrid({ federations, title, description }: FederationGridProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      {title && <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>}
      {description && <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">{description}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {federations.map((federation) => (
          <FederationCard
            key={federation.id}
            id={federation.id}
            name={federation.name}
            description={federation.description}
            logoUrl={federation.logoUrl}
            backgroundImageUrl={federation.backgroundImageUrl}
            linkText={federation.linkText}
            linkUrl={federation.linkUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default FederationGrid;