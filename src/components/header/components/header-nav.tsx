import NavIsLogged from './nav-is-logged';
import NavIsNotLogged from './nav-is-not-logged';

import { Setting } from '../../../const';

export default function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {Setting.IsLogged ? <NavIsLogged /> : <NavIsNotLogged />}
      </ul>
    </nav>
  );
}
