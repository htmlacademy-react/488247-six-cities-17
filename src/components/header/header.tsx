import Logo from '../logo/logo';
import HeaderNav from './header-nav';
import { IS_LOGGED } from '../../const';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo headerLogo />
          </div>
          {location.pathname !== '/login' &&
            <HeaderNav isLogged={IS_LOGGED} />}
        </div>
      </div>
    </header>
  );
}
