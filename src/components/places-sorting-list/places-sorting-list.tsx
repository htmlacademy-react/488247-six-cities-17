import clsx from 'clsx';
import { useState } from 'react';

import SortingType from './components/sorting-type';

import type { SortType } from '../../types';


const sortingTypeList: SortType[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export default function PlacesSortingList() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeSort, setActiveSort] = useState<number>(0);

  function changeSortType(index: number): void {
    setActiveSort(index);
    setOpen(((prev: boolean) => !prev));
  }

  return (
    <form className="places__sorting" action='/' method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span
        onClick={() => setOpen((prev) => !prev)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {sortingTypeList[activeSort]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={clsx(
        'places__options',
        'places__options--custom',
        open && 'places__options--opened')}
      >
        {sortingTypeList.map((sortType, index) => (
          <SortingType
            key={sortType}
            sortType={sortType}
            index={index}
            activeSort={activeSort}
            onChangeSortType={changeSortType}
          />
        ))}
      </ul>
    </form>
  );
}
