const path = require('path');
const webpack = require('webpack');

module.exports = function(contextDir) {
  return {
    context: path.join(__dirname, contextDir),
    devtool: 'source-map',
    entry: {
          [contextDir]: "./index.js"
      },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015', 'stage-0']
            },
            include: path.join(__dirname, contextDir)
        }]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  };
}