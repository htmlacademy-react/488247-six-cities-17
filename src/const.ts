import { PointExpression } from 'leaflet';

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

const Prefix = {
  HeaderLogo: 'header__logo',
  FooterLogo: 'footer__logo',
  Cities: 'cities',
  Offer: 'offer',
  PlaceCard: 'place-card',
  NearPlaces: 'near-places',
  Favorites: 'favorites',
  Reviews: 'reviews',
} as const;

const Setting = {
  RatingRatio: 20,
  NearPlaces: 3,
  MaxImageCount: 6,
  MinCommentLength: 50,
  MaxCommentLength: 300,
  MaxReviewsCount: 10,
  IsLogged: true,
} as const;

const MapSetting = {
  MarkerDefaultUrl: '/img/pin.svg',
  MarkerActiveUrl: '/img/pin-active.svg',
  MarkerSize: [27, 39] as PointExpression,
  MarkerAnchor: [14, 39] as PointExpression,
  Layer: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Copyright: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

const Sorting = {
  Popular: 'Popular',
  PriceFromLow: 'Price: low to high',
  PriceFromHight: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export {
  CITIES,
  OFFER_TYPES,
  RATING_VALUES,
  AppRoute,
  AuthStatus,
  Prefix,
  Setting,
  MapSetting,
  Sorting,
};
