import clsx from 'clsx';

type SortingTypeProps = {
  sortType: string;
  index: number;
  activeSort: number;
  onChangeSortType: (i: number) => void;
}

export default function SortingType({
  sortType,
  index,
  activeSort,
  onChangeSortType
}: SortingTypeProps) {
  return (
    <li
      className={clsx(
        'places__option',
        {['places__option--active']: index === activeSort}
      )}
      tabIndex={0}
      onClick={() => onChangeSortType(index)}
    >
      {sortType}
    </li>
  );
}
