import React, { type FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import WelcomeScreen from '../pages/welcomeScreen/welcomeScreen';

interface PrivateRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <WelcomeScreen />;
};

export default PrivateRoute;
