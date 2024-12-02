import { AuthStatus } from './const';

type SortType = 'Popular'
| 'Price: low to high'
| 'Price: high to low'
| 'Top rated first';

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

type Offers = Offer[];

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
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

export type { SortType, Offer, Offers, User, FullOffer, Response, ModifiedRoutePpops };
