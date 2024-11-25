import OfferCard from '../../../components/offer-card/offer-card';
import { CURRENT_CITY, NEIGHBOURHOOD_PLACES } from '../../../const';
import { mockOffersData } from '../../../mock-data/mock-data';

export default function NearPlaces() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {mockOffersData.filter(({city}) => city.name === CURRENT_CITY).slice(0, NEIGHBOURHOOD_PLACES)
          .map((offer) => (
            <OfferCard key={offer.id} element='near-places' {...offer} />
          ))}
      </div>
    </section>
  );
}
