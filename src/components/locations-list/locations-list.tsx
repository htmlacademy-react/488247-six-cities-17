import LocationItem from '../location-item/location-item';

import { CITIES } from '../../const';

type LocationsListProps = {
  activeCityIndex: number;
  onHandleClick: (i: number) => void;
}

export default function LocationsList({activeCityIndex, onHandleClick }: LocationsListProps) {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city, index) => (
            <LocationItem
              key={city}
              city={city}
              index={index}
              activeIndex={activeCityIndex}
              tabItem
              onHandleClick={onHandleClick}
            />))}
        </ul>
      </section>
    </div>
  );
}
