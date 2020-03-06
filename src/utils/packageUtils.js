const pathUtils = require('./pathUtils');

function getConsumingPackage() {
	const consumingPackagePath = pathUtils.getConsumingPackageResourcePath('package.json'); 
    return require(consumingPackagePath);
}

module.exports = {
	getConsumingPackage
};