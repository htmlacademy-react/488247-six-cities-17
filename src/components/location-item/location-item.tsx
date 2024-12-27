import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { getOffersByCities, getPoints } from '../../data/data';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCity, setCity, setOffers } from '../../features/cities/citiesSlice';
import { setLocation, setPoints } from '../../features/maps/mapsSlice';
import { AppRoute } from '../../const';
import { CityName } from '../../types';

type LocationItemProps = {
  city: CityName;
  tabItem?: boolean;
}

const offersByCities = getOffersByCities();

export default function LocationItem({ city, tabItem }: LocationItemProps) {
  const currentCity = useAppSelector(selectCity);
  const dispatch = useAppDispatch();

  const offers = offersByCities[city];

  function handleCityChange() {
    if (currentCity !== city) {
      dispatch(setCity(city));
      dispatch(setOffers(offersByCities[city]));
      dispatch(setLocation(offers[0].city.location));
      dispatch(setPoints(getPoints(offers)));
    }
  }

  return (
    tabItem ?
      <li className="locations__item" onClick={handleCityChange}>
        <Link
          className={
            clsx(
              'locations__item-link',
              'tabs__item',
              { ['tabs__item--active']: city === currentCity })
          }
          to={AppRoute.Main}
        >
          <span>{city}</span>
        </ Link>
      </li >
      :
      <div className="locations__item" onClick={handleCityChange}>
        <Link className="locations__item-link" to={AppRoute.Main}>
          <span>{city}</span>
        </Link>
      </div>
  );
}
