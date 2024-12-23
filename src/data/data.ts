import { offers as mockOffers, nearPlaces } from '../mocks';

import { CITIES, Setting } from '../const';
import type { Offers } from '../types';

const offersByCities = CITIES.map((city) => [...mockOffers as Offers]
  .filter(({ city: { name } }) => city === name));

const favoriteOffers = offersByCities
  .map((city) => city.filter(({ isFavorite }) => isFavorite))
  .filter((city) => city.length);

function arrayToObject(array: Offers[]): { [city: string]: Offers } {
  return Object.fromEntries(
    array.map((city) => [city[0].city.name, city])
  );
}

export function getFavoriteOffersCount() {
  return favoriteOffers.reduce((sum, cityOffers) => sum + cityOffers.length, 0);
}

export function getOffersByCities() {
  return arrayToObject(offersByCities);
}

export function getFavoriteOffers() {
  return arrayToObject(favoriteOffers);
}

export function getPoints(offers: Offers) {
  return offers.map(({ id, location: { latitude, longitude } }) => (
    { id, latitude, longitude }
  ));
}

export function getNearPlacesSlice() {
  return nearPlaces.slice(0, Setting.NearPlaces) as Offers;
}
