import React, { Component } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';


class Login extends Component {

    render() {
        const { userInfo } = this.props;
        const name = userInfo.name.substring(0, 1);

        return <div className={this.props.className}>
            <Dropdown overlay={menu}>
                <Avatar style={{background: Com.colorDie()}} icon={name ? '' : 'user'}>
                    {name}
                </Avatar>
            </Dropdown>
        </div>;
    }
}

export default Login;