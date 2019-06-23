import { observable, action, computed } from 'mobx';
import common from '@/lib/common';

// implements mobxStore.userInfo.store
// TODO: 用户mobx模型
export default class UserStore implements mobxStore.userInfo.store {
  constructor(rootStore: mobxStore.rootModel) {
    // this.rootStore = rootStore;
  }
  
  @observable
  loginModal = false;

  @observable
  isLogin = common.getLocalStorage('token');

  @observable
  userInfo: mobxStore.userInfo.info = {};

  @computed get login() {
    return !!this.isLogin
  }

  @action.bound
  userLogin(info: mobxStore.userInfo.info) {
    this.userInfo = info;
  }

  @action.bound
  openLogin() {
    this.loginModal = true;
  }

  @action.bound
  closeLogin() {
    this.loginModal = false;
  }
}
