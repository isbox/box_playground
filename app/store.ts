import UserStore from '@/models/user';
import { observable, action } from 'mobx';

class RootStore {

  constructor() {
    this.userStore = new UserStore(this);
  }
}

declare module 'store' {
  export default new RootStore();
}
