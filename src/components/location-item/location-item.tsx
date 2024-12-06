import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

type LocationItemProps = {
  city: string;
  index: number;
  onHandleClick: (i: number) => void;
  activeIndex?: number;
  tabItem?: boolean;
}

export default function LocationItem({ city, index, activeIndex, tabItem, onHandleClick }: LocationItemProps) {
  return (
    tabItem ?
      <li className="locations__item"
        onClick={() => onHandleClick(index)}
      >
        <Link
          className={
            clsx(
              'locations__item-link',
              'tabs__item',
              activeIndex === index && 'tabs__item--active')
          }
          to={AppRoute.Main}
        >
          <span>{city}</span>
        </ Link>
      </li >
      :
      <div
        className="locations__item"
        onClick={() => onHandleClick(index)}
      >
        <Link className="locations__item-link" to={AppRoute.Main}>
          <span>{city}</span>
        </Link>
      </div>
  );
}
