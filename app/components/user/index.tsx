import React, { PureComponent } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import Com from '@/lib/common';

type props = {
  className?: string,
  userStore: mobxStore.userInfo.store
}

type state = {
  title: string,
  username: string
}

class User extends PureComponent<props, state> {
  constructor(props: props) {
      super(props);
      const { userStore: { userInfo } } = props;
      const name = userInfo.name ? userInfo.name.substring(0, 1) : '';
      this.state = {
          title: '',
          username: name
      };
  }

  menuRender = () => {
    const { userStore: { openLogin } } = this.props;
    return (
      <Menu>
        <Menu.Item key="0">
          <a onClick={openLogin}>登陆</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a>注册</a>
        </Menu.Item>
      </Menu>
    );
  };

  render() {
      const { username } = this.state;
      const { className } = this.props;
      return <div className={className}>
          <Dropdown overlay={this.menuRender()}>
              <Avatar style={{background: Com.colorDie()}} icon={username ? '' : 'user'}>
                  {username}
              </Avatar>
          </Dropdown>
      </div>;
  }
}

export default User;
