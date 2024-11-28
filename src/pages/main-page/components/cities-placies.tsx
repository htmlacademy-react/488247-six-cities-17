import PlacesSortingList from '../../../components/places-sorting-list/places-sorting-list';
import OfferCard from '../../../components/offer-card/offer-card';
import { CURRENT_CITY, OFFERS_COUNT } from '../../../const';
import { offersByCities } from '../../../data/data';

export default function CitiesPlaces() {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{OFFERS_COUNT} places to stay in {CURRENT_CITY}</b>
      <PlacesSortingList />
      <div className="cities__places-list places__list tabs__content">
        {offersByCities[CURRENT_CITY].slice(0, OFFERS_COUNT).map((offer) => (
          <OfferCard key={offer.id} {...offer} prefix='cities' />
        ))}
      </div>
    </section>
  );
}
