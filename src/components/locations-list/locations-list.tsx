import LocationItem from '../location-item/location-item';
import { LOCATIONS } from '../../const';

export default function LocationsList() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((city, index) => (
            <LocationItem
              key={city}
              city={city}
              index={index}
              tabItem
            />))}
        </ul>
      </section>
    </div>
  );
}
