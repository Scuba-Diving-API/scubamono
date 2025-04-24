import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import NewsDetailPage from "./pages/NewsDetailPage.tsx";
import Layout from "./components/layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/nyheder" element={<NewsPage />} />
          <Route path="/nyheder/:id" element={<NewsDetailPage />} />
          {/* Add more routes here for other pages */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
