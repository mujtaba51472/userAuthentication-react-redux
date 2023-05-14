import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};
