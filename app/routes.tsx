import { Switch, Route } from 'react-router';
import { Component, ReactElement } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// class Content extends Component {
//   render() {
//     return (
//       <TransitionGroup>
//         <CSSTransition key={this.props.location.key} classNames="xg-page-animate" timeout={300}>
//           {this.props.children}
//         </CSSTransition>
//       </TransitionGroup>
//     );
//   }
// }

// 路由参数
interface route {
  path: string;
  content: any;
  exact?: boolean
}

// 路由配置
const routes: object[] = [
  ...require('./pages/home/routes'),
  ...require('./pages/test/routes')
];

export default (): ReactElement => {
  return (
    <Switch>
      {
        routes.map((route: route) => (
          <Route
            to={route.path}
            exact={route.exact === false ? false : true }
            component={route.content} />
        ))
      }
    </Switch>
  );
};
