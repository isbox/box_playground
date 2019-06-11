import { observable, action } from 'mobx';

// TODO: 用户mobx模型
export default class UserStore {
  @observable
  loginModal = false;

  @observable
  userInfo: Mbox.userInfoStore

  @action.bound
  checkLogin() {
    return !!this.userInfo.token;
  }

  @action.bound
  userLogin(info: userInfoStore) {
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

  constructor(rootStore: any) {
    // this.rootStore = rootStore;
  }
}
