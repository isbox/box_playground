import UserStore from '@/models/user';

export default class RootStore {
    constructor() {
        this.userStore = new UserStore(this);
    }
}