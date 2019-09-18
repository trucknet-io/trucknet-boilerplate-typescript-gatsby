import React from "react";

import { LocaleCode } from "@src/config/locales";
import { LocaleProvider } from "@src/contexts/LocaleProvider";

import MuiLocaleProvider from "./MuiLocaleProvider";

export type RootLayoutProps = {
  className?: string;
  initialLocale: LocaleCode;
  path: string;
};

class RootLayout extends React.PureComponent<RootLayoutProps> {
  public render() {
    const { children, initialLocale, path } = this.props;
    return (
      <LocaleProvider initialLocale={initialLocale} path={path}>
        <MuiLocaleProvider>{children}</MuiLocaleProvider>
      </LocaleProvider>
    );
  }
}

export default RootLayout;
