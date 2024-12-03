import PlacesSortingList from '../../../components/places-sorting-list/places-sorting-list';
import OfferCard from '../../../components/offer-card/offer-card';
import { Cities, getOffersByCities } from '../../../data/data';

import { OFFERS_COUNT } from '../../../const';

type CitiesOffersProps = {
  activeCityIndex: number;
}

export default function CitiesOffers({activeCityIndex}: CitiesOffersProps) {
  const offersByCities = getOffersByCities();

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{OFFERS_COUNT} place{
        OFFERS_COUNT > 1 ? 's' : ''
      } to stay in {Cities[activeCityIndex]}
      </b>
      <PlacesSortingList />
      <div className="cities__places-list places__list tabs__content">
        {offersByCities[Cities[activeCityIndex]].slice(0, OFFERS_COUNT).map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </div>
    </section>
  );
}
