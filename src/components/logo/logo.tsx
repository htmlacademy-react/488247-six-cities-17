import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { AppRoute, Prefix } from '../../const';
import type { PrefixType } from '../../types';

type LogoProps = {
  prefix?: PrefixType;
  width?: number;
  height?: number;
}

export default function Logo({
  prefix = Prefix.HeaderLogo,
  width = 81,
  height = 41,
}: LogoProps) {
  return (
    <NavLink
      className={
        ({isActive}) => clsx(
          `${prefix}-link`,
          {[`${prefix}-link--active}`]: isActive},
        )
      }
      style={
        ({isActive}) => ({pointerEvents: isActive ? 'none' : 'auto'})
      }
      to={AppRoute.Main}
    >
      <img
        className={prefix}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </NavLink>
  );
}
