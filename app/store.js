import UserStore from '@/models/user';

class RootStore {
    constructor() {
        this.userStore = new UserStore(this);
    }
}