'use strict';

const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactServerWebpackPlugin = require('react-server-dom-webpack/plugin');

rimraf.sync(path.resolve(__dirname, '../build'));
webpack(
    {
        mode: 'development',
        devtool: 'cheap-module-source-map',
        entry: [path.resolve(__dirname, '../src/index.client.js')],
        output: {
            path: path.resolve(__dirname, '../build'),
            filename: 'main.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: path.resolve(__dirname, '../public/index.html'),
            }),
            new ReactServerWebpackPlugin({ isServer: false }),
        ],
    },
    d => console.log(d)
);
