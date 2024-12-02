import clsx from 'clsx';

import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import CitiesOffers from './components/cities-offers';
import CitiesNoOffers from './components/cities-no-offers';
import CitiesMapSection from './components/cities-map-section';

import { OFFERS_COUNT } from '../../const';

export default function MainPage() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--index',
        !OFFERS_COUNT && 'page__main--index-empty')}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            !OFFERS_COUNT && 'cities__places-container--empty',
            'container')}
          >
            {OFFERS_COUNT ? <CitiesOffers /> : <CitiesNoOffers />}
            <CitiesMapSection />
          </div>
        </div>
      </main>
    </div>
  );
}
