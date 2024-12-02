import clsx from 'clsx';

import Header from '../../components/header/header';
import FavoritesList from './components/favorites-list';
import FavoritesListEmpty from './components/favorites-list-empty';
import Footer from '../../components/footer/footer';

import { getFavoritesOfferCount } from '../../data/data';

const offersCount = getFavoritesOfferCount();

export default function FavoritesPage() {
  return (
    <div className={`page${!offersCount && ' page--favorites-empty'}`}>
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--favorites',
        !offersCount && 'page__main--favorites-empty')}
      >
        <div className="page__favorites-container container">
          {offersCount ? <FavoritesList /> : <FavoritesListEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
