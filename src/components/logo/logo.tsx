import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

type LogoProps = {
  prefix?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  prefix = 'header__logo',
  width = 81,
  height = 41
}: LogoProps) {
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
        width={width}
        height={height}
      />
    </Link>
  );
}
