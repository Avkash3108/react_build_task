const rimraf = require('rimraf');
const pathUtils = require('../utils/pathUtils')


function showErrors(errors) {
	console.error(errors.stack || errors)

	if(errors.details) {
		console.error(errors.details);
	}
	process.exit(1);
}


function showStats(stats) {
	console.log(stats.toString({
		color: true
	}));

	if(stats.hasErrors()) {
		process.exit(1);
	}
}

function run(params) {
	const config = require(pathUtils.getConsumingPackageResourcePath(params.config));
	const webpack = require('webpack');

	if(params.clean) {
		rimraf.sync(config.output.path);
	}
	webpack(config).run((errors, stats) => {
		errors ? showErrors(errors) :  showStats(stats);
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
		default: 'webpack.prod.config.js',
		type: 'string'
	}
};
exports.handler = run