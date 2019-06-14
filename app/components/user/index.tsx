import React, { PureComponent } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import Com from '@/lib/common';

type props = {
  className?: string,
  userInfo: any
}

type state = {
  title: string,
  username: string
}

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

class User extends PureComponent<props, state> {
  constructor(props: props) {
      super(props);
      const { userInfo = {} } = props;
      const name = userInfo.name ? userInfo.name.substring(0, 1) : '';
      this.state = {
          title: '',
          username: name
      };
  }

  render() {
      const { username } = this.state;
      const { className } = this.props
      return <div className={className}>
          <Dropdown overlay={visitorMenu}>
              <Avatar style={{background: Com.colorDie()}} icon={username ? '' : 'user'}>
                  {username}
              </Avatar>
          </Dropdown>
      </div>;
  }
};

export default User;
