import { useState } from 'react';

import PlacesSortingList from '../../../components/places-sorting-list/places-sorting-list';
import OfferCard from '../../../components/offer-card/offer-card';
import { getOffersByCities } from '../../../data/data';

import { CITIES, OFFERS_COUNT } from '../../../const';

type CitieOffersProps = {
  activeCityIndex: number;
}

export default function CitieOffers({activeCityIndex}: CitieOffersProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<string | null>(null);

  const offersByCities = getOffersByCities();

  function handleMouseOn(id: string) {
    setActiveOffer(id);
  }

  function handleMouseOut() {
    setActiveOffer(null);
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{OFFERS_COUNT} place{
        OFFERS_COUNT > 1 ? 's' : ''
      } to stay in {CITIES[activeCityIndex]}
      </b>
      <PlacesSortingList />
      <div className="cities__places-list places__list tabs__content">
        {offersByCities[CITIES[activeCityIndex]].slice(0, OFFERS_COUNT).map((offer) => (
          <OfferCard
            key={offer.id}
            {...offer}
            handleMouseOn={handleMouseOn}
            handleMouseOut={handleMouseOut}
          />
        ))}
      </div>
    </section>
  );
}
