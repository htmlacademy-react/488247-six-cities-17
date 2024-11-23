import type { SortType } from '../../types/types';
import SortingType from './sorting-type';


const sortingTypeList: SortType[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export default function PlacesSortingForm() {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortingTypeList.map((sortType, index) => (
          <SortingType
            key={sortType}
            sortType={sortType}
            index={index}
          />
        ))}
      </ul>
    </form>
  );
}
