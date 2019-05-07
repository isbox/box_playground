import React, { Component, PureComponent } from 'react';
import { Modal, Input, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import api from './api';
import './style.less';

const getUserStore = rootStore => ({userStore: rootStore.store.userStore});

@inject(getUserStore)
@observer
class LoginModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '登陆'
		};
    this.loginData = {};
	}

	componentDidMount() {
		this.props.userStore.openLogin();
	}

	onInput = (field) => {
	  return e => {
      this.loginData[field] = e.target.value.trim();
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
          <Input className="mb-10"onChange={this.onInput('email')} placeholder="输入用账号/邮箱" prefix={userIcon} />
          <Input onChange={this.onInput('password')} placeholder="输入密码" prefix={passwordIcon} />
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