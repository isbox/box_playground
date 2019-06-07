import { observable, action } from 'mobx';

interface userInfo {
  name?: string,
  nickname?: string,
  uid: number | null,
  token: string
}

// TODO: 用户mobx模型
export default class UserStore {
  @observable
  loginModal = false;

  @observable
  userInfo: userInfo = {
    name: '',
    nickname: '',
    uid: null,
    token: ''
  };

  @action.bound
  checkLogin() {
    return !!this.userInfo.token;
  }

  @action.bound
  userLogin(info: userInfo) {
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
