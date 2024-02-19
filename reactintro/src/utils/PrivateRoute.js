import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';

function PrivateRoute({ children, ...rest }) {
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem(ACCESS_TOKEN_NAME);

    return (
        <Route {...rest} element={
            isAuthenticated ? (
                children
            ) : (
                <Navigate to="/login" state={{ from: location }} replace />
            )
        } />
    );
}

export default PrivateRoute;