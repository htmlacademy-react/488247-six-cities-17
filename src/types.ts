type Offer = {
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
}

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

type Host = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

type FullOffer = Omit<Offer,
'id'
| 'city'
| 'location'
| 'previewImage'
 > & {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
}

export type { SortType, Offer, FullOffer };
