const rimraf = require('rimraf');
const pathUtils = require('../utils/pathUtils')

function runCommand(params) {
	const config = pathUtils.getConsumingPackageResourcePath(params.config);
	const webpack = require('webpack');

	if(params.clean) {
		rimraf.sync(config.output.path);
	}
	webpack(config).run((errors, stats) => {
		errors ? console.log(errors) :  console.log(stats);
	})
}

exports.command = 'build';
exports.describe = 'Build javaScripts package using webpack.'
exports.builder = {
	clean: {
		default:  true,
		type: 'boolean'
	},
	config: {
		default: 'webpack.prod.config',
		type: 'string'
	}
};
exports.builder = runCommand