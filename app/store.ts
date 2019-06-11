import UserStore from '@models/user';
import { observable, action } from 'mobx';

class RootStore {
  public userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
  }
}

export default new RootStore();
