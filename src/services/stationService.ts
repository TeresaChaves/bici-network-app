

export interface Station {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  free_bikes: number;
  empty_slots: number;

  extra: {
    uid: number;
    normal_bikes: number;
    ebikes: number;
    slots: number;
    online: boolean;
  };
  
}

export const fetchStations = async (networkId: string) => {
  const response = await fetch(`https://api.citybik.es/v2/networks/${networkId}?fields=stations.name,stations.id,stations.timestamp,stations.free_bikes`);
  if (!response.ok) throw new Error("Error al obtener estaciones");
  const data = await response.json();
  return data.network.stations;
};

