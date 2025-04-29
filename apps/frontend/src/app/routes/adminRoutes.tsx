import { Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/admin/LoginPage";
import AdminLayout from "../pages/admin/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import NewsManagementPage from "../pages/admin/NewsManagementPage";
import EventsManagementPage from "../pages/admin/EventsManagementPage";
import EducationManagementPage from "../pages/admin/EducationManagementPage";
import DisciplinesManagementPage from "../pages/admin/DisciplinesManagementPage";
import AuthGuard from "../pages/admin/AuthGuard";

// Main admin routes for diving section
const divingAdminRoutes = (
  <Route path="/diving/admin">
    <Route path="login" element={<LoginPage />} />
    <Route
      element={
        <AuthGuard>
          <AdminLayout />
        </AuthGuard>
      }
    >
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="news" element={<NewsManagementPage />} />
      <Route path="events" element={<EventsManagementPage />} />
      <Route path="education" element={<EducationManagementPage />} />
      <Route path="disciplines" element={<DisciplinesManagementPage />} />

      {/* Redirect to dashboard if just /diving/admin is accessed */}
      <Route path="" element={<Navigate to="/diving/admin/dashboard" replace />} />
    </Route>
  </Route>
);

export default divingAdminRoutes;
