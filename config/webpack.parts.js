/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */

exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      host: '127.0.0.1',
      port: process.env.PORT || 8080,
      static: './dist',
      liveReload: true,
      waitForBuild: true,
    }),
  ],
});

exports.page = ({ title, body }) => ({
  plugins: [new MiniHtmlWebpackPlugin({ context: { title, body } })],
});

exports.clean = () => ({
  output: {
    clean: true,
  },
});

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
});

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

exports.loadVue = () => ({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
});

exports.copy = (path) => ({
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path, to: path }],
    }),
  ],
});
