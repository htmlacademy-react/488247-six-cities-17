import { useLocation } from 'react-router-dom';

import Logo from '../logo/logo';
import HeaderNav from './components/header-nav';

import { AppRoute } from '../../const';

export default function Header() {
  const {pathname} = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {pathname !== AppRoute.Login && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}
