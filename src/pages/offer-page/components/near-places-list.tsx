import OfferCard from '../../../components/offer-card/offer-card';

import { nearPlaces } from '../../../mocks';
import { BlockPrefix, Settings } from '../../../const';
import type { Offer } from '../../../types';

const nearPlacesSlice = nearPlaces.slice(0, Settings.NearPlaces);

export default function NearPlacesList() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighborhood
      </h2>
      <div className="near-places__list places__list">
        {nearPlacesSlice.map((offer) => (
          <OfferCard key={offer.id} {...offer as Offer} prefix={BlockPrefix.NearPlaces} />
        ))}
      </div>
    </section>
  );
}
