import { Route } from "react-router-dom";

// This is a template for the ice hockey federation routes
// Similar to the diving routes, but with paths adjusted for icehockey
const IceHockeyRoutes = (
  <Route key="icehockey" path="/icehockey" element={<div>Ishockey</div>}>
    <Route index element={<div>Forside</div>} />
    <Route path="nyheder" element={<div>Ice Hockey News Coming Soon</div>} />
    <Route path="klubber" element={<div>Ice Hockey Clubs Coming Soon</div>} />
    <Route path="turneringer" element={<div>Ice Hockey Tournaments Coming Soon</div>} />
    <Route path="landsholdene" element={<div>National Teams Coming Soon</div>} />
    <Route path="om-diu" element={<div>About DIU Coming Soon</div>} />
  </Route>
);

export default IceHockeyRoutes;
