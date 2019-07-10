const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const errorReportingPlugin = require("./errorReporting/webpack");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    entry: {
      errorReporting: "./errorReporting/frontend.js",
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        // null for not required variables
        // undefined - for required
        SENTRY_DSN: null,
        SENTRY_ENV: null,
      }),
      errorReportingPlugin,
    ],
  });
};
