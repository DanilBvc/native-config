import React, { type FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import WelcomeScreen from '../pages/welcomeScreen/welcomeScreen';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <WelcomeScreen />;
};

export default PrivateRoute;
