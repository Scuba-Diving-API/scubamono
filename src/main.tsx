import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import { routes } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  </StrictMode>
);
