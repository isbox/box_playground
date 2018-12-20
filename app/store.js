import UserStore from '@/models/user';
import { observable, action } from 'mobx';

export default class RootStore {
    @observable todos = [];
    @observable pendingRequests = 0;
    // constructor() {
    //     this.userStore = new UserStore(this);
    // }
}