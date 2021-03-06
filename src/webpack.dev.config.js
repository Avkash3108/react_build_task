const styleLoaders =require('./loaders/styles/style-loaders');
const assetsLoaders =require('./loaders/assets/assets-loaders');
const webpack = require('webpack');
const port = 5555;

module.exports = {
    devServer: {
        contentBase: './examples',
        disableHostCheck: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        port,
        stats: {
            cached: false,
            cachedAssets: false,
            colors: true
        }
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
