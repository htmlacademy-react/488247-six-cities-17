import { mockOffersList } from '../mock-data/mock-offers-list';
import { CITIES } from '../const';
import { Offer } from '../types';

const offersByCities = CITIES.map((city) => [...mockOffersList]
  .filter(({ city: { name } }) => city === name));

const favoretesOffers = offersByCities
  .map((city) => city.filter(({isFavorite}) => isFavorite))
  .filter((city) => city.length);

function arrayToObject(array: Offer[][]): {[city: string]: Offer[]} {
  return Object.fromEntries(
    array.map((city) => [city[0].city.name, city])
  );
}

export function getOffersByCities() {
  return arrayToObject(offersByCities);
}

export function getFavorites() {
  return arrayToObject(favoretesOffers);
}
