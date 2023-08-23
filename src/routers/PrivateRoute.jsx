import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'context/authContext';

const PrivateRoute = ({ component, redirectedUrl }) => {
  const { hasStorage } = useContext(AuthContext);
  if (!hasStorage) {
    return <Navigate to={redirectedUrl} />;
  }
  return component;
};

export default PrivateRoute;
