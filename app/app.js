import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from 'antd';
import routes from './routes';
import Header from '@/components/header';

import 'antd/dist/antd.less';
import './assets/css/app.less';

const { Footer, Sider, Content } = Layout;
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="app">
            <Layout className="vh-100">
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>{routes()}</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>;
    }
}

render(<App />, document.querySelector('#root'));