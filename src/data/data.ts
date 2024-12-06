import { offers } from '../mocks';

import { CITIES } from '../const';
import { Offers } from '../types';

const offersByCities = CITIES.map((city) => [...offers as Offers]
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
