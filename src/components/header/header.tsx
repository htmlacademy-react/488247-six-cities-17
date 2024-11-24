import Logo from '../logo/logo';
import HeaderNav from './header-nav';
import { IS_LOGGED } from '../../const';

type HeaderProps = {
  withoutNav?: boolean;
}

export default function Header({withoutNav = false}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo element='headerLogo' />
          </div>
          {!withoutNav &&
            <HeaderNav isLogged={IS_LOGGED} />}
        </div>
      </div>
    </header>
  );
}
