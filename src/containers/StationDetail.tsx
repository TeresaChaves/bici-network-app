// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchStationById, Station } from "../services/stationService";

// export const StationDetail: React.FC = () => {
//   const { stationId } = useParams<{ stationId: string }>(); // Obtener el ID de la estación desde la URL
//   const [station, setStation] = useState<Station | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (stationId) {
//           const data = await fetchStationById(stationId);
//           setStation(data);
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Error al cargar la estación");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [stationId]);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!station) return <div>No se encontró la estación.</div>;

//   return (
//     <div className="p-6 border border-gray-300 rounded-lg">
//       <h2 className="text-2xl font-bold">{station.name}</h2>
//       <p>🔄 Última actualización: {new Date(station.last_update).toLocaleString()}</p>

//       <button
//         onClick={() => window.history.back()}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Volver
//       </button>
//     </div>
//   );
// };
