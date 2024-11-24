import HeaderNavLink from './header-nav-link';
import HeaderUserInfo from './header-user-info';

import { FAVORITE_COUNT } from '../../const';

type HeaderNavProps = {
  isLogged: boolean;
}

export default function HeaderNav({ isLogged }: HeaderNavProps) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <HeaderUserInfo
          favoriteCount={FAVORITE_COUNT}
          isLogged={isLogged}
        />
        <HeaderNavLink isLogged={isLogged} />
      </ul>
    </nav>
  );
}
