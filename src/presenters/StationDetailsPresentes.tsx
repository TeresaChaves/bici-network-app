// presenters/StationDetailsPresenter.tsx
import { Station } from "../services/stationService";
import { useTranslation } from "react-i18next";
import { FaBicycle } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { SiGooglemaps } from "react-icons/si";
import { TfiMapAlt } from "react-icons/tfi";
import { CiNoWaitingSign } from "react-icons/ci";

interface StationDetailsPresenterProps {
  stations:   Station[];
  networkId: string | undefined;
  avaliableBikes: (station: Station) => string;
  
  generateGoogleMapsLink: (latitude: number, longitude: number, streetName?: string) => string;
  relativeTime: (timestamp: string) => string;

}


const StationDetailsPresenter = ({ stations, networkId, avaliableBikes, generateGoogleMapsLink, relativeTime }: StationDetailsPresenterProps) => {
  
const { t } = useTranslation();

const getAvailability = (station: Station) => {
  const availability = avaliableBikes(station);
  if (availability === t("stations.bikeLevels.high")) {
    return {
      icon: (
        <>
          <FaBicycle className="text-green-500 size-10" />
          <FaBicycle className="text-green-500 size-10" />
          <FaBicycle className="text-green-500 size-10" />
        </>
      ),
      color: "text-red-500",
      text: t("stations.availability") + ": " + availability
    };
  } else if (availability === t("stations.bikeLevels.medium") ) {
    return {
      icon: (
        <>
          <FaBicycle className="text-yellow-500 size-10" />
          <FaBicycle className="text-yellow-500 size-10" />
        </>
      ),
      color: "text-yellow-500",
      text: t("stations.availability") + ": " + availability
    };
  } else if (availability === t("stations.bikeLevels.low") ) {
    return {
      icon: (
        <FaBicycle className="text-red-500 size-10" />
      ),
      color: "text-green-500",
      text: t("stations.availability") + ": " + availability
    };
  } else if (availability === t("stations.bikeLevels.none") ) {
    return {
      icon: (
        <CiNoWaitingSign />
      ),
      color: "text-500",
      text: t("stations.availability") + ": " + availability
    };
  }
  return {
    icon: null,
    color: "text-gray-500",
    text: t("stations.availability") + ": " + availability
  };
};


  
  return (
   <div className="container mx-auto p-4">
  <a
    href="/"
    className="inline-block bg-blue-500 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer text-center">
    {t("common.back")}
      </a>
      

    <h1 className="text-2xl font-bold text-center">
      {t("stations.stations_of")}{" "}
      <strong className="text-blue-500">{networkId?.toUpperCase()}</strong>
    </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
    {stations.map((station) => (
      <div
        key={station.id}
        className="p-6 border border-gray-300 rounded-lg shadow-md flex flex-col justify-between"
      >
        <h2 className="text-2xl font-bold mb-2">
          {station.name} {getAvailability(station).icon}
        </h2>

        <p className="flex items-center gap-2 text-gray-700 text-m mb-1">
          <TfiReload className="size-6" />
          <span className="font-medium">{t("stations.date")}:</span>
          <span className="text-gray-900 font-semibold">
            {relativeTime(station.timestamp)}
          </span>
        </p>

        <p className="flex items-center gap-2 text-gray-700 --text-sm--line-height mb-1">
          <FaBicycle  className="size-6" />
          <span className="font-medium">{getAvailability(station).text}</span>
        </p>

        <p className="flex items-center gap-2 text-gray-700 --text-sm--line-height mb-2">
          <SiGooglemaps className="size-6" />
          <span className="font-medium">{t("stations.location")}:</span>
          <span className="text-gray-900">{station.name}</span>
        </p>

        <a
          href={generateGoogleMapsLink(
            station.latitude,
            station.longitude,
            station.name
          )}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:underline font-bold text-sm mt-1"
        >
          <TfiMapAlt className="size-6" />
          {t("stations.view_in_google_maps")}
        </a>
      </div>
    ))}
  </div>
</div>

  );
};

export default StationDetailsPresenter;
