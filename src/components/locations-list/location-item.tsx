import clsx from 'clsx';

type LocationItemProps = {
  city: string;
  index: number;
}

export default function LocationItem({city, index}: LocationItemProps) {
  return (
    <li className="locations__item">
      <a
        className={clsx('locations__item-link tabs__item', index === 0 && 'tabs__item--active')}
        href="#"
      >
        <span>{city}</span>
      </a>
    </li>
  );
}
