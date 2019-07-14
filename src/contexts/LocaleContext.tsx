import { navigate } from "gatsby";
import * as React from "react";

import {
  DEFAULT_LOCALE,
  LocaleCode,
  LocaleDirection,
  LOCALES_MAP,
  SUPPORTED_LOCALES,
} from "@src/config/locales";
import { findLocale } from "@src/utils/locale";

export interface WithLocale {
  locale: LocaleCode;
  direction: LocaleDirection;
  changeLocale(locale: LocaleCode): void;
}

export type LocaleProps = {
  path: string;
  initialLocale: LocaleCode;
};

const { Provider, Consumer } = React.createContext<WithLocale>({
  locale: DEFAULT_LOCALE.code,
  direction: DEFAULT_LOCALE.direction || "ltr",
  changeLocale: (locale: LocaleCode) => locale,
});

export class LocaleContextProvider extends React.Component<
  LocaleProps,
  WithLocale
> {
  constructor(props: LocaleProps) {
    super(props);

    if (!props.initialLocale) {
      const defaultLocale = this.getDefaultLocaleCode();
      navigate(`/${defaultLocale}${props.path}`, { replace: true });
      return;
    }

    this.state = {
      ...this.getStateForLocale(props.initialLocale),
      changeLocale: this.changeLocale,
    };
  }

  public render() {
    if (!this.props.initialLocale) {
      return null;
    }
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }

  private getDefaultLocaleCode = (): LocaleCode => {
    if (window.navigator.language) {
      try {
        return findLocale(SUPPORTED_LOCALES, window.navigator
          .language as LocaleCode);
      } catch (_) {
        return DEFAULT_LOCALE.code;
      }
    }
    return DEFAULT_LOCALE.code;
  };

  private changeBodyDir = (localeCode: LocaleCode) =>
    (document.body.dir = this.getDirection(localeCode));

  private getDirection = (localeCode: LocaleCode): LocaleDirection => {
    const locale = LOCALES_MAP[localeCode] || DEFAULT_LOCALE;
    return locale.direction || "ltr";
  };

  private changeLocale = (localeCode: LocaleCode) => {
    if (localeCode === this.state.locale) {
      return;
    }
    this.setState(this.getStateForLocale(localeCode));
    this.handleLocaleChanged(localeCode);
  };

  private getStateForLocale = (locale: LocaleCode) => {
    const direction = this.getDirection(locale);
    return {
      locale,
      direction,
    };
  };

  private handleLocaleChanged = (localeCode: LocaleCode) => {
    this.changeBodyDir(localeCode);
  };
}

export const withLocale = <P extends WithLocale, R = Omit<P, keyof WithLocale>>(
  Component: React.ComponentType<P>,
): React.SFC<R> => {
  return (props: R) => {
    return (
      // tslint:disable-next-line no-any
      <Consumer>{(ctx) => <Component {...ctx} {...(props as any)} />}</Consumer>
    );
  };
};
