import { mockOffersData } from '../mock-data/mock-data';

function getCities(): string[] {
  return [
    ...new Set([...mockOffersData].map((item) => item.city.name))
  ];
}

function getOffersByCities() {
  return Object.fromEntries(getCities().map((city) => [...mockOffersData]
    .filter(({ city: { name } }) => city === name))
    .map((item) => [item[0].city.name, item]));
}

const offersByCities = getOffersByCities();

function getFavorites() {
  const cities = {...offersByCities};
  for (const city in cities) {
    cities[city] = cities[city].filter((offer) => offer.isFavorite);
    if (!cities[city].length) {
      delete cities[city];
    }
  }
  return cities;
}

const favorites = getFavorites();

export { offersByCities, favorites };
