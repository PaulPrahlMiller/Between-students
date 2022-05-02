import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Loading from '../../pages/Loading';

const ProtectedRoute = ({ children }) => {
  const authState = useAuth()[0];

  const { isAuthenticated, loading } = authState;

  // Loading is true when app loads
  // The application attempts to fetch a logged in user from the backend.
  // While the fetch happens, a loading component will be shown.
  if (loading) return <Loading />;

  // If there is a logged in user, the account page will be rendered.
  if (isAuthenticated) {
    return children ? children : <Outlet />;
  }

  // If there is no logged in user, the user is redirected to login
  return <Navigate to='/login' replace={true} />;
};

export default ProtectedRoute;
