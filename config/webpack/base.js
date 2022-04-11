const paths = require('../paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //Where files should be sent once they are bundled
  output: {    
    filename: 'js/[name].bundle.js',
    path: paths.dist,
    publicPath: '/',
    clean: true, // Очищает директорию dist перед обновлением бандла
    // Свойство стало доступно с версии 5.20.0, до этого использовался
    // CleanWebpackPlugin
    // module: true,
  },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      // JavaScript, React
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      // CSS, PostCSS, Sass
      {
        // test: /\.(scss|css)$/,
        test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // HTML
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: `${paths.src}/index.html`,
      filename: 'index.html',
      templateParameters: {        
        author: 'Buryak Evgeniy',
      }
    }), 
  ],
}