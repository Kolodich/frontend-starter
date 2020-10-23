const paths = require('./paths.json');

const config = {
 mode: 'development',
 entry: {
  "index.js": paths.src.page.pathFolder+"index/index.js",
 },
 module: {
  rules:[
   {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /(node_modules|bower_components)/,
   }
  ]
 },
 output: {
  filename: '[name]'
 },
};

module.exports.webpacConfig = config;