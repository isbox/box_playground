module.exports = {
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./index').default);
        }, 'home-index');
    }
};