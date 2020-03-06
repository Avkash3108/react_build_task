const loaders = [
    {
    	test: /\.css$/,
    	use: [
    	    'style-loader',
    	    'css-loader'
    	]
    },
    {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // Loader for webpack to process CSS with PostCSS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
];

module.exports = loaders;