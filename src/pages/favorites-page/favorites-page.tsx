import Header from '../../components/header/header';
import FavoritesList from './components/favorites-list';
import FavoritesListEmpty from './components/favorites-list-empty';
import Footer from '../../components/footer/footer';
import clsx from 'clsx';
import { FAVORITE_COUNT } from '../../const';

export default function FavoritesPage() {
  return (
    <div className={`page${!FAVORITE_COUNT && ' page--favorites-empty'}`}>
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--favorites',
        !FAVORITE_COUNT && 'page__main--favorites-empty')}
      >
        <div className="page__favorites-container container">
          {FAVORITE_COUNT ? <FavoritesList /> : <FavoritesListEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
