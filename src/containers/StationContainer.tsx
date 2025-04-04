// pages/NetworksPage.tsx
import { useEffect, useState } from "react";
import { fetchNetworks, Network } from "../services/networkService";
import { Link } from "react-router-dom";

const StationContainer = () => {
  const [networks, setNetworks] = useState<Network[]>([]);
  

  useEffect(() => {
    fetchNetworks().then(setNetworks);
  }, []);

  return (
    <div>
      <h1>Redes de bicicletas</h1>
      <ul>
        {networks.map((net) => (
          <li key={net.id}>
            <Link to={`/stations/${net.id}`}>
              {net.name} - {net.location.city}, {net.location.country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationContainer;
