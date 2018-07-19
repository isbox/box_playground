import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

const routes = {
    ...require('./pages/home/routes'),
    childRoutes: [
        require('./pages/test/routes')
    ]
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="app">
            <h3>Hello React!</h3>
            <p>you can start react project</p>
            <Router history={browserHistory} routes={routes} />
        </div>;
    }
}

render(<App />, document.querySelector('#root'));