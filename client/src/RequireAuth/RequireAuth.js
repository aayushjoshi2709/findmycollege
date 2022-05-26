import { Navigate } from "react-router-dom";
import React from 'react'


function RequireAuth({currentUser,children}) {
    if (!currentUser.id) {
        return <Navigate to="/user/login"/>;
    }
    return children;
}

export default RequireAuth