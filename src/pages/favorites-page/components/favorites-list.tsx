import OfferCard from '../../../components/offer-card/offer-card';
import type { OfferCardProps } from '../../../types';
import { nanoid } from '@reduxjs/toolkit';
import { mockOffersData } from '../../../mock-data/mock-data';
import { LOCATIONS } from '../../../const';
import LocationItem from '../../../components/location-item/location-item';

type FavoritesPlaces = {
  item: OfferCardProps[];
}

const favoritesList = LOCATIONS.map((city) => [...mockOffersData]
  .filter(({ city: { name }, isFavorite }) => city === name && isFavorite))
  .filter((item) => item.length);

function FavoritesPlaces({ item }: FavoritesPlaces) {
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
        {favoritesList.map((item) => (
          <li
            key={nanoid()}
            className="favorites__locations-items"
          >
            <div className="favorites__locations locations locations--current">
              <LocationItem city={item[0].city.name} />
            </div>
            <div className="favorites__places">
              <FavoritesPlaces item={item} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
