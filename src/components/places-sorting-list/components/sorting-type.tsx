import clsx from 'clsx';

type SortingTypeProps = {
  sortType: string;
  index: number;
  activeSort: number;
  chooseSortType: (i: number) => void;
}

export default function SortingType({
  sortType,
  index,
  activeSort,
  chooseSortType
}: SortingTypeProps) {
  return (
    <li
      className={clsx(
        'places__option',
        index === activeSort && 'places__option--active'
      )}
      tabIndex={0}
      onClick={() => chooseSortType(index)}
    >
      {sortType}
    </li>
  );
}
