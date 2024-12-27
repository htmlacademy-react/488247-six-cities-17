import MapSection from '../../../components/map-section/map-section';
import { selectOffers } from '../../../features/cities/citiesSlice';
import { useAppSelector } from '../../../store/hooks';

import { Location, Point } from '../../../types';

type CityMapSectionProps = {
  location: Location;
  points: Point[];
  activeOfferId: string | null;
}

export default function CityMapSection({
  location,
  points,
  activeOfferId,
}: CityMapSectionProps) {
  const offersCount = useAppSelector(selectOffers).length;
  return (
    <div className="cities__right-section">
      {offersCount &&
        <MapSection
          location={location}
          points={points}
          activeOfferId={activeOfferId}
          scalableWithWheel
        />}
    </div>
  );
}
