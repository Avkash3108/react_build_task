const styleLoaders =require('./loaders/styles/style-loaders');
const assetsLoaders =require('./loaders/assets/assets-loaders');
const webpack = require('webpack');
const path  = require('path');
const port = 5555;

module.exports = {
    devServer: {
        static: [
            {
              directory: "./examples"
            }
        ],
        allowedHosts: "all",
        host: '127.0.0.1',
        hot: 'only',
        port
    },
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${port}`,
        './examples/index.js'
    ],
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ].concat(styleLoaders).concat(assetsLoaders)
    },
    output: {
        'filename': 'app.js',
        'path': '/examples/',
        'publicPath': '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
