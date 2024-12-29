import LocationItem from '../location-item/location-item';

import { CITIES } from '../../const';

export default function LocationsList() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => <LocationItem key={city} city={city} tabItem />)}
        </ul>
      </section>
    </div>
  );
}
