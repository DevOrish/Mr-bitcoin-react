import React from 'react';
import Home from './views/Home'
import Login from './views/Login'
import ContactPage from './views/ContactPage'
import ContactDetails from './views/ContactDetails'
import ContactEdit from './views/ContactEdit'
import { Route, Switch } from 'react-router-dom'

function Router() {
    return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/contact/edit/:id?" component={ContactEdit} />
                <Route exact path="/contact/:id" component={ContactDetails} />
            </Switch>
    );
}

export default Router;
