// import { Link } from "react-router-dom";
// import { getThemeColors } from "../utils/federationThemes";
// import { sportsFederations } from "../utils/federations";
import ParentHero from "../components/parent/ParentHero";

function ParentPage() {
  return (
    <div className="bg-white min-h-screen">
      <ParentHero />

      <section>
        <div className="grid grid-cols-2">
          <div>
            <div className="bg-red-600 min-h-96">Test</div>
            <div className="bg-yellow-500 min-h-96">Test</div>
          </div>
          <div>
            <div className="bg-blue-600 min-h-96">Test</div>
            <div className="bg-green-600 min-h-96">Test</div>
          </div>
        </div>
      </section>

      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Vores vandsportsforbund</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsFederations.map((federation) => {
              const themeColors = getThemeColors(federation.id);
              return (
                <Link key={federation.id} to={`/${federation.id}`} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div style={{ height: "8px", backgroundColor: themeColors.primary }}></div>
                  <div className="p-6">
                    {federation.logo && (
                      <div className="mb-4 h-16 flex items-center justify-center">
                        <img src={federation.logo} alt={`${federation.name} logo`} className="h-full object-contain" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{federation.name}</h3>
                    <p className="text-gray-600">{federation.description}</p>
                    <div className="mt-4 flex justify-end">
                      <span style={{ color: themeColors.primary }} className="font-medium flex items-center">
                        Besøg
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default ParentPage;
