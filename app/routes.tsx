import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import loader from 'react-loadable';
import Loading from '@components/loader/page-loader';

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

console.log(routes);

export default (): JSX.Element => {
  return (
    <TransitionGroup>
      <CSSTransition key={window.location.pathname} classNames="xg-page-animate" timeout={300}>
        <Switch>
          {
            routes.map((route: route) => {
              const com = loader({
                loader: route.content,
                loading: Loading
              });
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact === false ? false : true }
                  component={com}
                />
              );
            })
          }
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
