const path = require("path");
const SentryCliPlugin = require("@sentry/webpack-plugin");
const config = require("./config");

const plugin = new SentryCliPlugin({
  include: ".",
  ignore: ["node_modules", "webpack.config.js"],
  release: config.release,
  debug: false,
  dryRun: config.dryRun,
  configFile: path.resolve(__dirname, ".sentryclirc"),
});

module.exports = plugin;
