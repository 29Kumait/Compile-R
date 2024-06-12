// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const { authState } = useAuth();

    return authState.isAuthenticated ? children : <Navigate to="/page-login" />;
};

export default PrivateRoute;
