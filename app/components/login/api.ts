import { post } from '@lib/fetch';

interface loginRequestParams {
  
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

export const login = function(params: loginRequestParams): Promise<loginResponseParams> {
  return post('/api/v0/user/sign_in', params)
};

export default {
  login
};
