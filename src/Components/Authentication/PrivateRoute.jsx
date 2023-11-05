import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    let { signedUser, loading } = useAuth();

    if (loading) {
        return <div className='flex justify-center h-screen items-center'>
            <span>Loading....</span>
        </div>
    }

    if (signedUser) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;