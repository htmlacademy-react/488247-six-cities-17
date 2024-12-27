import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { getOffersByCities } from '../../data/data';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCity, setCity, setOffers } from '../../features/cities/citiesSlice';
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

  function handleCityChange() {
    if (currentCity !== city) {
      dispatch(setCity(city));
      dispatch(setOffers(offersByCities[city]));
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
              { ['tabs__item--active']: currentCity === city })
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
