import { observable, action, autorun } from 'mobx';
import { fetch } from '@/lib/fetch';

// TODO: 用户mobx模型
export default class UserStore {
    @observable
    userInfo = {
        name: '',
        nickname: '',
        uid: '',
        token: ''
    };

    @action.bound
    checkLogin() {
        return !!this.userInfo.token;
    }

    @action.bound
    userLogin(info) {
        this.userInfo = info;
    }

    constructor(rootStore) {
        // this.rootStore = rootStore;
    }
}