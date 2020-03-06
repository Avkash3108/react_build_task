const path = require('path');

function getConsumingPackageResourcePath(resource) {
	return path.join(process.cwd(), resource); 
}

module.exports = {
	getConsumingPackageResourcePath
};