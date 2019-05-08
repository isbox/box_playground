import { post } from '@lib/fetch';

export const login = async function(params) {
  try {
    return await post('/api/v0/user/sign_in', params);
  } catch (e) {}
};

export default {
  login
};
