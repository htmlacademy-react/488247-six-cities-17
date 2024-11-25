import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import FavoritesListEmpty from './components/favorites-list-empty';
import clsx from 'clsx';
import { FAVORITE_OFFERS_COUNT } from '../../const';
import FavoritesList from './components/favorites-list';

export default function FavoritesPage() {
  return (
    <div className={`page${!FAVORITE_OFFERS_COUNT && ' page--favorites-empty'}`}>
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--favorites',
        !FAVORITE_OFFERS_COUNT && 'page__main--favorites-empty')}
      >
        <div className="page__favorites-container container">
          {FAVORITE_OFFERS_COUNT ? <FavoritesList /> : <FavoritesListEmpty />}
        </div>
      </main>
      <footer className="footer container">
        <Logo element='footer__logo' />
      </footer>
    </div>
  );
}
