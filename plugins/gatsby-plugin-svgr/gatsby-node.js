exports.onCreateWebpackConfig = (
  { stage, actions, getConfig, rules },
  { rule: ruleProps = {} },
) => {
  const { include, exclude } = ruleProps;
  const isActive = [
    "develop",
    "develop-html",
    "build-html",
    "build-javascript",
  ].includes(stage);
  if (!isActive) {
    return;
  }

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: {
                    removeViewBox: false,
                  },
                },
              },
            },
          ],
        },
      ],
    },
  });
  const config = getConfig();
  const imgsRule = rules.images();

  const newUrlLoaderRule =
    include || exclude
      ? {
          ...imgsRule,
          include: exclude,
          exclude: include,
        }
      : {
          ...imgsRule,
          test: new RegExp(
            imgsRule.test
              .toString()
              .replace("svg|", "")
              .slice(1, -1),
          ),
        };

  config.module.rules = [
    // Remove the base url-loader images rule entirely
    ...config.module.rules.filter((rule) => {
      if (rule.test) {
        return rule.test.toString() !== imgsRule.test.toString();
      }
      return true;
    }),
    // Put it back without SVG loading
    newUrlLoaderRule,
  ];
  actions.replaceWebpackConfig(config);
};
