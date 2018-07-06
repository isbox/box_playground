"use strict";

const path = require('path');
const ManifestPlugin = require('manifest-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.export = {
    rules: [
        {
            test: /\.js[x]$/,
            use: {
                loader: 'babel-loader',
                include: [resolve('app')]
            }
        }, {
            test: /\.less$/,
            use: {
                loader: '',
            }
        }, {
            test: /\.jpe?g|png|gif|svg$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:
                }
            }
        }
    ]
};