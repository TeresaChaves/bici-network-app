import axios from 'axios';


export interface Network {
  id: string;
  name: string;
  company: string;
  location: {
    city: string;
    latitude: number;
    longitude: number;
    country: string;
  };
  href: string;


}


export const fetchNetworks = async (): Promise<Network[]> => {
  const response = await axios.get("https://api.citybik.es/v2/networks");
  return response.data.networks; 
};
