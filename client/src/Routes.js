import React from "react";

import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from "./components/Pages/Login";

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    </Router>
);
export default Routes;