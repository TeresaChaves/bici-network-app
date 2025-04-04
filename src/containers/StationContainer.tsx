// containers/StationContainer.tsx
import React, { useState, useEffect } from "react";
import { fetchStations, Station } from "../services/stationService";
import { StationList } from "../components/StationList";

interface StationContainerProps {
  networkId: string; 
}

export const StationContainer: React.FC<StationContainerProps> = ({ networkId }) => {

  

  const [stations, setStations] = useState<Station[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


useEffect(() => {
  const fetchData = async () => {
    console.log("Llamando API con Network ID:", networkId); 
    try {
      const data = await fetchStations(networkId);
      console.log("Datos recibidos:", data); 
      setStations(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error en fetchStations:", err);
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsLoading(false);
    }
  };

  if (networkId) fetchData();
}, [networkId]);


  // Mostrar loading mientras se cargan los datos
  if (isLoading) return <div>Loading...</div>;

  // Mostrar error si hubo un problema al obtener los datos
  if (error) return <div>Error: {error}</div>;

  // Si todo está bien, renderizar el componente StationList con los datos obtenidos
  return <StationList stations={stations!} />; // 'stations!' porque ya sabemos que no será null
};
