const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const errorReportingPlugin = require("./errorReporting/webpack");
const {
  SUPPORTED_LOCALES,
  LOCALE_TO_DATE_FNS,
} = require("../../src/config/locales/locales");

const dateFnsLocales = SUPPORTED_LOCALES.map((l) => LOCALE_TO_DATE_FNS[l] || l);
const LANGUAGES_REGEX = new RegExp(
  `(${dateFnsLocales.join("|")})($|\.js$|\/index\.js$)`,
);

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    entry: {
      errorReporting: "./errorReporting/frontend.js",
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /date-fns[/\\]locale$/,
        LANGUAGES_REGEX,
      ),
      new webpack.EnvironmentPlugin({
        // null for not required variables
        // undefined - for required
        SENTRY_DSN: null,
        SENTRY_ENV: null,
      }),
      errorReportingPlugin,
    ],
  });

  if (stage === "develop" || stage === "build-javascript") {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          openAnalyzer: false,
          analyzerMode: stage == "develop" ? "server" : "static",
          analyzerPort: 8888,
        }),
      ],
    });
  }
};
