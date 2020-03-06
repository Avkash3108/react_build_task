const styleLoaders =require('./loaders/styles/style-loaders');
const packageUtils = require('./utils/packageUtils');
const pathUtils = require('./utils/pathUtils');
const pkg = packageUtils.getConsumingPackage();

module.exports = {
    Bail: true,
    mode: 'production',
    entry: '/index',
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
        filename: `${pkg.name}`,
        path: pathUtils.getConsumingPackageResourcePath('dist')
    }
};
