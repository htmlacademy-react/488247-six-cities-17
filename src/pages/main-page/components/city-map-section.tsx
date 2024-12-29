import MapSection from '../../../components/map-section/map-section';
import { getPoints } from '../../../data/data';
import { selectOffers } from '../../../features/cities/citiesSlice';
import { selectActiveOfferId } from '../../../features/maps/mapsSlice';
import { useAppSelector } from '../../../store/hooks';

export default function CityMapSection() {
  const offers = useAppSelector(selectOffers);
  const location = offers[0]?.city.location;
  const points = getPoints(offers);
  const activeOfferId = useAppSelector(selectActiveOfferId);

  return (
    <div className="cities__right-section">
      {offers.length &&
        <MapSection
          location={location}
          points={points}
          activeOfferId={activeOfferId}
          scalableWithWheel
        />}
    </div>
  );
}
