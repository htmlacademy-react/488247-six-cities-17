import OfferCard from '../../../components/offer-card/offer-card';

import { getSlicedNearPlaces } from '../../../data/data';
import { Prefix } from '../../../const';

export default function NearPlacesList() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighborhood
      </h2>
      <div className="near-places__list places__list">
        {getSlicedNearPlaces().map((offer) => (
          <OfferCard key={offer.id} {...offer} prefix={Prefix.NearPlaces} />
        ))}
      </div>
    </section>
  );
}
