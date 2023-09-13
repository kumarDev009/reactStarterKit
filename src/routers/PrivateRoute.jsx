import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'context/authContext';

const PrivateRoute = ({ component, redirectUrl }) => {
  const { hasStorage } = useContext(AuthContext);
  if (!hasStorage) {
    return <Navigate to={redirectUrl} />;
  }
  return component;
};

export default PrivateRoute;
