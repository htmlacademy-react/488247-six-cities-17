import type { OfferCity } from './types';

const FAVORITE_COUNT = 4;
const FAVORITE_OFFERS_COUNT = 4;
const OFFERS_COUNT = 5;
const IS_LOGGED = true;
const RATING_RATIO = 20;
const CURRENT_CITY = 'Paris';
const RATING_STARS_COUNT = 5;
const NEIGHBOURHOOD_PLACES = 3;
const GALLERY_IMAGE_COUNT = 6;

const CITIES: OfferCity[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
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

export {
  FAVORITE_COUNT,
  OFFERS_COUNT,
  FAVORITE_OFFERS_COUNT,
  IS_LOGGED,
  RATING_RATIO,
  CURRENT_CITY,
  RATING_STARS_COUNT,
  NEIGHBOURHOOD_PLACES,
  GALLERY_IMAGE_COUNT,
  CITIES,
  AppRoute,
  AuthStatus,
};
