import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import asyncComponent from './lib/asyncComponent';
// const Index = asyncComponent(() => import('./pages/home/index'));
const routes = [
    ...require('./pages/home/routes'),
    ...require('./pages/test/routes')
];

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="app">
            <h3>Hello React!</h3>
            <p>you can start react project</p>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={asyncComponent(() => import('./pages/home/index'))} />
                    <Route path="/test" exact component={asyncComponent(() => import('./pages/test/index'))} />
                    <Route path="/demo" component={asyncComponent(() => import('./pages/test/demo01'))} />
                </Switch>
            </BrowserRouter>
        </div>;
    }
}

render(<App />, document.querySelector('#root'));