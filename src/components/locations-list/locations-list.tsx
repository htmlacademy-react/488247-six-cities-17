import type { LocationCity } from '../../types';
import LocationItem from '../location-item/location-item';

const locations: LocationCity[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export default function LocationsList() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city, index) => <LocationItem key={city} city={city} index={index} />)}
        </ul>
      </section>
    </div>
  );
}
