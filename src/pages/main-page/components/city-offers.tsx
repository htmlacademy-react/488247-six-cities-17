import PlacesSortingList from '../../../components/places-sorting-list/places-sorting-list';
import OfferCard from '../../../components/offer-card/offer-card';

import type { CityName, Offers } from '../../../types';

type CityOffersProps = {
  activeCity: CityName;
  offers: Offers;
  onHandleMouseEnter: (id: string) => void;
  onHandleMouseLeave: () => void;
}

export default function CityOffers({
  activeCity,
  offers,
  onHandleMouseEnter,
  onHandleMouseLeave,
}: CityOffersProps) {

  return (
    <section
      className="cities__places places"
    >
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} {
        offers.length > 1 ? 'places' : 'place'
      } to stay in {activeCity}
      </b>
      <PlacesSortingList />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            {...offer}
            onHandleMouseEnter={onHandleMouseEnter}
            onHandleMouseLeave={onHandleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}
