module.exports = {
	env: {
		test: {
			plugins: ['istanbul']
		}
	},
	presets: [
	    "@babel/preset-env",
	    "@babel/preset-react"
	],
};