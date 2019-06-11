export default class Com {
    // 随机色
    public static colorDie() {
        return '#' + (Math.random() * 0xffffff << 0).toString(16);
    }
}
