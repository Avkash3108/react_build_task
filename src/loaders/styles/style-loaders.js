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
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          }
        ]
      }
];

module.exports = loaders;