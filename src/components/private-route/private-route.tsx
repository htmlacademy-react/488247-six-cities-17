import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type PrivateRoutePpops = {
  authStatus: 'AUTH' | 'NO_AUTH' | 'UNKNOWN';
  children: JSX.Element;

}

export default function PrivateRoute({authStatus, children}: PrivateRoutePpops) {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
