import { useState } from 'react';
import clsx from 'clsx';

import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import CityOffers from './components/city-offers';
import CityNoOffers from './components/city-no-offers';
import CityMapSection from './components/city-map-section';

import { getPoints } from '../../data/data';
import { useAppSelector } from '../../store/hooks';
import { selectOffers } from '../../features/cities/citiesSlice';

export default function MainPage() {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const offers = useAppSelector(selectOffers);

  const cityLocation = offers[0]?.city.location;
  const points = getPoints(offers);

  function handleMouseEnter(id: string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }

  return (
    <div
      className="page page--gray page--main"
    >
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--index',
        {['page__main--index-empty']: !offers.length})}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            {['cities__places-container--empty']: !offers.length},
            'container')}
          >
            {offers.length ?
              <CityOffers
                onHandleMouseEnter={handleMouseEnter}
                onHandleMouseLeave={handleMouseLeave}
              />
              :
              <CityNoOffers />}
            <CityMapSection
              location={cityLocation}
              points={points}
              activeOfferId={activeOfferId}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
