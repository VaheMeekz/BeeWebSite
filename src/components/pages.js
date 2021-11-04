import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {routes} from "../utils/routes/routes";
import {HOME_PAGE} from "../utils/urls/urls";

const Pages = () => {
    return (
        <Switch>
            {
                routes.map(({path, component}) => {
                    return <Route
                        key={path}
                        path={path}
                        component={component}
                        exact
                    />
                })
            }
            <Redirect to={HOME_PAGE}/>
        </Switch>
    );
};

export default Pages;