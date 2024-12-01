import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  prefix: string;
}

export default function Logo({ prefix }: LogoProps) {
  return (
    <Link className={clsx(
      `${prefix}-link`,
      `${prefix}-link--active`
    )}
    to={AppRoute.Main}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={prefix === 'header__logo' ? 81 : 64}
        height={prefix === 'header__logo' ? 41 : 33}
      />
    </Link>
  );
}
