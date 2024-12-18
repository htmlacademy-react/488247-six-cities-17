import { offers as mockOffers, nearPlaces } from '../mocks';

import { CITIES, Settings } from '../const';
import type { Offers } from '../types';

const offersByCities = CITIES.map((city) => [...mockOffers as Offers]
  .filter(({ city: { name } }) => city === name));

const favoritesOffers = offersByCities
  .map((city) => city.filter(({ isFavorite }) => isFavorite))
  .filter((city) => city.length);

function arrayToObject(array: Offers[]): { [city: string]: Offers } {
  return Object.fromEntries(
    array.map((city) => [city[0].city.name, city])
  );
}

export function getFavoritesOfferCount() {
  return favoritesOffers.reduce((sum, cityOffers) => sum + cityOffers.length, 0);
}

export function getOffersByCities() {
  return arrayToObject(offersByCities);
}

export function getFavorites() {
  return arrayToObject(favoritesOffers);
}

export function getPoints(offers: Offers) {
  return offers.map((offer) => ({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  }));
}

export function getNearPlacesSlice() {
  return nearPlaces.slice(0, Settings.NearPlaces) as Offers;
}
