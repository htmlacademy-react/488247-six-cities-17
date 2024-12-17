import clsx from 'clsx';

import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import CityOffers from './components/city-offers';
import CityNoOffers from './components/city-no-offers';
import CityMapSection from './components/city-map-section';

import { Settings } from '../../const';

type MainPageProps = {
  activeCityIndex: number;
  onHandleClick: (i: number) => void;
}

export default function MainPage({
  activeCityIndex,
  onHandleClick,
}: MainPageProps) {

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--index',
        {['page__main--index-empty']: !Settings.OffersCount})}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          activeCityIndex={activeCityIndex}
          onHandleClick={onHandleClick}
        />
        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            {['cities__places-container--empty']: !Settings.OffersCount},
            'container')}
          >
            {Settings.OffersCount ?
              <CityOffers activeCityIndex={activeCityIndex} />
              :
              <CityNoOffers />}
            <CityMapSection />
          </div>
        </div>
      </main>
    </div>
  );
}
