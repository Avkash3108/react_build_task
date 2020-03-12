const styleLoaders =require('./loaders/styles/style-loaders');
const packageUtils = require('./utils/packageUtils');
const pathUtils = require('./utils/pathUtils');
const pkg = packageUtils.getConsumingPackage();
const TerserPlugin = require('terser-webpack-Plugin');

module.exports = {
    bail: true,
    mode: 'production',
    entry: './examples/index.js',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ].concat(styleLoaders)
    },
    optimization: {
        minimize: true,
        minimizer: [
        new TerserPlugin({
            extractComments: 'all',
            terserOptions: {
                output: {
                    comments: false
                }
            }
        }),
        ]
    },
    output: {
        filename: `${pkg.name}.js`,
        path: pathUtils.getConsumingPackageResourcePath('dist')
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    }
};
