import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Create from './pages/Create';
import CreateSuccess from './pages/CreateSuccess';
import Product from './pages/Product';
import Show from './pages/Show';
import Edit from './pages/Edit';

const Routes = () => (

    <BrowserRouter basename="wesley-alves.com/">
        <Switch>
            <Route exact path="/" component={Product}/>
            <Route exact path="/cadastro" component={Create}/>
            <Route exact path="/cadastro/success" component={CreateSuccess}/>
            <Route exact path="/produtos/edit/:id" component={Edit}/>
            <Route exact path="/produtos/show/:id" component={Show}/>
        </Switch>
    </BrowserRouter>

);

export default Routes;
