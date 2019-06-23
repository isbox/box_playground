import React, { Component, ChangeEvent } from 'react';
import { Modal, Input, Icon, message } from 'antd';
import { inject, observer } from 'mobx-react';
import commom from '@lib/common';
import * as api from './api';
import './style.less';

interface userStore {
  userStore?: mobxStore.userInfo.store
}

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
		email: string,
		password: string
	};

	constructor(props: props) {
		super(props);
		this.state = {
			title: '登陆'
		};
    this.loginData = { email: '', password: '' };
	}

	async componentDidMount() {
    const token = commom.getLocalStorage('token');
    if ((token as string)) {
    	const { userLogin } = this.props.userStore;
    	const res = await api.exchangeUserInfoByToken({ token: (token as string) });
      userLogin(res.userInfo);
		}
	}

	onInput = (field: inputFeild) => {
	  return (e: ChangeEvent) => {
      this.loginData[field] = (e.target as HTMLInputElement).value.trim();
    };
  };

	onCancel = () => {
		this.props.userStore.closeLogin();
	};

	// 登陆，成功后存入token及用户信息
	onOk = async () => {
		const res = await api.login(this.loginData);
		const { userLogin } = this.props.userStore;
		commom.setLocalStorage('token', res.token);
		userLogin(res.userInfo);
		message.success('登录成功');
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
