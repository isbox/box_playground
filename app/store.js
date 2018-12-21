import UserStore from '@/models/user';
import { observable, action } from 'mobx';

class RootStore {
    @observable todos = [];
    @observable pendingRequests = 0;
    constructor() {
        this.userStore = new UserStore(this);
        console.log(this.userStore);
    }
}

export default new RootStore();