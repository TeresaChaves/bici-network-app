// pages/StationsPage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchStations } from "../services/stationService";


const StationsList= (   ) => {
  const { networkId } = useParams();
  const [stations, setStations] = useState<any[]>([]);
  

  useEffect(() => {
    console.log(networkId);
    if (networkId) {
      fetchStations(networkId).then((data) => setStations(data.network.stations));
    }
  }, [networkId]);

  return (
    <div>
      <Link to="/">← Volver</Link>
      <h1>Estaciones de {networkId}</h1>
      <ul>
        {stations.map((station) => (
          <li key={station.id}>
            {station.name} - {station.free_bikes} bicicletas libres
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationsList;
