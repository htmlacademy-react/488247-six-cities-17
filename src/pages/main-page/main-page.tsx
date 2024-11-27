import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import CitiesPlaces from './components/cities-placies';
import CitiesNoPlaces from './components/cities-no-places';
import CitiesMapSection from './components/cities-map-section';
import clsx from 'clsx';
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
            {OFFERS_COUNT ? <CitiesPlaces /> : <CitiesNoPlaces />}
            <CitiesMapSection />
          </div>
        </div>
      </main>
    </div>
  );
}
