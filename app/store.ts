import UserStore from '@models/user';

class RootStore implements mobxStore.rootModel {
  public userStore: mobxStore.userInfo.store;

  constructor() {
    this.userStore = new UserStore(this);
  }
}

export default new RootStore();
