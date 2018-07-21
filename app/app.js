import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Link } from 'react-router';
import CSSTransitionGroup from 'react-transition-group';
import 'antd/dist/antd.less';
import './assets/css/app.less';

import './api/mock';

class Content extends Component{
    render() {
        return <CSSTransitionGroup transitionName="xg-page-animate" transitionAppear transitionApperTimeout={500} transitionEnterTimeout={500}
transitionLeaveTimeout={500}>
            {
                React.cloneElement(
                    this.props.children, {}
                )
            }
        </CSSTransitionGroup>;
    }
}

const routes = {
    path: '/',
    component: Content,
    indexRoute: [
        require('./pages/home/routes'),
    ],
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
            <Link to="/">首页</Link> <Link to="/test">test页</Link> <Link to="/test/demo01">demo01页</Link>
            <Router history={browserHistory} routes={routes} />
        </div>;
    }
}

render(<App />, document.querySelector('#root'));