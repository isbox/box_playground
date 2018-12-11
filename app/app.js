import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from 'antd';
import { bindAll } from 'lodash';
import routes from './routes';
import Header from '@/components/header';

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
        return <div id="app">
            <Layout className="vh-100">
                <Sider collapsed={this.state.side}>
                    
                </Sider>
                <Layout>
                    <Header sideControl={this.sideControl} />
                    <Content>{routes()}</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>;
    }
}

render(<App />, document.querySelector('#root'));