import { Route, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import FrontPage from '../pages/FrontPage';
import NewsPage from '../pages/NewsPage';
import NewsDetailPage from '../pages/NewsDetailPage';
import EducationPage from '../pages/EducationPage';
import DisciplinesPage from '../pages/DisciplinesPage';
import EventsPage from '../pages/EventsPage';
import AboutPage from '../pages/AboutPage';
import WebshopPage from '../pages/WebshopPage';
import FindKlubPage from '../pages/diving/FindKlubPage';

// Main diving route
const mainDivingRoute = (
  <Route key="diving" path="/diving" element={<Layout />}>
    <Route index element={<FrontPage />} />
    <Route path="nyheder" element={<NewsPage />} />
    <Route path="nyheder/:id" element={<NewsDetailPage />} />
    <Route path="uddannelse" element={<EducationPage />} />
    <Route path="discipliner" element={<DisciplinesPage />} />
    <Route path="events" element={<EventsPage />} />
    <Route path="om-dsf" element={<AboutPage />} />
    <Route path="find-klub" element={<FindKlubPage />} />
    <Route path="webshop" element={<WebshopPage />} />
    <Route path="webshop/min-konto" element={<WebshopPage />} />
    <Route path="webshop/handelsbetingelser" element={<WebshopPage />} />
  </Route>
);

// Fallback routes for diving as an array
const fallbackRoutes = [
  <Route
    key="uddannelse"
    path="/uddannelse"
    element={<Navigate to="/diving/uddannelse" replace />}
  />,
  <Route
    key="discipliner"
    path="/discipliner"
    element={<Navigate to="/diving/discipliner" replace />}
  />,
  <Route
    key="events"
    path="/events"
    element={<Navigate to="/diving/events" replace />}
  />,
  <Route
    key="om-dsf"
    path="/om-dsf"
    element={<Navigate to="/diving/om-dsf" replace />}
  />,
  <Route
    key="find-klub"
    path="/find-klub"
    element={<Navigate to="/diving/find-klub" replace />}
  />,
  <Route
    key="webshop"
    path="/webshop"
    element={<Navigate to="/diving/webshop" replace />}
  />,
];

// Export both the main route and fallback routes
const DivingRoutes = mainDivingRoute;
export const DivingFallbackRoutes = fallbackRoutes;

export default DivingRoutes;
