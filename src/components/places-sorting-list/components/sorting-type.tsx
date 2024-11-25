import clsx from 'clsx';

type SortingTypeProps = {
  sortType: string;
  index: number;
}

export default function SortingType({sortType, index}: SortingTypeProps) {
  return (
    <li
      className={clsx('places__option', index === 0 && 'places__option--active')}
      tabIndex={0}
    >
      {sortType}
    </li>
  );
}
