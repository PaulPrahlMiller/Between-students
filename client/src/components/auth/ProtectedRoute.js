import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const [authState] = useAuth();
  const isAuthenticated = true; // This should be changed back to a destructured value from authState
  if (!isAuthenticated) {
    return <Navigate to='/login' replace={true} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
