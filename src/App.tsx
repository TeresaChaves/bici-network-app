import { NetworkContainer } from "./containers/NetworkContainer";
import { StationContainer } from "./containers/StationContainer";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const App = () => {
  const { t } = useTranslation();

  const [selectedNetworkId] = useState<string | null>(null);


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t('bikeNetworks')}</h1>
      {!selectedNetworkId ? (
        <NetworkContainer />
      ) : (
        <StationContainer networkId={selectedNetworkId} />
      )}
    </div>
  );
};

export default App;
