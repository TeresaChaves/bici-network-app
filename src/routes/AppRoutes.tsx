import { Routes, Route } from "react-router-dom";

import StationContainer from "../containers/StationContainer";
import StationList from "../components/StationList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StationContainer />} />
      <Route path="/stations/:networkId" element={<StationList />} />
    </Routes>
  );
}

export default AppRoutes;
