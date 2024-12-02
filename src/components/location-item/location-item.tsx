import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LocationItemProps = {
  city: string;
  active?: boolean;
  tabItem?: boolean;
}

export default function LocationItem({ city, active, tabItem }: LocationItemProps) {
  return (
    tabItem ?
      <li className="locations__item">
        <Link
          className={
            clsx(
              'locations__item-link',
              'tabs__item',
              active && 'tabs__item--active')
          }
          to={AppRoute.Main}
        >
          <span>{city}</span>
        </ Link>
      </li >
      :
      <div className="locations__item">
        <Link className="locations__item-link" to={AppRoute.Main}>
          <span>{city}</span>
        </Link>
      </div>
  );
}
