import { Route } from "react-router-dom";
import ParentLayout from "../components/layout/ParentLayout";
import ParentPage from "../pages/ParentPage";
import ParentAboutPage from "../pages/ParentAboutPage";
import ParentContactPage from "../pages/ParentContactPage";
import ParentNewsPage from "../pages/ParentNewsPage";

const ParentRoutes = (
  <Route key="parent" element={<ParentLayout />}>
    <Route path="/" element={<ParentPage />} />
    <Route path="/om-os" element={<ParentAboutPage />} />
    <Route path="/kontakt" element={<ParentContactPage />} />
    <Route path="/nyheder" element={<ParentNewsPage />} />
  </Route>
);

export default ParentRoutes;
