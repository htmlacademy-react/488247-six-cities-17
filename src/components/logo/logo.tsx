import { NavLink } from 'react-router-dom';

import { AppRoute } from '../../const';

import './style.css';

type LogoProps = {
  prefix?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  prefix = 'header__logo',
  width = 81,
  height = 41,
}: LogoProps) {
  return (
    <NavLink
      className={`${prefix}-link`}
      to={AppRoute.Main}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </NavLink>
  );
}
