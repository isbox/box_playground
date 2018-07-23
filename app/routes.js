import { Router, browserHistory } from 'react-router';
import React, { Component} from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Content extends Component{
    render() {
        return <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="xg-page-animate" timeout={300}>
                {this.props.children}
            </CSSTransition>
        </TransitionGroup>;
    }
}

// 路由配置
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

export default () => {
    return <Router history={browserHistory} routes={routes} />;
};