const loaders = [
    {
      test: /\.(jpg|png)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 250000,
        },
      },
    }
];

  [
  ['woff', 'application/font-woff'],
  ['woff2', 'application/font-woff2'],
  ['otf', 'font/opentype'],
  ['ttf', 'application/octet-stream'],
  ['eot', 'application/vnd.ms-fontobject'],
  ['svg', 'image/svg+xml'],
  ].forEach((font) => {
  const extension = font[0]
  const mimetype = font[1]
  
  loaders.push({
    test : new RegExp(`\\.${extension}$`),
    use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
  })
})

module.exports = loaders;