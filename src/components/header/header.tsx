import Logo from '../logo/logo';
import HeaderNav from './components/header-nav';

type HeaderProps = {
  withoutNav?: boolean;
}

export default function Header({ withoutNav = false }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo prefix='headerLogo' />
          </div>
          {!withoutNav && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}
