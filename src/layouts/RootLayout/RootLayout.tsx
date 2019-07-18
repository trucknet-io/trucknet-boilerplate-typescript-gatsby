import React from "react";

import { LocaleCode } from "@src/config/locales";
import { LocaleContextProvider } from "@src/contexts/LocaleContext";

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
      <LocaleContextProvider initialLocale={initialLocale} path={path}>
        <MuiLocaleProvider>{children}</MuiLocaleProvider>
      </LocaleContextProvider>
    );
  }
}

export default RootLayout;
