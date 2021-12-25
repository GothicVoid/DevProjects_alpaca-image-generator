const { mode } = require('webpack-nano/argv');
const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');

const commonConfig = merge([
  { entry: ['./src'] },
  parts.page({
    title: 'Alpaca Image Generator',
    body: '<div id="app"></div>',
  }),
  parts.clean(),
  parts.loadCSS(),
  parts.loadVue(),
]);

const productionConfig = merge([parts.attachRevision()]);

const developmentConfig = merge([
  { entry: ['webpack-plugin-serve/client'] },
  parts.devServer(),
]);

const getConfig = (modeToUse) => {
  switch (modeToUse) {
    case 'production':
      return merge(commonConfig, productionConfig, { mode: modeToUse });
    case 'development':
      return merge(commonConfig, developmentConfig, { mode: modeToUse });
    default:
      throw new Error(`Trying to use an unknown mode, ${modeToUse}`);
  }
};

module.exports = getConfig(mode);
