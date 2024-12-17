const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const OFFER_TYPES = [
  'room',
  'house',
  'apartment',
  'hotel',
] as const;

const RATING_VALUES = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
] as const;

const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFoundPage: '*',
} as const;

const AuthStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const BlockPrefix = {
  HeaderLogo: 'header__logo',
  FooterLogo: 'footer__logo',
  Cities: 'cities',
  Offer: 'offer',
  PlaceCard: 'place-card',
  NearPlaces: 'near-places',
  Favorites: 'favorites',
  Reviews: 'reviews',
} as const;

const Settings = {
  RatingRatio: 20,
  NearPlaces: 3,
  GalleryImageCount: 6,
  MinCommentLength: 50,
  MaxCommentLength: 300,
  IsLogged: true,
} as const;

export {
  CITIES,
  OFFER_TYPES,
  RATING_VALUES,
  AppRoute,
  AuthStatus,
  BlockPrefix,
  Settings,
};
