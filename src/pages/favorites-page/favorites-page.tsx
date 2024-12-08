import clsx from 'clsx';

import Header from '../../components/header/header';
import FavoritesList from './components/favorites-list';
import FavoritesListEmpty from './components/favorites-list-empty';
import Footer from '../../components/footer/footer';

import { getFavoritesOfferCount } from '../../data/data';

const offersCount = getFavoritesOfferCount();

type FavoritesPageProps = {
  onHandleClick: (i: number) => void;
}

export default function FavoritesPage({onHandleClick}: FavoritesPageProps) {
  return (
    <div className={clsx(
      'page',
      {['page--favorites-empty']: !offersCount}
    )}
    >
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--favorites',
        {['page__main--favorites-empty']: !offersCount})}
      >
        <div className="page__favorites-container container">
          {offersCount ?
            <FavoritesList
              onHandleClick={onHandleClick}
            /> : <FavoritesListEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
