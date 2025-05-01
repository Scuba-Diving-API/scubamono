import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { sportsFederations } from '../utils/federations';
import ParentHero from '../components/parent/ParentHero';

function ParentPage() {
  const [hoveredFederation, setHoveredFederation] = useState<string | null>(
    null
  );
  const navigate = useNavigate();

  // Handle federation click with scroll to top
  const handleFederationClick = (e: React.MouseEvent, federationId: string) => {
    e.preventDefault();
    // Navigate programmatically
    navigate(`/${federationId}`);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      <ParentHero />

      <section>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Discover Our Sports Federations
          </h2>
          <p className="max-w-3xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Cras
            mattis consectetur purus sit amet fermentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-400">
          {sportsFederations.map((federation) => {
            const isHovered = hoveredFederation === federation.id;

            return (
              <Link
                key={federation.id}
                to={`/${federation.id}`}
                className="min-h-[500px] flex flex-col justify-center items-center hover:opacity-90 hover:bg-zinc-700 transition-opacity relative overflow-hidden"
                onMouseEnter={() => setHoveredFederation(federation.id)}
                onMouseLeave={() => setHoveredFederation(null)}
                onClick={(e) => handleFederationClick(e, federation.id)}
              >
                {federation.video && (
                  <video
                    src={federation.video}
                    className="absolute inset-0 w-full h-full object-fill opacity-70"
                    muted
                    loop
                    playsInline
                    autoPlay={isHovered}
                    ref={(el) => {
                      if (el) {
                        if (isHovered) {
                          el.play().catch((e) =>
                            console.error('Error playing video:', e)
                          );
                        } else {
                          el.pause();
                        }
                      }
                    }}
                  />
                )}
                <div className="p-8 text-center relative z-10">
                  {federation.logo && (
                    <div className="mb-6 h-20 flex items-center justify-center">
                      <img
                        src={federation.logo}
                        alt={`${federation.name} logo`}
                        className="h-full object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {federation.name}
                  </h3>
                  <p className="text-white opacity-90">
                    {federation.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ParentPage;
