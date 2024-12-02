import NavIsLogged from './nav-is-logged';
import NavIsNotLogged from './nav-is-not-logged';
import { IS_LOGGED } from '../../../const';

export default function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {IS_LOGGED ? <NavIsLogged /> : <NavIsNotLogged />}
      </ul>
    </nav>
  );
}
