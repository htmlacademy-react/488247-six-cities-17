import MapSection from '../../../components/map-section/map-section';
import { selectOffers } from '../../../features/cities/citiesSlice';
import { selectActiveOfferId, selectLocation, selectPoints } from '../../../features/maps/mapsSlice';
import { useAppSelector } from '../../../store/hooks';

export default function CityMapSection() {
  const offersCount = useAppSelector(selectOffers).length;
  const location = useAppSelector(selectLocation);
  const points = useAppSelector(selectPoints);
  const activeOfferId = useAppSelector(selectActiveOfferId);

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
