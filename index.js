module.exports = {
    get WebpackDevServerConfig() {
        return require('./src/webpack.dev.config');
    }

    get WebpackProdServerConfig() {
        return require('./src/webpack.prod.config');
    }
};  