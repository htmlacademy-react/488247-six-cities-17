import OfferCard from '../../../components/offer-card/offer-card';
import LocationItem from '../../../components/location-item/location-item';

import { getFavoriteOffers } from '../../../data/data';
import { Prefix } from '../../../const';
import type { CityName, Offers } from '../../../types';

type FavoritePlacesListProps = {
  offers: Offers;
}

function FavoritePlacesList({ offers }: FavoritePlacesListProps) {
  return offers.map(
    (offer) => (
      <OfferCard
        key={offer.id}
        {...offer}
        prefix={Prefix.Favorites}
        width={150}
        height={110}
      />)
  );
}

export default function FavoritesList() {
  const favorites = getFavoriteOffers();

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favorites).map((city) => (
          <li
            key={city}
            className="favorites__locations-items"
          >
            <div className="favorites__locations locations locations--current">
              <LocationItem city={city as CityName} />
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
