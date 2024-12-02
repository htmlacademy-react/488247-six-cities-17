import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { ModifiedRoutePpops } from '../../types';

export default function PrivateRoute({authStatus, children}: ModifiedRoutePpops) {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
