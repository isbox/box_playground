import React, { Component, PureComponent } from 'react';
import { Modal, Input, Icon } from 'antd';
import { bindAll } from 'lodash';
import { inject, observer } from 'mobx-react';
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
		bindAll(this, [
			'onCancel',
			'onOk'
		]);
	}

	componentDidMount() {
		this.props.userStore.openLogin();
	}

	onCancel() {
		this.props.userStore.closeLogin();
	}

	onOk() {
    
		this.onCancel();
	}

	render() {
		// onCancel={cancelCallback}
		const { loginModal, userInfo } = this.props.userStore;
		const { modalWidth, userIcon, passwordIcon } = this.props;
		const { title } = this.state;

		return <Modal width={modalWidth} visible={loginModal} title={title}
		              onCancel={this.onCancel} onOk={this.onOk}>
			<div className="login-modal">
				<Input className="mb-10" placeholder="输入用账号/邮箱" prefix={userIcon} />
				<Input placeholder="输入密码" prefix={passwordIcon} />
			</div>
		</Modal>;
	}
}

LoginModal.defaultProps = {
	modalWidth: '20rem',
	userIcon: <Icon type="user" className="tc-light-gray" />,
	passwordIcon: <Icon type="key" className="tc-light-gray" />
};

export default LoginModal;