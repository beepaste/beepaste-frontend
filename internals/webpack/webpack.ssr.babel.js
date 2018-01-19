// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const imageWebpackQuery = require('./imageWebpackQuery');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractVendorCSSPlugin = new ExtractTextPlugin('vendor.[contenthash].css');
const vendorCSSLoaders = extractVendorCSSPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader',
});
const outputPath = path.join(process.cwd(), 'server', 'middlewares');

module.exports = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: [
    'babel-polyfill',
    path.join(process.cwd(), 'app/serverEntry.js'),
  ],
  output: {
    path: outputPath,
    filename: 'generated.serverEntry.js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // Transform all .js files required somewhere with Babel
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        plugins: [
          'dynamic-import-node',
        ],
      },
    },
    {
      // Preprocess our own .css files
      // This is the place to add your own loaders (e.g. sass/less etc.)
      // for a list of loaders, see https://webpack.js.org/loaders/#styling
      test: /\.css$/,
      exclude: /node_modules/,
      use: vendorCSSLoaders,
    },
    {
      // Preprocess 3rd party .css files located in node_modules
      test: /\.css$/,
      include: /node_modules/,
      use: vendorCSSLoaders,
    },
     {
      test: /\.json$/,
      loader: 'json-loader',
    },
    {
      test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
      use: 'file-loader',
    },
     {
      test: /\.(jpg|png|gif)$/,
      loaders: [
        {
          loader: 'file-loader',
          query: {
            emitFile: false,
          },
        },
        {
          loader: 'image-webpack-loader',
          query: imageWebpackQuery,
        },
      ],
    }],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),

    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
  },
};
