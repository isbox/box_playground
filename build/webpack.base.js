"use strict";
const path = require('path');
const config = require('./config');
function resolve(dir) {
    return path.join(__dirname, '../', dir)
}

// [`webpack-dev-server/client?localhost:${config.dev.port}`, resolve('app/app.js')],

module.exports = {
    context: path.resolve('..'),
    entry: {
        app: process.env.NODE_ENV === 'product'
            ? resolve('app/app.js')
            : [`webpack-dev-server/client?localhost:${config.dev.port}`, resolve('app/app.js')],
        vendors: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'product'
            ? config.build.staticPublicPath
            : config.dev.staticPublicPath
    },
    resolve: {
        // modules: [resolve('node_modules')],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': resolve('app')
        }
    },
    resolveLoader: {
        modules: [resolve('node_modules')]
    },
    module: {
        rules: [
            {
                test: /.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss-loader',
                        plugin: require('autoprefixer')({
                            browsers: [
                                'defaults',
                                'not ie < 11',
                                'last 2 versions',
                                '> 1%',
                                // 'iOS 7',
                                'last 3 iOS versions'
                            ]
                        })
                    }
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }, {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        exclude: resolve('node_modules')
                        // include: [resolve('app')]
                    }
                }
            }, {
                test: /\.jpe?g|png|gif|svg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: resolve(`${config.staticFilePath}/img/[name].[hash:7].[ext]`)
                    }
                }
            }, {
                test: /\.woff2?|eot|ttf|otf$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: resolve(`${config.staticFilePath}/font/[name].[hash:7].[ext]`)
                    }
                }
            }
        ]
    }
};