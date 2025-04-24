import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./pages/FrontPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import NewsDetailPage from "./pages/NewsDetailPage.tsx";
import Layout from "./components/layout/Layout.tsx";
import ParentLayout from "./components/layout/ParentLayout.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import DisciplinesPage from "./pages/DisciplinesPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import WebshopPage from "./pages/WebshopPage.tsx";
import ParentPage from "./pages/ParentPage.tsx";
import ParentAboutPage from "./pages/ParentAboutPage.tsx";
import ParentNewsPage from "./pages/ParentNewsPage.tsx";
import ParentContactPage from "./pages/ParentContactPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Parent site routes */}
        <Route element={<ParentLayout />}>
          <Route path="/" element={<ParentPage />} />
          <Route path="/om-dif" element={<ParentAboutPage />} />
          <Route path="/kontakt" element={<ParentContactPage />} />
          <Route path="/nyheder" element={<ParentNewsPage />} />
        </Route>

        {/* Diving federation subsite */}
        <Route path="/diving" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="nyheder" element={<NewsPage />} />
          <Route path="nyheder/:id" element={<NewsDetailPage />} />
          <Route path="uddannelse" element={<EducationPage />} />
          <Route path="discipliner" element={<DisciplinesPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="om-dsf" element={<AboutPage />} />
          <Route path="webshop" element={<WebshopPage />} />
          <Route path="webshop/min-konto" element={<WebshopPage />} />
          <Route path="webshop/handelsbetingelser" element={<WebshopPage />} />
        </Route>

        {/* Fallback routes */}
        <Route path="/uddannelse" element={<Navigate to="/diving/uddannelse" replace />} />
        <Route path="/discipliner" element={<Navigate to="/diving/discipliner" replace />} />
        <Route path="/events" element={<Navigate to="/diving/events" replace />} />
        <Route path="/om-dsf" element={<Navigate to="/diving/om-dsf" replace />} />
        <Route path="/webshop" element={<Navigate to="/diving/webshop" replace />} />

        {/* Add placeholder routes for other sports federations */}
        <Route path="/swimming" element={<div>Dansk Svømmeunion coming soon</div>} />
        <Route path="/sailing" element={<div>Dansk Sejlunion coming soon</div>} />
        <Route path="/rowing" element={<div>Dansk Forening for Rosport coming soon</div>} />
        <Route path="/triathlon" element={<div>Dansk Triathlon Forbund coming soon</div>} />
        <Route path="/canoekayak" element={<div>Dansk Kano og Kajak Forbund coming soon</div>} />
      </Routes>
    </Router>
  </StrictMode>
);
