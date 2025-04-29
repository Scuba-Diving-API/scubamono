import { Route } from "react-router-dom";
import IceHockeyLayout from "../components/layout/IceHockeyLayout";
import IceHockeyFrontPage from "../pages/icehockey/IceHockeyFrontPage";
import IceHockeyNewsPage from "../pages/icehockey/IceHockeyNewsPage";
import IceHockeyNewsDetailPage from "../pages/icehockey/IceHockeyNewsDetailPage";

// Ice hockey federation routes
const IceHockeyRoutes = (
  <Route key="icehockey" path="/icehockey" element={<IceHockeyLayout />}>
    <Route index element={<IceHockeyFrontPage />} />
    <Route path="nyheder" element={<IceHockeyNewsPage />} />
    <Route path="nyheder/:id" element={<IceHockeyNewsDetailPage />} />
    <Route
      path="turnering"
      element={
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Turnering</h1>
          <p>Turneringsindhold kommer snart...</p>
        </div>
      }
    />
    <Route
      path="klubinfo"
      element={
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Klubinfo</h1>
          <p>Klubinfo kommer snart...</p>
        </div>
      }
    />
    <Route
      path="uddannelse"
      element={
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Uddannelse</h1>
          <p>Uddannelsesindhold kommer snart...</p>
        </div>
      }
    />
    <Route
      path="landshold"
      element={
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Landshold</h1>
          <p>Landsholdsindhold kommer snart...</p>
        </div>
      }
    />
    <Route
      path="integritet"
      element={
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Integritet</h1>
          <p>Integritetsindhold kommer snart...</p>
        </div>
      }
    />
    <Route
      path="udvikling"
      element={
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Udvikling</h1>
          <p>Udviklingsindhold kommer snart...</p>
        </div>
      }
    />
    <Route
      path="ny-til-ishockey"
      element={
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Ny til ishockey</h1>
          <p>Information for nye ishockey-spillere kommer snart...</p>
        </div>
      }
    />
    <Route
      path="shop"
      element={
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Shop</h1>
          <p>Shop kommer snart...</p>
        </div>
      }
    />
  </Route>
);

export default IceHockeyRoutes;
