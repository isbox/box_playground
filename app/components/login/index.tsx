import React, { Component, ChangeEvent } from 'react';
import { Modal, Input, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import api from './api';
import './style.less';

interface userStore {
  userStore?: mobxStore.userInfo.store
};

enum inputFeild {
	email = 'email',
	password = 'password'
}

interface props extends userStore {
	modalWidth: string,
	userIcon: JSX.Element,
	passwordIcon: JSX.Element
}

const getUserStore = (rootStore: mobxStore.rootStore): userStore => (
	{ userStore: rootStore.store.userStore }
);

@inject(getUserStore)
@observer
class LoginModal extends Component<props, { title: string }> {
	static defaultProps: { modalWidth: string; userIcon: JSX.Element; passwordIcon: JSX.Element; };
	loginData: {
		email?: string,
		password?: string
	}

	constructor(props: props) {
		super(props);
		this.state = {
			title: '登陆'
		};
    this.loginData = {};
	}

	componentDidMount() {
		// this.props.userStore.openLogin();
	}

	onInput = (field: inputFeild) => {
	  return (e: ChangeEvent) => {
      this.loginData[field] = (e.target as HTMLInputElement).value.trim();
    };
  };

	onCancel = () => {
		this.props.userStore.closeLogin();
	};

	onOk = () => {
    api.login(this.loginData);
		this.onCancel();
	};

	render() {
		const { loginModal, userInfo } = this.props.userStore;
		const { modalWidth, userIcon, passwordIcon } = this.props;
		const { title } = this.state;

		return (
      <Modal
        width={modalWidth}
        visible={loginModal}
        title={title}
        onCancel={this.onCancel}
        onOk={this.onOk}>
        <div className="login-modal">
          <Input
						className="mb-10"
						onChange={this.onInput(inputFeild.email)}
						placeholder="输入用账号/邮箱" prefix={userIcon}
					/>
          <Input
						onChange={this.onInput(inputFeild.password)}
						placeholder="输入密码"
						prefix={passwordIcon}
					/>
        </div>
      </Modal>
    );
	}
}

LoginModal.defaultProps = {
	modalWidth: '20rem',
	userIcon: <Icon type="user" className="tc-light-gray" />,
	passwordIcon: <Icon type="key" className="tc-light-gray" />
};

export default LoginModal;
