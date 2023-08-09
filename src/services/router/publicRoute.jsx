import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';

import { AuthContext } from "../context/authContext";

export const PublicRoute = ({ component, redirectedUrl }) => {

    const { hasStorage } = useContext(AuthContext);
    
    return !hasStorage ? component : <Navigate to={redirectedUrl} />

}



