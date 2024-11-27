import { FAVORITE_COUNT, IS_LOGGED } from '../../../const';

export default function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {IS_LOGGED ?
              <>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">{FAVORITE_COUNT}</span>
              </>
              :
              <span className="header__login">Sign in</span>}
          </a>
        </li>
        <li className="header__nav-item">
          {IS_LOGGED &&
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>}
        </li>
      </ul>
    </nav>
  );
}
