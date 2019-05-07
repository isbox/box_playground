const mockServer = 'http://127.0.0.1:4000';

module.exports = {
  staticFilePath: 'static',
  dev: {
    NODE_ENV: '"development"',
    devtool: 'cheap-module-eval-source-map',
    staticPublicPath: '/',
    useEslint: true,
    port: 8080,
    proxy: {
      '/api': {
        target: mockServer,
        secure: false
      }
    }
  },
  build: {
    NODE_ENV: '"production"',
    devtool: 'source-map',
    staticPublicPath: '/'
  }
};