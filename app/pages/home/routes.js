module.exports = {
    path: '/',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./index').default);
            }, 'home-index');
        }
    }
};