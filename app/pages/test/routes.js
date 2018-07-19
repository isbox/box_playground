module.exports = {
    path: 'test',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./index').default);
            }, 'test-index');
        }
    },
    childRoutes: [{
        path: 'demo01',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./demo01').default);
            }, 'test-demo01');
        }
    }]
};