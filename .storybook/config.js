import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import "@storybook/addon-console";
import { addParameters } from "@storybook/react";
import { withI18n } from "storybook-addon-i18n";

import { SUPPORTED_LOCALES } from "@src/config/locales";
import StorybookLocaleProvider from "@src/layouts/RootLayout/StorybookLocaleProvider";
import messages from "@src/i18n/translations.json";

addDecorator(
  withInfo({
    inline: false,
  }),
);

addDecorator(withA11y);
addDecorator(withI18n);

addParameters({
  backgrounds: [
    { name: "white", value: "#fff", default: true },
    { name: "Lime Green", value: "#2CCE62" },
    { name: "Tarawera", value: "#29464D" },
    { name: "Elephant", value: "#1F3239" },
    { name: "Nero", value: "#212121" },
    { name: "Night Rider", value: "#303030" },
    { name: "Mortar", value: "#535353" },
    { name: "Grey", value: "#808080" },
    { name: "Very Light Grey", value: "#C7C7C7" },
    { name: "White Smoke", value: "#EBEBEB" },
    { name: "Dodger Blue", value: "#2979FF" },
    { name: "Lightning Yellow", value: "#F9A825" },
    { name: "Torch Red", value: "#FF1744" },
  ],
  i18n: {
    provider: StorybookLocaleProvider,
    providerProps: {
      messages,
    },
    supportedLocales: SUPPORTED_LOCALES,
  },
});

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

configure(loadStories, module);
