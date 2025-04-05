import { useParams } from "react-router-dom";
import { fetchStations, Station } from "../services/stationService";
import StationDetailsPresenter from "../presenters/StationDetailsPresentes";
import { useQuery } from "@tanstack/react-query";
import { useStationUtils } from "../hooks/useStationUtils";
import { useTranslation } from "react-i18next";


const StationsList = () => {
  const { t } = useTranslation();  // Hook para acceder a las traducciones
  const { networkId } = useParams<{ networkId: string }>();
    const { availableBikes, generateGoogleMapsLink, relativeTime } = useStationUtils();

  const { data: stations, isLoading, isError, error } = useQuery<Station[], Error>({
    queryKey: ["stations", networkId],
    queryFn: () => fetchStations(networkId!,),
  });



  if (isError) {
    return <div>{t('common.error')}: {error?.message}</div>;
  }

  if (isLoading) return <div>{t('common.loading')}</div>;
  if (error) return <div>{t('common.error')}: {error}</div>;

  if (!stations || stations.length === 0) return <div>{t('stations.empty')}</div>;



  return (
    <StationDetailsPresenter
      stations={stations}
      networkId={networkId}
      generateGoogleMapsLink={generateGoogleMapsLink}
      avaliableBikes={availableBikes}
      relativeTime={relativeTime}
    />
  );
};

export default StationsList;
