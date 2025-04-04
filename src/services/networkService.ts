import axios from 'axios';


export interface Network {
  id: string;
  name: string;
  company: string;
  city: string;
}


export const fetchNetworks = async (): Promise<Network[]> => {
  const response = await axios.get("https://api.citybik.es/v2/networks");
  return response.data.networks; 
};
