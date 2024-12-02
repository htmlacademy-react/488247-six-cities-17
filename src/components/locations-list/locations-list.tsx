import LocationItem from '../location-item/location-item';
import { CITIES, ACTIVE_CITY_INDEX } from '../../const';

export default function LocationsList() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city, index) => (
            <LocationItem
              key={city}
              city={city}
              active={index === ACTIVE_CITY_INDEX}
              tabItem
            />))}
        </ul>
      </section>
    </div>
  );
}
