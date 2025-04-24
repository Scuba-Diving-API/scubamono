import { Link } from "react-router-dom";
import { useState } from "react";
import { sportsFederations } from "../utils/federations";
import ParentHero from "../components/parent/ParentHero";

function ParentPage() {
  const [hoveredFederation, setHoveredFederation] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <ParentHero />

      <section>
        <div className="grid grid-cols-2 bg-zinc-400">
          {sportsFederations.map((federation) => {
            const isHovered = hoveredFederation === federation.id;

            return (
              <Link
                key={federation.id}
                to={`/${federation.id}`}
                className="min-h-96 flex flex-col justify-center items-center hover:opacity-90 hover:bg-zinc-700 transition-opacity relative overflow-hidden"
                onMouseEnter={() => setHoveredFederation(federation.id)}
                onMouseLeave={() => setHoveredFederation(null)}
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
                          el.play().catch((e) => console.error("Error playing video:", e));
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
                      <img src={federation.logo} alt={`${federation.name} logo`} className="h-full object-contain" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3 text-white">{federation.name}</h3>
                  <p className="text-white opacity-90">{federation.description}</p>
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
