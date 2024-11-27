import OfferCard from '../../../components/offer-card/offer-card';
import { favorites } from '../../../data/data';
import type { Offer } from '../../../types';
import { nanoid } from '@reduxjs/toolkit';
import LocationItem from '../../../components/location-item/location-item';

type FavoritePlacesListProps = {
  item: Offer[];
}

function FavoritePlacesList({ item }: FavoritePlacesListProps) {
  return (
    item.map(
      (place) => <OfferCard key={place.id} {...place} element='favorites' />
    )
  );
}

export default function FavoritesList() {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favorites).map((city) => (
          <li
            key={nanoid()}
            className="favorites__locations-items"
          >
            <div className="favorites__locations locations locations--current">
              <LocationItem city={city} />
            </div>
            <div className="favorites__places">
              <FavoritePlacesList item={favorites[city]} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
