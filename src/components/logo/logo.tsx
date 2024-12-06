import { NavLink } from 'react-router-dom';

import { AppRoute, BlockPrefix } from '../../const';
import { BlockPrefixType } from '../../types';

import './style.css';

type LogoProps = {
  prefix?: BlockPrefixType;
  width?: number;
  height?: number;
}

export default function Logo({
  prefix = BlockPrefix.HeaderLogo,
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
