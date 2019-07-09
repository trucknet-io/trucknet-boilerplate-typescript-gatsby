import React from "react";

import { LocaleContextProvider } from "@src/contexts/LocaleContext";
import MuiLocaleProvider from "./MuiLocaleProvider";

export type RootLayoutProps = {
  className?: string;
};

class RootLayout extends React.PureComponent<RootLayoutProps> {
  public render() {
    const { children } = this.props;
    return (
      <LocaleContextProvider>
        <MuiLocaleProvider>{children}</MuiLocaleProvider>
      </LocaleContextProvider>
    );
  }
}

export default RootLayout;
