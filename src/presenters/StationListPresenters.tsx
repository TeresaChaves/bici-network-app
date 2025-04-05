import { Link } from "react-router-dom";
import { Network } from "../services/networkService";
import { useTranslation } from "react-i18next"; 
import { GiWorld } from "react-icons/gi";

interface StationListPresenterProps {
  networks: Network[];
}

const StationListPresenter = ({ networks }: StationListPresenterProps) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg mt-4 mb-4">
      <h1 className="text-2xl font-bold text-center mb-6">{t("networks.title")}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {networks.map((net) => (
          <Link
            to={`/stations/${net.id}`}
            key={net.id}
            className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 hover:bg-gray-50"
          >
            <h2 className="text-lg font-semibold text-blue-600 mb-1">{net.name}</h2>
            <p className="--text-sm--line-height:text-gray-700">
              <GiWorld />{net.location.city}, {net.location.country}
            </p>
            <p className="text-sm text-gray-500 mt-1 italic">
              {net.company}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StationListPresenter;
