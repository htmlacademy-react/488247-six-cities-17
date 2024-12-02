import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import type { ModifiedRoutePpops } from '../../types';

export default function PublicRoute({authStatus, children}: ModifiedRoutePpops) {
  return (
    authStatus === AuthStatus.Auth
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}

