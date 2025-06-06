import ParentRoutes from "./parentRoutes";
import DivingRoutes, { DivingFallbackRoutes } from "./divingRoutes";
import PlaceholderRoutes from "./placeholderRoutes";
import IceHockeyRoutes from "./icehockeyRoutes";
import ArcheryRoutes, { ArcheryFallbackRoutes } from "./archeryRoutes";
import SkydivingRoutes, { SkydivingFallbackRoutes } from "./skydivingRoutes";
import divingAdminRoutes from "./adminRoutes";

// Export all routes as JSX elements directly, not as a component
export const routes = [ParentRoutes, DivingRoutes, IceHockeyRoutes, ArcheryRoutes, SkydivingRoutes, divingAdminRoutes, ...DivingFallbackRoutes, ...ArcheryFallbackRoutes, ...SkydivingFallbackRoutes, ...PlaceholderRoutes];
