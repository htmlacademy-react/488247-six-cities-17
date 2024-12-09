import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { AppRoute, BlockPrefix } from '../../const';
import type { BlockPrefixType } from '../../types';

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
