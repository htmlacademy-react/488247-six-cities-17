import OfferCard from '../../../components/offer-card/offer-card';

import { getNearPlacesSlice } from '../../../data/data';
import { BlockPrefix } from '../../../const';

export default function NearPlacesList() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighborhood
      </h2>
      <div className="near-places__list places__list">
        {getNearPlacesSlice().map((offer) => (
          <OfferCard key={offer.id} {...offer} prefix={BlockPrefix.NearPlaces} />
        ))}
      </div>
    </section>
  );
}
