import axios from 'axios';

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
        let mergeOpt = Object.assign({
            method: options.method || method
        }, options);

        axios(options)
            .then((resolve, reject) => {
                console.log(resolve);
            })
            .catch(err => {

            });
    }
}

export default Fetch;