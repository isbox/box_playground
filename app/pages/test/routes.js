module.exports = [{
  path: '/test',
  content: () => import(/* webpackChunkName: test-index */ './index')
}, {
  path: '/test/demo01',
  content: () => import(/* webpackChunkName: test-demo01 */ './demo01')
}];
