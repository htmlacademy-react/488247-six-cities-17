import clsx from 'clsx';

import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import CityOffers from './components/city-offers';
import CityNoOffers from './components/city-no-offers';
import CityMapSection from './components/city-map-section';

import { useAppSelector } from '../../store/hooks';
import { selectOffers } from '../../features/cities/citiesSlice';

export default function MainPage() {
  const offersCount = useAppSelector(selectOffers).length;

  return (
    <div
      className="page page--gray page--main"
    >
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--index',
        { 'page__main--index-empty': !offersCount })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            { 'cities__places-container--empty': !offersCount },
            'container')}
          >
            {offersCount ? <CityOffers /> : <CityNoOffers />}
            <CityMapSection />
          </div>
        </div>
      </main>
    </div>
  );
}
