import PlacesSortingList from '../../../components/places-sorting-list/places-sorting-list';
import OfferCard from '../../../components/offer-card/offer-card';
import { ACTIVE_CITY_INDEX, CITIES, OFFERS_COUNT } from '../../../const';
import { getOffersByCities } from '../../../data/data';

export default function CitiesOffers() {
  const offersByCities = getOffersByCities();

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{OFFERS_COUNT} place{
        OFFERS_COUNT > 1 ? 's' : ''
      } to stay in {CITIES[ACTIVE_CITY_INDEX]}
      </b>
      <PlacesSortingList />
      <div className="cities__places-list places__list tabs__content">
        {offersByCities[CITIES[ACTIVE_CITY_INDEX]].slice(0, OFFERS_COUNT).map((offer) => (
          <OfferCard key={offer.id} {...offer} prefix='cities' />
        ))}
      </div>
    </section>
  );
}
