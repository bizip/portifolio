const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module:{
      rules:[
          {
              test:/\.js$/,
              exclude:/node_modules/,
              loader:'babel-loader'
          },
          {
            test: /(\.css)$/,
            use: ["style-loader", "css-loader"]
          },
      ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer:{
      static:path.join(__dirname,'public')
  }
};