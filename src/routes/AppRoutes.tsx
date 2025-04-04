
import { Routes, Route } from "react-router-dom";
import { StationContainer } from "../containers/StationContainer";
import { useParams } from "react-router-dom";
import { NetworkContainer } from "../containers/NetworkContainer";

const StationPage = () => {
  const { networkId } = useParams<{ networkId: string }>();
  return <StationContainer networkId={networkId || "bicing"} />;
};

function AppRoutes() {
  return (
    <Routes>
                <Route path="/" element={<NetworkContainer />} />
        <Route path="/network/:networkId" element={<StationPage/>} />
    </Routes>
  );
}

export default AppRoutes;
