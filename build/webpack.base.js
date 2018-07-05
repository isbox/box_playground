"use strict"

const path = require('path');
const ManifestPlugin = require('manifest-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
};

module.export = {
    rules: [
        {
            test: /\.js[x]$/,
            use: {
                loader: 'babel-loader',
                include: [resolve('app')]
            }
        }
    ]
};