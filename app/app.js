import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { LocaleProvider, Layout } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { bindAll } from 'lodash';
import routes from './routes';
import store from './store';
import Header from '@/components/header';
import LoginModal from '@/components/login';

import 'antd/dist/antd.less';
import './assets/css/app.less';

const { Footer, Sider, Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: false
        };
        bindAll(this, [
            'sideControl'
        ]);
    }

    sideControl() {
        this.setState({
            side: !this.state.side
        });
    }

    render() {
        return <LocaleProvider locale={zhCN}>
            <div id="app">
                <Layout className="vh-100">
                    <Sider collapsed={this.state.side}>

                    </Sider>
                    <Layout>
                        <Header sideControl={this.sideControl} />
                        <Content>{routes()}</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
                <LoginModal />
            </div>
        </LocaleProvider>;
    }
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);