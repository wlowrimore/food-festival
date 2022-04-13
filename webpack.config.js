const webpack = require('webpack');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const path = require('path');


const config = {
  entry: {
    app: './assets/js/script.js',
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
            name(file) {
              return '[path][name].[ext]'
            },
            publicPath: function (url) {
              return url.replace('../', '/assets/');
            }
          }
        },
        {
          loader: 'image-webpack-loader'
        }
      ]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    })
  ],
  mode: 'development'
};

module.exports = config;