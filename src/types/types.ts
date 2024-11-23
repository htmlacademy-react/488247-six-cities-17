type Location = 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

type SortType = 'Popular'
  | 'Price: low to high'
  | 'Price: high to low'
  | 'Top rated first';

export type { SortType, Location };
