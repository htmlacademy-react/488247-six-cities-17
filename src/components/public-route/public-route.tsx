import { Navigate } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import type { ModifiedRouteProps } from '../../types';

export default function PublicRoute({authStatus, children}: ModifiedRouteProps) {
  return (
    authStatus === AuthStatus.Auth
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}

