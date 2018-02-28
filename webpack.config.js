'use strict'

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const env = require('yargs').argv.env

let libraryName = 'zebbra'
let plugins = [
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({'process.env': {ENV: env, NODE_ENV: env}})
]

const paths = {
  libSrc: path.resolve(__dirname, 'src'),
  libIndex: path.resolve(__dirname, 'src/index.js'),
  libOutputDir: path.resolve(__dirname, 'lib'),
  libModules: path.resolve(__dirname, 'node_modules')
}

module.exports = {
  entry: paths.libIndex,
  output: {
    path: paths.libOutputDir,
    filename: libraryName + '.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: env,
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    modules: [paths.libModules, paths.libSrc]
  },
  externals: [nodeExternals()],
  plugins: plugins,
  optimization: {
    minimize: env === 'production'
  }
}
