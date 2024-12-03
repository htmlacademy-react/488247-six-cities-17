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

const OFFERS_COUNT = 5;
const IS_LOGGED = true;
const RATING_RATIO = 20;
const NEIGHBOURHOOD_PLACES = 3;
const GALLERY_IMAGE_COUNT = 6;

export {
  RATING_VALUES,
  AppRoute,
  AuthStatus,
  OFFERS_COUNT,
  IS_LOGGED,
  RATING_RATIO,
  NEIGHBOURHOOD_PLACES,
  GALLERY_IMAGE_COUNT,
};
