import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import PrivateRoute from '../private-route/private-route';
import PublicRoute from '../public-route/public-route';

import { AppRoute, AuthStatus, IS_LOGGED } from '../../const';

const authStatus = IS_LOGGED ? AuthStatus.Auth : AuthStatus.NoAuth;

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Main} element={<MainPage />}
        />
        <Route
          path={AppRoute.Login} element={
            <PublicRoute authStatus={authStatus}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={AppRoute.Favorites} element={
            <PrivateRoute authStatus={authStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
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
