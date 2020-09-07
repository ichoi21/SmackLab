import { authContext } from "../contexts/AuthContext";
import React, { useContext, useState } from "react";

const Login = ({history}) => {
    const { setAuthData} = useContext(authContext);

    const onFormSubmit = (e) => {
        e.preventDefault();
        setAuthData(email);
        history.replace('/');
    };
};

export default Login;