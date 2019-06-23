import { post } from '@lib/fetch';

interface loginRequestParams {
  email: string,
  password: string
}

interface loginResponseParams {
  token: string
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

export const login = async function(params: loginRequestParams) {
  return post<loginResponseParams>('/api/v0/user/sign_in', params).then(res => res);
};

export default {
  login
};
