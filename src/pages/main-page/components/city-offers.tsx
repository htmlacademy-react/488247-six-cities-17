import { useEffect } from 'react';

import PlacesSortingList from '../../../components/places-sorting-list/places-sorting-list';
import OfferCard from '../../../components/offer-card/offer-card';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectCity, selectOffers, selectSorting } from '../../../features/cities/citiesSlice';
import { setActiveOfferId } from '../../../features/maps/mapsSlice';
import { getSortedOffers } from '../../../data/data';

export default function CityOffers() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);
  const currentSorting = useAppSelector(selectSorting);

  const sortedOffers = getSortedOffers(currentSorting, offers);

  useEffect(() => {
    dispatch(setActiveOfferId(null));
  }, [dispatch]);

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
        {sortedOffers.map((offer) => (
          <OfferCard key={offer.id} {...offer} activePoint />
        ))}
      </div>
    </section>
  );
}
