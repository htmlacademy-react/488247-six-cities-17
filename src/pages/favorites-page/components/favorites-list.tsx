import { nanoid } from '@reduxjs/toolkit';

import OfferCard from '../../../components/offer-card/offer-card';
import LocationItem from '../../../components/location-item/location-item';

import { getFavorites } from '../../../data/data';
import type { CityName, Offers } from '../../../types';
import { BlockPrefix, CITIES } from '../../../const';

type FavoritePlacesListProps = {
  offers: Offers;
}

type FavoritesListProps = {
  onHandleClick: (i: number) => void;
}

function FavoritePlacesList({ offers }: FavoritePlacesListProps) {
  return offers.map(
    (offer) => (
      <OfferCard
        key={offer.id}
        {...offer}
        prefix={BlockPrefix.Favorites}
        width={150}
        height={110}
      />)
  );
}

export default function FavoritesList({onHandleClick}: FavoritesListProps) {
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
              <LocationItem
                city={city}
                index={CITIES.indexOf(city as CityName)}
                onHandleClick={onHandleClick}
              />
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
