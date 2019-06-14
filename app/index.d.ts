import * as React from 'react';

declare global {
  const React: typeof React;

  namespace mobxStore {
    interface rootModel {
      userStore: userInfo.store
    }

    // mobx整体模型
    interface rootStore {
      store: rootModel
    }

    // 用户mobx模型
    namespace userInfo {
      interface store {
        loginModal: boolean,
        userInfo: info,
        checkLogin: () => boolean,
        userLogin: (info: info) => void,
        openLogin: () => void,
        closeLogin: () => void
      }

      interface info {
        name?: string,
        nickname?: string,
        uid?: number | string,
        token?: string
      }
    }
  }
}
