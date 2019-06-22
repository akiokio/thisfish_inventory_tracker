const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './frontend/src/index.js',
  },
  output: {
    filename:  '[name].bundle.js',
    path: path.resolve(__dirname, 'frontend', 'static', 'frontend')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  optimization: {
     splitChunks: {
       chunks: 'all'
     }
  }
};