import clsx from 'clsx';

import type { SortType } from '../../../types';

type SortingTypeProps = {
  sorting: SortType;
  index: number;
  activeSort: number;
  onChangeSortType: (i: number) => void;
}

export default function SortingType({
  sorting,
  index,
  activeSort,
  onChangeSortType
}: SortingTypeProps) {
  return (
    <li
      className={clsx(
        'places__option',
        {'places__option--active': index === activeSort}
      )}
      tabIndex={0}
      onClick={() => onChangeSortType(index)}
    >
      {sorting}
    </li>
  );
}
