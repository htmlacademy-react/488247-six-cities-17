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

const OFFERS_COUNT = 5;
const IS_LOGGED = true;
const RATING_RATIO = 20;
const NEAR_PLACES = 3;
const GALLERY_IMAGE_COUNT = 6;
const MIN_COMMENT_LENGTH = 50;

export {
  CITIES,
  OFFER_TYPES,
  RATING_VALUES,
  AppRoute,
  AuthStatus,
  OFFERS_COUNT,
  IS_LOGGED,
  RATING_RATIO,
  NEAR_PLACES,
  GALLERY_IMAGE_COUNT,
  MIN_COMMENT_LENGTH,
};
