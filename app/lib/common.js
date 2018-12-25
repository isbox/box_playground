import axios from 'axios';

export default class Com {
    static axios() {
        
    }

    // 随机色
    static colorDie() {
        return '#' + (Math.random() * 0xffffff << 0).toString(16);
    }
}