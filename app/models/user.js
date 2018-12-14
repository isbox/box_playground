import { observable, action } from 'mobx';

// TODO: 用户mobx模型
export default class UserStore {
    @observable
    userInfo = '';

    @action.bound
    userLogin(info) {
        this.userInfo = info;
    }
}