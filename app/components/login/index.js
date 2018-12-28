import React, { Component, PureComponent } from 'react';
import { Modal, Input, Icon } from 'antd';
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
    }

    componentDidMount() {
        this.props.userStore.openLogin();
    }

    render() {
        // visible={'loginModal'} 
        // title={title}
        // confirmLoading={loading}
        // onOk={oKCallback} 
        // onCancel={cancelCallback}
        const { loginModal, userInfo } = this.props.userStore;
        const { modalWidth, userIcon, passwordIcon } = this.props;
        const { title } = this.state;

        return <Modal width={modalWidth} visible={loginModal} title={title}>
            <div className="login-modal">
                <Input className="mb-10" placeholder="输入用账号/邮箱" prefix={userIcon}></Input>
                <Input placeholder="输入密码" prefix={passwordIcon}></Input>
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