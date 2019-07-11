import * as React from "react";

import locales, { supportedLocales } from "@src/config/locales";
import { findLocale } from "@src/utils/locale";

export interface WithLocale {
  locale: string;
  direction: "ltr" | "rtl";
  changeLocale(locale: string): void;
}

const { Provider, Consumer } = React.createContext<WithLocale>({
  locale: "en-GB",
  direction: "ltr",
  changeLocale: (locale: string) => locale,
});

export class LocaleContextProvider extends React.Component<{}, WithLocale> {
  constructor(props: {}) {
    super(props);
    this.state = {
      ...this.getStateForLocale("en-GB"),
      changeLocale: this.changeLocale,
    };
  }

  public componentDidMount() {
    // DOM API (such as `window`) must be accessed only after
    // component has been mounted
    const defaultLocale = this.getDefaultLocale();
    this.changeLocale(defaultLocale);
  }

  public render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }

  private getDefaultLocale = () => {
    if (window.navigator.language) {
      return findLocale(supportedLocales, window.navigator.language);
    }
    return Object.keys(locales)[0];
  };

  private changeBodyDir = (locale: string) =>
    (document.body.dir = this.getDirection(locale));

  private getDirection = (locale: string): "rtl" | "ltr" =>
    locale === "he" ? "rtl" : "ltr";

  private changeLocale = (locale: string) => {
    this.setState(this.getStateForLocale(locale));
    this.handleLocaleChanged(locale);
  };

  private getStateForLocale = (locale: string) => {
    const direction = this.getDirection(locale);
    return {
      locale,
      direction,
    };
  };

  private handleLocaleChanged = (locale: string) => {
    this.changeBodyDir(locale);
  };
}

export const withLocale = <
  P extends WithLocale,
  R = Pick<P, Exclude<keyof P, keyof WithLocale>>
>(
  Component: React.ComponentType<P>,
): React.SFC<R> => {
  return (props: R) => {
    return (
      // tslint:disable-next-line no-any
      <Consumer>{(ctx) => <Component {...ctx} {...(props as any)} />}</Consumer>
    );
  };
};
