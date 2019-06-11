import * as React from 'react';

declare global {
  const React: typeof React

  namespace mobxStore {
    // mobx整体模型
    interface rootStore {
      store: {
        userStore: userInfoStore
      }
    }
  
    // 用户mobx模型
    interface userInfoStore {
      name?: string,
      nickname?: string,
      uid: number | null,
      token: string
    }
  }
}
