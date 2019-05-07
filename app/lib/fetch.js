import axios from 'axios';

const instance = axios.create();
// instance.interceptors.request.use(() => {
//
// });

instance.interceptors.response.use((res) => {
  return res.data;
});

class Fetch {

  static get(url, options = {}) {
    options.url = url;
    Fetch.fetch(options, 'get');
  }

  static post(url, options = {}) {
    options.url = url;
    Fetch.fetch(options, 'post');
  }

  static fetch(options, method) {
    options.method = method;
    if (method.toLocaleLowerCase() === 'get') {
      options.params = data;
    }
    return instance(options);
  }
}

export const fetch = function (options, method) {
  options.method = method;
  if (method.toLocaleLowerCase() === 'get') {
    options.params = options.data;
  }
  return instance(options);
};

export const get = function(url, options = {}) {
  options.url = url;
  fetch(options, 'get');
};

export const post = function(url, data = {}) {
  fetch({ url, data }, 'post');
};
