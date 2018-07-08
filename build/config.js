module.export = {
    staticFilePath: 'static',
    dev: {
        NODE_ENV: '"development"',
        devtool: 'cheap-module-eval-source-map',
        staticPublicPath: '/',
        port: 8080
    },
    build: {
        NODE_ENV: '"production"',
        devtool: '#source-map',
        staticPublicPath: '/'
    }
};