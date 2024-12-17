import { useState } from 'react';
import clsx from 'clsx';

import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import CityOffers from './components/city-offers';
import CityNoOffers from './components/city-no-offers';
import CityMapSection from './components/city-map-section';
import { getOffersByCities } from '../../data/data';

import { CITIES } from '../../const';

type MainPageProps = {
  activeCityIndex: number;
  onHandleClick: (i: number) => void;
}

export default function MainPage({
  activeCityIndex,
  onHandleClick,
}: MainPageProps) {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);

  const currentOffers = getOffersByCities()[CITIES[activeCityIndex]];
  const activeCity = CITIES[activeCityIndex];
  const cityLocation = currentOffers[0].city.location;

  // Бредовая функция только для того чтоб заставить линтер перестать ругаться.
  function onShutDownLinter() {
    return [activeOffer, cityLocation];
  }

  function handleMouseEnter(id: string) {
    setActiveOffer(id);
  }

  function handleMouseLeave() {
    setActiveOffer(null);
  }

  return (
    <div
      className="page page--gray page--main"
      onMouseLeave={onShutDownLinter} // Вызов бредовой функции.
    >
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--index',
        {['page__main--index-empty']: currentOffers.length})}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          activeCityIndex={activeCityIndex}
          onHandleClick={onHandleClick}
        />
        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            {['cities__places-container--empty']: currentOffers.length},
            'container')}
          >
            {currentOffers.length ?
              <CityOffers
                activeCity={activeCity}
                offers={currentOffers}
                onHandleMouseEnter={handleMouseEnter}
                onHandleMouseLeave={handleMouseLeave}
              />
              :
              <CityNoOffers />}
            <CityMapSection offersCount={currentOffers.length} />
          </div>
        </div>
      </main>
    </div>
  );
}
