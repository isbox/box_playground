import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';
import Login from '../login';

export default class Header extends PureComponent {
    render() {
        return <Layout.Header className="pl-10 pr-10">
            <h3 className="tc-white m-0 flex-row align-items-center">
                <Icon onClick={this.props.sideControl} className="fs-24 mr-10 pointer" type="bars" />
                playground
            </h3>
            <Login />
        </Layout.Header>;
    }
}

Header.propTypes = {
    sideControl: PropTypes.func
};