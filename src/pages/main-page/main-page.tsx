import clsx from 'clsx';

import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import CitieOffers from './components/cities-offers';
import CitiesNoOffers from './components/cities-no-offers';
import CitiesMapSection from './components/cities-map-section';

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
        !Settings.OffersCount && 'page__main--index-empty')}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          activeCityIndex={activeCityIndex}
          onHandleClick={onHandleClick}
        />
        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            !Settings.OffersCount && 'cities__places-container--empty',
            'container')}
          >
            {Settings.OffersCount ?
              <CitieOffers activeCityIndex={activeCityIndex} />
              :
              <CitiesNoOffers />}
            <CitiesMapSection />
          </div>
        </div>
      </main>
    </div>
  );
}
