enum type {
  object = 'object',
  array = 'array',
  string = 'string',
  number = 'number',
  function = 'function',
  symbol = 'symbol'
}


export default class Com {
    // 随机色
    public static colorDie() {
      return '#' + (Math.random() * 0xffffff << 0).toString(16);
    }

    public static type(variable: any): string {
      return Object.prototype.toString.call(variable).slice(8, -1).toLocaleLowerCase();
    }

    public static typeValidate(val: any, type: type): boolean {
      return Com.type(val) === type;
    }
    
    // 将值存入localStore中
    public static setLocalStorage(key: string, val: string | [] | {}): void {
      let value: string;
      if (Com.typeValidate(val, type.string)) {
        value = val.toString();
      } else {
        value = JSON.stringify(val);
      }
      localStorage.setItem(key, value);
    }

    // 将值从localStore取出
    public static getLocalStorage(key: string): string | [] | {} {
      const val = localStorage.getItem(key);
      if (!val) {
        return null;
      }
      try {
        return JSON.parse(val);
      } catch(e) {
        return val;
      }
    }
}
