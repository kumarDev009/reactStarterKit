import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'context/authContext';

const PublicRoute = ({ component, redirectedUrl }) => {
  const { hasStorage } = useContext(AuthContext);

  return !hasStorage ? component : <Navigate to={redirectedUrl} />;
};

export default PublicRoute;
