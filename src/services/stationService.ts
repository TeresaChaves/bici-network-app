

export interface Station {
  id: string;
  name: string;
  lat: number;
  lon: number;
  available_bikes: number;  
  last_update: string;     
}

export const fetchStations = async (networkId: string) => {
  const response = await fetch(`https://api.citybik.es//v2/networks/${networkId}`);
  if (!response.ok) throw new Error("Error al obtener estaciones");
  return response.json();
};


// export const fetchStationById = async (stationId: string): Promise<Station> => {
//   const response = await fetch(`https://api.citybik.es/v2/stations/${stationId}`);
//   if (!response.ok) throw new Error("No se pudo obtener la estación");
//   return await response.json();
// };
