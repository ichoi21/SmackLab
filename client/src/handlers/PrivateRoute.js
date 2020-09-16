import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { auth } = useAuthContext();
    console.log("proute", auth)
    // if (auth.loading) return <p> Loading </p>
    // return (
    //     <Route {...rest} render={(props) => (
    //         // localStorage.getItem('token') !== null
    //         auth.isAuthenticated
    //             ? <Component {...props} />
    //             : <Redirect to='/login' />
    //     )} />
    // )
};

export default PrivateRoute;
