import clsx from 'clsx';

type LocationItemProps = {
  city: string;
  index?: number;
  tabItem?: boolean;
}

export default function LocationItem({ city, index, tabItem }: LocationItemProps) {
  return (
    tabItem ?
      <li className="locations__item">
        < a
          className={
            clsx(
              'locations__item-link',
              'tabs__item',
              index === 0 && 'tabs__item--active')
          }
          href="#"
        >
          <span>{city}</span>
        </a >
      </li >
      :
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
  );
}
