type LocationCity = 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

type SortType = 'Popular'
  | 'Price: low to high'
  | 'Price: high to low'
  | 'Top rated first';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
  location: Location;
}

type OfferCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  element: string;
}

export type { SortType, LocationCity, OfferCardProps };
