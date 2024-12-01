import clsx from 'clsx';
import { Link } from 'react-router-dom';

type LocationItemProps = {
  city: string;
  index?: number;
  tabItem?: boolean;
}

export default function LocationItem({ city, index, tabItem }: LocationItemProps) {
  return (
    tabItem ?
      <li className="locations__item">
        <Link
          className={
            clsx(
              'locations__item-link',
              'tabs__item',
              index === 0 && 'tabs__item--active')
          }
          to="#"
        >
          <span>{city}</span>
        </ Link>
      </li >
      :
      <div className="locations__item">
        <Link className="locations__item-link" to="#">
          <span>{city}</span>
        </Link>
      </div>
  );
}
