import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../components/home";

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default AppRoutes;