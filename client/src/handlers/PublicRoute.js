import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PublicRoute = ({ component: Component, ...rest }) => {

    const { auth } = useAuthContext();
    console.log("proute", auth)
    // if (auth.loading) return <p> Loading </p>
    return (
        <Route {...rest} render={(props) => (
            // localStorage.getItem('token') !== null
            !auth.isAuthenticated
                ? <Component {...props} />
                : <Redirect to='/home' />
        )} />
    )
};

export default PublicRoute;
