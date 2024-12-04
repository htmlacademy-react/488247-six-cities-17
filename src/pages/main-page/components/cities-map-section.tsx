import MapSection from '../../../components/map-section/map-section';

import { OFFERS_COUNT } from '../../../const';

export default function CitiesMapSection() {
  return (
    <div className="cities__right-section">
      {OFFERS_COUNT > 0 && <MapSection />}
    </div>
  );
}
