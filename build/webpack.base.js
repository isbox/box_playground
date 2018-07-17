"use strict";
const path = require('path');
const config = require('./config');
function resolve(dir) {
    return path.join(__dirname, '../', dir)
}

// [`webpack-dev-server/client?localhost:${config.dev.port}`, resolve('app/app.js')],

module.exports = {
    context: path.resolve('../'),
    entry: {
        app: resolve('app/app.js'),
        vendors: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: process.env.NODE_ENV === 'product' ? resolve('dist') : resolve('app'),
        filename: './public/js/[name].js',
        chunkFilename: './public/js/[id]-[name].chunk.js',
        publicPath: process.env.NODE_ENV === 'product'
            ? config.build.staticPublicPath
            : config.dev.staticPublicPath
    },
    resolve: {
        modules: [resolve('node_modules')],
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
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // loader: 'babel?presets[]=react,presets[]=es2015,plugins[]=transform-object-assign'
            }, {
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
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 5000,
                    name: '/public/css/img/[name].[hash:6].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 5000,
                    name: '/public/css/fonts/[name].[hash:6].[ext]'
                }
            }
        ]
    }
};