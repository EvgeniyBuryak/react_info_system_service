const path = require('path');

/** Main const */
module.exports = {
  public: path.resolve(__dirname, '../public'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'), // Директория, в которой будет
  // размещаться итоговый бандл, папка dist в корне приложения
  // assets: 'assets/'
};