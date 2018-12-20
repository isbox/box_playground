import { observable, action } from 'mobx';

// TODO: 用户mobx模型
export default class UserStore {
    // @observable
    // userInfo = {
    //     name: '',
    //     nickname: '',
    //     uid: '',
    //     token: ''
    // };

    @observable ac = 1;

    @action.bound
    userLogin(info) {
        // this.userInfo = info;
    }

    constructor(rootStore) {
        // this.rootStore = rootStore;
    }
}