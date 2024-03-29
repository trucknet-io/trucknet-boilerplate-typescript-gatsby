const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const WebpackBar = require("webpackbar");
const ProgressPlugin = require("webpack").ProgressPlugin;

module.exports = ({ config, mode }) => {
  config.module.rules = config.module.rules.filter(
    (r) => r.test.toString() !== /\.md$/.toString(),
  );
  config.plugins = config.plugins.filter(
    (m) => m instanceof ProgressPlugin === false,
  ); // We are using Webpackbar, so no need in ProgressPlugin
  config.plugins.push(new HardSourceWebpackPlugin());
  config.plugins.push(new WebpackBar());

  config.resolve.plugins = [new TsconfigPathsPlugin()];
  config.resolve.extensions.unshift(".ts", ".tsx");

  const rules = [
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader"),
          options: {
            transpileOnly: true,
            esModuleInterop: true,
            resolveJsonModule: true,
            moduleResolution: "node",
            allowJs: true,
            useCache: true,
            jsx: "react",
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    },
    {
      test: /\.jsx?$/,
      include: /(node_modules\/gatsby\/cache-dir)|(src\/config\/)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-gatsby"],
        },
      },
    },
    {
      test: /\.md$/,
      exclude: /README\.md/,
      use: [
        {
          loader: require.resolve("html-loader"),
        },
        {
          loader: require.resolve("markdown-loader"),
        },
      ],
    },
    {
      test: /README\.md$/,
      use: [
        {
          loader: require.resolve("raw-loader"),
        },
      ],
    },
  ];

  config.module.rules = [...rules, ...config.module.rules];

  return config;
};
