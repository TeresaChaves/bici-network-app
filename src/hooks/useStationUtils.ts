import { Station } from "../services/stationService";
import { useTranslation } from "react-i18next";

export const useStationUtils = () => {
  const { t } = useTranslation();

  // Función para obtener la etiqueta de nivel de bicicletas disponibles
  const getBikeLevelLabel = (freeBikes: number): string => {
    if (freeBikes > 10) return 'high';
    if (freeBikes > 5) return 'medium';
    if (freeBikes > 0) return 'low';
    return 'none';
  };

  // Función para obtener la traducción correspondiente al nivel de bicicletas
  const availableBikes = (station: Station): string => {
    const bikeLevel = getBikeLevelLabel(station.free_bikes);
    return t(`stations.bikeLevels.${bikeLevel}`);
  };

  // Función para generar el enlace de Google Maps
  const generateGoogleMapsLink = (latitude: number, longitude: number, name?: string): string => {
    const location = `https://www.google.com/maps?q=${latitude},${longitude}`;
    return name ? `${location} (${name})` : location;
  };

  // Función para mostrar el tiempo relativo
  const relativeTime = (timestamp: string): string => {
    const date = new Date(timestamp);
    const diff = Date.now() - date.getTime();
    return formatRelativeTime(diff);
  };

  // Función auxiliar para formatear el tiempo relativo
  const formatRelativeTime = (diff: number): string => {
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (seconds < 60) return `${seconds} ${t('stations.time.seconds')}`;
    if (minutes < 60) return `${minutes} ${t('stations.time.minutes')}`;
    if (hours < 24) return `${hours} horas`;
    if (days < 7) return `${days} días`;
    if (days < 30) return `${Math.floor(days / 7)} semanas`;
    if (days < 365) return `${Math.floor(days / 30)} meses`;
    return `${Math.floor(days / 365)} años`;
  };

  return { availableBikes, generateGoogleMapsLink, relativeTime };
};
