import React from "react";
import { Link } from "react-router-dom";

interface Station {
  id: string;
  name: string;
}

interface StationListProps {
  stations: Station[];
}

export const StationList: React.FC<StationListProps> = ({ stations }) => {
  return (
    <div className="space-y-4">
      {stations.map((station) => (
        <div
          key={station.id}
          className="p-4 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
        >
          <h3 className="text-xl font-semibold">{station.name}</h3>

          {/* Agregar enlace al detalle de la estación */}
          <Link
            to={`/station/${station.id}`}
            className="text-blue-500 hover:underline"
          >
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
};
