const styleLoaders =require('style-loader');
const webpack = require('webpack');
const port = 8080;

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
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ].concat(styleLoaders)
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
