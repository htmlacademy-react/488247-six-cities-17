import type { Location } from '../../types/types';
import LocationItem from './location-item';

const locations: Location[] = [
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
