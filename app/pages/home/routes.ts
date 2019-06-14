module.exports = [{
  path: '/',
  content: () => import(/* webpackChunkName: home-index */ './index')
}];
