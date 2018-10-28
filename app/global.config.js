(function(window) {
    let { port, host } = window.location;
    window.GLOBAL = {
        apiUrl: port ? `localhost:8080` : `${host}/api/`,
    };
})(top);