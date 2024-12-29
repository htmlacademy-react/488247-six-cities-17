import { offers as mockOffers, nearPlaces } from '../mocks';

import { CITIES, Setting } from '../const';
import type { Offers } from '../types';

const offersByCities = CITIES.map((city) => [...mockOffers as Offers]
  .filter(({ city: { name } }) => city === name));

const favoriteOffers = offersByCities
  .map((cityOffers) => cityOffers.filter(({ isFavorite }) => isFavorite))
  .filter((cityOffers) => cityOffers.length);

export function getFavoriteOffersCount() {
  return favoriteOffers.reduce((sum, cityOffers) => sum + cityOffers.length, 0);
}

export function getOffersByCities() {
  return Object.fromEntries(
    CITIES.map((city, index) => [city, offersByCities[index]])
  );
}

export function getFavoriteOffers() {
  return Object.fromEntries(
    favoriteOffers.map((cityOffers) => [cityOffers[0].city.name, cityOffers])
  );
}

export function getPoints(offers: Offers) {
  return offers.map(({ id, location: { latitude, longitude } }) => (
    { id, latitude, longitude }
  ));
}

export function getSlicedNearPlaces() {
  return nearPlaces.slice(0, Setting.NearPlaces) as Offers;
}
