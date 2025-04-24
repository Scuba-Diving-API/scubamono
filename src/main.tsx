import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/FrontPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import NewsDetailPage from "./pages/NewsDetailPage.tsx";
import Layout from "./components/layout/Layout.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import DisciplinesPage from "./pages/DisciplinesPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import WebshopPage from "./pages/WebshopPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/nyheder" element={<NewsPage />} />
          <Route path="/nyheder/:id" element={<NewsDetailPage />} />
          <Route path="/uddannelse" element={<EducationPage />} />
          <Route path="/discipliner" element={<DisciplinesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/om-dsf" element={<AboutPage />} />
          <Route path="/webshop" element={<WebshopPage />} />
          <Route path="/webshop/min-konto" element={<WebshopPage />} />
          <Route path="/webshop/handelsbetingelser" element={<WebshopPage />} />
          {/* Add more routes here for other pages */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
