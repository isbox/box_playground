import { post } from '@lib/fetch';

interface userInfo {
  userInfo: {
    _id: string,
    status: number,
    gender: string | number,
    name: string,
    birthday: string,
    telephone: string,
    email: string
  }
}

interface loginRequestParams {
  email: string,
  password: string
}

interface loginResponseParams extends userInfo {
  token: string
}

export const login = function(params: loginRequestParams) {
  return post<loginResponseParams>('/api/v0/user/sign_in', params).then(res => res);
};


interface userTokenParams {
  token: string
}

interface userInfoResponse extends userInfo {}

export const exchangeUserInfoByToken = function(params: userTokenParams) {
  return post<userInfoResponse>('/api/v0/user/getInfo', params).then(res => res);
};

