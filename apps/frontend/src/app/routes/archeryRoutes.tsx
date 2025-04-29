import { Route } from "react-router-dom";
import ArcheryLayout from "../components/layout/ArcheryLayout";
import ArcheryFrontPage from "../pages/bueskydning/ArcheryFrontPage";
import ArcheryNewsPage from "../pages/bueskydning/ArcheryNewsPage";

// Main archery route
const mainArcheryRoute = (
  <Route key="bueskydning" path="/bueskydning" element={<ArcheryLayout />}>
    <Route index element={<ArcheryFrontPage />} />
    <Route path="nyheder" element={<ArcheryNewsPage />} />
    <Route
      path="stævner"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Kommende Stævner</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Her finder du oversigten over kommende stævner og arrangementer i bueskydning.</p>
        </div>
      }
    />
    <Route
      path="kurser"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Kurser & Uddannelse</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Her finder du oversigten over kommende kurser og uddannelsesmuligheder i bueskydning.</p>
        </div>
      }
    />
    <Route
      path="udvalg"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Udvalg</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Her finder du information om Bueskydning Danmarks udvalg og deres arbejde.</p>
        </div>
      }
    />
    <Route
      path="find-klub"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Find en Klub</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Her kan du finde en bueskydningsklub i nærheden af dig.</p>
        </div>
      }
    />
    <Route
      path="om-os"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Om Bueskydning Danmark</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Bueskydning Danmark er den øverste faglige myndighed inden for bueskydning i Danmark, med det formål at fremme og udvikle sporten.</p>
        </div>
      }
    />
    <Route
      path="kontakt"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Kontakt</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Her finder du kontaktinformation til Bueskydning Danmarks sekretariat og medarbejdere.</p>
        </div>
      }
    />
  </Route>
);

// Fallback routes for archery as an array
const fallbackRoutes = [
  // No fallback routes needed for now, but could be added if necessary
];

// Export both the main route and fallback routes
const ArcheryRoutes = mainArcheryRoute;
export const ArcheryFallbackRoutes = fallbackRoutes;

export default ArcheryRoutes;
