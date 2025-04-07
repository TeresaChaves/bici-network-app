import { useQuery } from "@tanstack/react-query";
import { fetchNetworks, Network } from "../services/networkService";
import StationListPresenter from "../presenters/StationListPresenters";
import { useTranslation } from "react-i18next";

const StationContainer = () => {
  const { data: networks, isLoading, isError, error } = useQuery<Network[], Error>({
    queryKey: ['networks'],
    queryFn: fetchNetworks,
      staleTime: 1000 * 60 * 5, 
  });

  const  { t } = useTranslation(); // Hook para acceder a las traducciones

  if (isLoading) {
    return <div className="text-gray-500 text-center my-4 text-xl">{t("common.loading")}</div>;
  }

  if (isError) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return <StationListPresenter networks={networks!} />;
};

export default StationContainer;
