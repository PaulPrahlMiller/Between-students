import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const [authState] = useAuth();
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to='/login' replace={true} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
