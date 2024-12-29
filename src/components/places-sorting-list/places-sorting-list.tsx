import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import SortingItem from './components/sorting-item';
import { Sorting } from '../../const';
import { useAppSelector } from '../../store/hooks';
import { selectSorting } from '../../features/cities/citiesSlice';

const sortingList = [
  Sorting.Popular,
  Sorting.PriceFromLow,
  Sorting.PriceFromHight,
  Sorting.TopRated,
];

export default function PlacesSortingList() {
  const sortSpanRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const activeSorting = useAppSelector(selectSorting);

  useEffect(() => {
    const hideSortingList = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement
        && sortSpanRef.current
        && !sortSpanRef.current.contains(evt.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', hideSortingList);

    return () => document.removeEventListener('click', hideSortingList);
  }, []);

  return (
    <form className="places__sorting" action='/' method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span
        ref={sortSpanRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setOpen((prev) => !prev)}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={clsx(
        'places__options',
        'places__options--custom',
        { 'places__options--opened': open })}
      >
        {sortingList.map((sorting) => (
          <SortingItem key={sorting} sorting={sorting} />
        ))}
      </ul>
    </form>
  );
}
