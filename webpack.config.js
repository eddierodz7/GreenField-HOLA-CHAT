const path = require('path');

module.exports = {
  entry:{
 index: './client/src/app.js',
},
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules|packages/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader', 'sass-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: './client/dist',
    host: 'localhost',
    historyApiFallback: true,
    // respond to 404s with index.html
    inline: true
  }
};
