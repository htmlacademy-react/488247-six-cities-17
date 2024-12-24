import MapSection from '../../../components/map-section/map-section';

import { Location, Point } from '../../../types';

type CityMapSectionProps = {
  offersCount: number;
  location: Location;
  points: Point[];
  activeOfferId: string | null;
}

export default function CityMapSection({
  offersCount,
  location,
  points,
  activeOfferId,
}: CityMapSectionProps) {
  return (
    <div className="cities__right-section">
      {offersCount &&
        <MapSection
          location={location}
          points={points}
          activeOfferId={activeOfferId}
          weelScalable
        />}
    </div>
  );
}
