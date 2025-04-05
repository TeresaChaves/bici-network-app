import { Routes, Route } from "react-router-dom";

import StationsPage from "../pages/StationsPage";
import NetworksPage from "../pages/NetworksPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NetworksPage />} />
      <Route path="/stations/:networkId" element={<StationsPage/>} />
    </Routes>
  );
}

export default AppRoutes;
