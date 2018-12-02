import React, { Component } from 'react';
import { Layout, Icon } from 'antd';

export default class Header extends Component {

    render() {
        return <Layout.Header className="pl-10 pr-10">
            <h3 className="tc-white m-0 flex-row align-items-center">
                <Icon className="fs-24 mr-10 pointer" type="bars" />
                playground
            </h3>
        </Layout.Header>;
    }
}