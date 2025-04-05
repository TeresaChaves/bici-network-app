

export interface Network {
  company: string;
  href: string;
  location: {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
  };
  name: string;
  id: string;
}



export const fetchNetworks = async (): Promise<Network[]> => {
  const response = await fetch(`https://api.citybik.es/v2/networks?fields=id,name,location.city,company`);;
  const data = await response.json();
  return data.networks;
};

