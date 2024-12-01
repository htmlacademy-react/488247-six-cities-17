import OfferCard from '../../../components/offer-card/offer-card';
import { getFavorites } from '../../../data/data';
import type { Offer } from '../../../types';
import { nanoid } from '@reduxjs/toolkit';
import LocationItem from '../../../components/location-item/location-item';

type FavoritePlacesListProps = {
  offers: Offer[];
}

function FavoritePlacesList({ offers }: FavoritePlacesListProps) {
  return (
    offers.map(
      (offer) => <OfferCard key={offer.id} {...offer} prefix='favorites' />
    )
  );
}

export default function FavoritesList() {
  const favorites = getFavorites();

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
              <FavoritePlacesList offers={favorites[city]} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
