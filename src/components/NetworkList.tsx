
import React from "react";

interface Network {
  id: string;
  name: string;
  company: string;
  city: string;
}

interface NetworkListProps {
  networks: Network[]; 
}

export const NetworkList: React.FC<NetworkListProps> = ({ networks }) => {
  return (
    <div className="space-y-4">
      {networks.map((network) => (
        <div key={network.id} className="p-4 border border-gray-200 rounded-lg">
          <h3 className="text-xl font-semibold">{network.name}</h3>
          <p>{network.company}</p>
          <p>{network.city}</p>
        </div>
      ))}
    </div>
  );
};
