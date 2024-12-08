import { AuthStatus, BlockPrefix, CITIES, OFFER_TYPES } from './const';

type CityName = typeof CITIES[number];

type OfferType = typeof OFFER_TYPES[number];

type BlockPrefixType = typeof BlockPrefix[keyof typeof BlockPrefix];

type SortType = 'Popular'
| 'Price: low to high'
| 'Price: high to low'
| 'Top rated first';

type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type Offers = Offer[];

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: CityName;
  location: Location;
}

type User = {
  isPro?: boolean;
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
  host: User;
  bedrooms: number;
  maxAdults: number;
}

type Response = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

type ModifiedRoutePpops = {
  authStatus: typeof AuthStatus[keyof typeof AuthStatus];
  children: JSX.Element;
}

export type {
  CityName,
  OfferType,
  BlockPrefixType,
  SortType,
  Offer,
  Offers,
  User,
  FullOffer,
  Response,
  ModifiedRoutePpops,
};
