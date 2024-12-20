import MapSection from '../../../components/map-section/map-section';

import { Location, Point } from '../../../types';

type CityMapSectionProps = {
  offersCount: number;
  cityLocation: Location;
  points: Point[];
  activeOfferId: string | null;
}

export default function CityMapSection({
  offersCount,
  cityLocation,
  points,
  activeOfferId,
}: CityMapSectionProps) {
  return (
    <div className="cities__right-section">
      {offersCount &&
        <MapSection
          cityLocation={cityLocation}
          points={points}
          activeOfferId={activeOfferId}
          scalable
        />}
    </div>
  );
}
