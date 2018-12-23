import Recat, { Component } from 'react';
import { inject } from 'mobx-react';

// TODO: 登录组件
@inject(rootStore => rootStore.store.userStore)
class Login extends Component {

    render() {
        return null;
    }
}

export default Login;