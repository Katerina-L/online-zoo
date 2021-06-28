const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   mode: 'development',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [ {
         test: /\.(png|svg|jpe?g|gif)$/,
         include: /img/,
         use: [
           {
             loader: 'file-loader',
             options: {
               name: '[name].[ext]',
               outputPath: 'img/',
               publicPath: 'img/'
             }
           }
         ]
      },
         {
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};