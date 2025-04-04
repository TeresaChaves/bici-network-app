// // containers/NetworkContainer.tsx
// import  { useState, useEffect } from "react";
// import { fetchNetworks, Network } from "../services/networkService";
// import { NetworkList } from "../components/NetworkList";

// export const NetworkContainer = () => {
//   // Estados para manejar los datos, el estado de carga y el error
//   const [networks, setNetworks] = useState<Network[] | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchNetworks(); // Llamada a la función que obtiene las redes
//         setNetworks(data); // Guardar los datos en el estado
//         setIsLoading(false); // Cambiar el estado de carga
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Something went wrong"); // Manejar el error
//         setIsLoading(false); // Cambiar el estado de carga
//       }
//     };

//     fetchData(); // Llamar a la función para obtener los datos
//   }, []); // El array vacío [] significa que solo se ejecutará al montar el componente

//   // Mostrar loading mientras se cargan los datos
//   if (isLoading) return <div>Loading...</div>;

//   // Mostrar error si hubo un problema al obtener los datos
//   if (error) return <div>Error: {error}</div>;

//   // Si todo está bien, renderizar el componente NetworkList con los datos
//   return <NetworkList networks={networks!} />;
// };
