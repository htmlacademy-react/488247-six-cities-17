import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Main} element={<MainPage />}
        />
        <Route
          path={AppRoute.Login} element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites} element={<FavoritesPage />}
        />
        <Route
          path={AppRoute.Offer} element={<OfferPage />}
        />
        <Route
          path={AppRoute.NotFoundPage} element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
