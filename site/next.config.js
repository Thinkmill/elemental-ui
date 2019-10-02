const withPreconstruct = require("@preconstruct/next");

module.exports = {
  webpack(webpackConfig, options) {
    webpackConfig.module.rules.push({
      test: /\.+(js|jsx|ts|tsx)$/,
      use: options.defaultLoaders.babel,
      exclude: modulePath => /node_modules/.test(modulePath)
    });
    return webpackConfig;
  }
};
