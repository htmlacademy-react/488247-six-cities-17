import { Link } from 'react-router-dom';

import { getFavoriteOffersCount } from '../../../data/data';
import { AppRoute } from '../../../const';

export default function NavIsLogged() {
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          <span className="header__favorite-count">{getFavoriteOffersCount()}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.Login}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}
