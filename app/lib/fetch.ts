import axios from 'axios';

const instance = axios.create();
// instance.interceptors.request.use(() => {
//
// });

instance.interceptors.response.use((res) => {
  return res.data;
});

enum method {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete'
}

interface options {
  url: string,
  method?: method,
  headers?: any,
  data?: {},
  params?: {}
}

export const fetch = function(options: options, method: method) {
  options.method = method;
  options.params = options.data;
  return instance(options);
};

export const get = function(url: string, data = {}) {
  fetch({ url, data }, method.get);
};

export const post = function(url: string, data = {}) {
  return fetch({ url, data }, method.post);
};
