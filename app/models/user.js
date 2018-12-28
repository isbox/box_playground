import { observable, action } from 'mobx';
import { fetch } from '@/lib/fetch';

// TODO: 用户mobx模型
export default class UserStore {
    @observable
    loginModal = false;
    
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

    @action.bound
    openLogin() {
        if ( !this.userInfo.token ) {
            this.loginModal = true;
        }
    }

    @action.bound
    closeLogin() {
        this.loginModal = false;
    }

    constructor(rootStore) {
        // this.rootStore = rootStore;
    }
}