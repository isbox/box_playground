const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
const baseWebpackConfig = require('./webpack.base');

let htmlTemplate = path.join(__dirname, '../', 'app', 'templates/index.tmpl.html');

module.exports = merge(baseWebpackConfig, {
    devtool: config.dev.devtool,
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: path.join(__dirname, '../', 'app'),
            exclude: [path.join(__dirname, '../', 'node_modules')]
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: config.dev.NODE_ENV
            }
        }),
        new HtmlWebpackPlugin({
            template: htmlTemplate,
            inject: false
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '../', 'app'),
        hot: true,
        inline: true,
        disableHostCheck: true,
        historyApiFallback: true,
        port: config.dev.port
    }
});