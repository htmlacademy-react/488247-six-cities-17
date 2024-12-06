import MapSection from '../../../components/map-section/map-section';

import { Settings } from '../../../const';

export default function CitiesMapSection() {
  return (
    <div className="cities__right-section">
      {Settings.OffersCount > 0 && <MapSection />}
    </div>
  );
}
