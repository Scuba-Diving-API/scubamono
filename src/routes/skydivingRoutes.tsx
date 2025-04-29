import { Route } from "react-router-dom";
import SkydivingLayout from "../components/layout/SkydivingLayout";
import SkydivingFrontPage from "../pages/skydiving/SkydivingFrontPage";
import SkydivingNewsPage from "../pages/skydiving/SkydivingNewsPage";

// Main skydiving route
const mainSkydivingRoute = (
  <Route key="skydiving" path="/skydiving" element={<SkydivingLayout />}>
    <Route index element={<SkydivingFrontPage />} />
    <Route path="nyheder" element={<SkydivingNewsPage />} />
    <Route
      path="aktiviteter"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Faldskærmsaktiviteter</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Udforsk de forskellige discipliner og aktiviteter inden for faldskærmssport.</p>
        </div>
      }
    />
    <Route
      path="kurser"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Kurser & Uddannelse</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Find information om kurser, uddannelse og certificeringer inden for faldskærmssport.</p>
        </div>
      }
    />
    <Route
      path="konkurrencer"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Konkurrencer</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Information om nationale og internationale konkurrencer og events i faldskærmssport.</p>
        </div>
      }
    />
    <Route
      path="find-klub"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Find en Klub</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Find en faldskærmsklub i nærheden af dig og kom i gang med sporten.</p>
        </div>
      }
    />
    <Route
      path="om-os"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Om Dansk Faldskærms Union</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Information om Dansk Faldskærms Union, vores historie, mission og organisation.</p>
        </div>
      }
    />
    <Route
      path="kontakt"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Kontakt</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Kontakt Dansk Faldskærms Union med spørgsmål eller henvendelser.</p>
        </div>
      }
    />
    <Route
      path="webshop"
      element={
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Webshop</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Køb DFU-merchandise, udstyr og materialer til faldskærmssport.</p>
        </div>
      }
    />
  </Route>
);

// Fallback routes for skydiving as an array
const fallbackRoutes = [
  // No fallback routes needed for now, but could be added similar to diving fallback routes if necessary
];

// Export both the main route and fallback routes
const SkydivingRoutes = mainSkydivingRoute;
export const SkydivingFallbackRoutes = fallbackRoutes;

export default SkydivingRoutes;
