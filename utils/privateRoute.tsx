import React, { type FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import FirstPage from '../pages/firstPage/firstPage';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <FirstPage />;
};

export default PrivateRoute;
