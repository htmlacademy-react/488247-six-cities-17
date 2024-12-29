import clsx from 'clsx';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectSorting, setSorting } from '../../../features/cities/citiesSlice';
import type { SortingType } from '../../../types';

type SortingItemProps = {
  sorting: SortingType;
}

export default function SortingItem({
  sorting,
}: SortingItemProps) {
  const activeSorting = useAppSelector(selectSorting);
  const dispatch = useAppDispatch();

  return (
    <li
      className={clsx(
        'places__option',
        { 'places__option--active': sorting === activeSorting }
      )}
      tabIndex={0}
      onClick={() => dispatch(setSorting(sorting))}
    >
      {sorting}
    </li >
  );
}
