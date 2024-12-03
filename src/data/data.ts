import { offers } from '../mocks';
import { Offers } from '../types';

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const offersByCities = Cities.map((city) => [...offers]
  .filter(({ city: { name } }) => city === name));

const favoretesOffers = offersByCities
  .map((city) => city.filter(({ isFavorite }) => isFavorite))
  .filter((city) => city.length);

function arrayToObject(array: Offers[]): { [city: string]: Offers } {
  return Object.fromEntries(
    array.map((city) => [city[0].city.name, city])
  );
}

export function getFavoritesOfferCount() {
  return favoretesOffers.reduce((sum, cityOffers) => sum + cityOffers.length, 0);
}

export function getOffersByCities() {
  return arrayToObject(offersByCities);
}

export function getFavorites() {
  return arrayToObject(favoretesOffers);
}
