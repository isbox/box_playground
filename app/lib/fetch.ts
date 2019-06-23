import axios, { AxiosResponse, AxiosError } from 'axios';

const instance = axios.create();


// instance.interceptors.request.use(() => {
//
// });

instance.interceptors.response.use(
  (res: AxiosResponse): any => {
    return res.data.value;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

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

export const fetch = function<T = any>(options: options, method: method): Promise<T> {
  options.method = method;
  options.params = options.data;
  return instance.request(options);
};

export const get = function<T = any>(url: string, data = {}) {
  fetch<T>({ url, data }, method.get);
};

export const post = function<T = any>(url: string, data = {}) {
  return fetch<T>({ url, data }, method.post);
};
