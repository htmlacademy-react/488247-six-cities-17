import Header from '../../components/header/header';
import FavoritesList from './components/favorites-list';
import FavoritesListEmpty from './components/favorites-list-empty';
import Footer from '../../components/footer/footer';
import clsx from 'clsx';
import { getFavoritesOfferCount } from '../../data/data';

const favoritesOffer = getFavoritesOfferCount();

export default function FavoritesPage() {
  return (
    <div className={`page${!favoritesOffer && ' page--favorites-empty'}`}>
      <Header />
      <main className={clsx(
        'page__main',
        'page__main--favorites',
        !favoritesOffer && 'page__main--favorites-empty')}
      >
        <div className="page__favorites-container container">
          {favoritesOffer ? <FavoritesList /> : <FavoritesListEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
