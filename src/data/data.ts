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
  return Object.fromEntries(getCities()
    .map((city) => offersByCities[city]
      .filter((place) => place.isFavorite))
    .filter((item) => item.length)
    .map((item) => [item[0].city.name, item])
  );
}

const favorites = getFavorites();

export { offersByCities, favorites };
