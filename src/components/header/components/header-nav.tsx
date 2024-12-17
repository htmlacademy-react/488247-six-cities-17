import NavIsLogged from './nav-is-logged';
import NavIsNotLogged from './nav-is-not-logged';

import { Settings } from '../../../const';

export default function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {Settings.IsLogged ? <NavIsLogged /> : <NavIsNotLogged />}
      </ul>
    </nav>
  );
}
