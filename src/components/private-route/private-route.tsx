import { Navigate } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import type { ModifiedRouteProps } from '../../types';

export default function PrivateRoute({authStatus, children}: ModifiedRouteProps) {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
