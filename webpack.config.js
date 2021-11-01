const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: './src/app.ts',
  output: {
    filename: 'xabyss.js',
    library: 'xabyss',
    libraryTarget: 'var',
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};