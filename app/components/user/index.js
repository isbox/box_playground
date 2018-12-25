import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import Com from '@/lib/common';

const visitorMenu = (
    <Menu>
        <Menu.Item key="0">
            <a>登陆</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a>注册</a>
        </Menu.Item>
    </Menu>
);

const User = function(props) {
    const { userInfo } = props;
    const name = userInfo.name.substring(0, 1);

    return <div className={props.className}>
        <Dropdown overlay={visitorMenu}>
            <Avatar style={{background: Com.colorDie()}} icon={name ? '' : 'user'}>
                {name}
            </Avatar>
        </Dropdown>
    </div>;
};

export default User;