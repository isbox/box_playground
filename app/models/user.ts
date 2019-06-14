import { observable, action } from 'mobx';

// implements mobxStore.userInfo.store
// TODO: 用户mobx模型
export default class UserStore implements mobxStore.userInfo.store {
  constructor(rootStore: mobxStore.rootModel) {
    // this.rootStore = rootStore;
  }
  
  @observable
  loginModal = false;

  @observable
  userInfo: mobxStore.userInfo.info = {}

  @action.bound
  checkLogin() {
    return !!this.userInfo.token
  }

  @action.bound
  userLogin(info: mobxStore.userInfo.info) {
    this.userInfo = info;
  }

  @action.bound
  openLogin() {
    if (!this.userInfo.token) {
      this.loginModal = true;
    }
  }

  @action.bound
  closeLogin() {
    this.loginModal = false;
  }
}
