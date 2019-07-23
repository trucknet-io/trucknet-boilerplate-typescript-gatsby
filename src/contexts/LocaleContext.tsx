import React from "react";

import {
  DEFAULT_LOCALE,
  LocaleCode,
  LocaleDirection,
  LOCALES_MAP,
  SUPPORTED_LOCALES,
} from "@src/config/locales";
import { findLocale, isSupportedLocaleInPath } from "@src/utils/locale";

export interface WithLocale {
  locale: LocaleCode;
  direction: LocaleDirection;
  changeLocale(locale: LocaleCode): void;
}

export type LocaleProps = {
  path: string;
  initialLocale: LocaleCode;
  changeBodyDir?(dir: LocaleDirection): void;
};

const { Provider, Consumer } = React.createContext<WithLocale>({
  locale: DEFAULT_LOCALE.code,
  direction: DEFAULT_LOCALE.direction || "ltr",
  changeLocale: (locale: LocaleCode) => locale,
});

export { Provider as RawLocaleProvider };

export class LocaleContextProvider extends React.Component<
  LocaleProps,
  WithLocale
> {
  constructor(props: LocaleProps) {
    super(props);

    if (!props.initialLocale) {
      return;
    }

    this.state = {
      ...this.getStateForLocale(props.initialLocale),
      changeLocale: this.changeLocale,
    };
  }

  public componentDidMount() {
    const { initialLocale, path } = this.props;
    if (!initialLocale && !isSupportedLocaleInPath(path)) {
      const defaultLocale = this.getDefaultLocaleCode();
      // In this case it's better to redirect using native `location.replace`
      // method because if you use Gatsby's `navigate` function the following
      // happens: the first render of "tr.io/about" will result in null
      // because it lacks initialLocale, so everything inside LocaleContext
      // won't be rendered including f.e. ReactHelmet with your font link,
      // calling `navigate` won't reload the page, it will just replace changed
      // DOM nodes, so as a result your font will be loaded after new nodes are
      // inserted - so you will experience font changing blink
      window.location.replace(`/${defaultLocale}${path}`);
    }
    this.changeBodyDir(initialLocale);
  }

  public render() {
    const { children, initialLocale, path } = this.props;
    if (!initialLocale && !isSupportedLocaleInPath(path)) {
      return null;
    }
    return <Provider value={this.state}>{children}</Provider>;
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

  private changeBodyDir = (localeCode: LocaleCode) => {
    const direction = this.getDirection(localeCode);
    const { changeBodyDir } = this.props;
    if (changeBodyDir) {
      changeBodyDir(direction);
      return;
    }

    document.body.dir = direction;
  };

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
