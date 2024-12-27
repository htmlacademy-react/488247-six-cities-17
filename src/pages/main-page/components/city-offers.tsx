import PlacesSortingList from '../../../components/places-sorting-list/places-sorting-list';
import OfferCard from '../../../components/offer-card/offer-card';

import { useAppSelector } from '../../../store/hooks';
import { selectCity, selectOffers } from '../../../features/cities/citiesSlice';

type CityOffersProps = {
  onHandleMouseEnter: (id: string) => void;
  onHandleMouseLeave: () => void;
}

export default function CityOffers({
  onHandleMouseEnter,
  onHandleMouseLeave,
}: CityOffersProps) {
  const city = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);

  return (
    <section
      className="cities__places places"
    >
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} {
        offers.length > 1 ? 'places' : 'place'
      } to stay in {city}
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
