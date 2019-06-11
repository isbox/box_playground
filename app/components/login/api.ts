import { post } from '@lib/fetch';

interface loginRequestParams {
  
}

interface loginResponseParams {
  data: number
}

export const login = async function(params: loginRequestParams): Promise<loginResponseParams> {
  try {
    const response = await post('/api/v0/user/sign_in', params);
    return response.data
  } catch (e) {}
};

export default {
  login
};
