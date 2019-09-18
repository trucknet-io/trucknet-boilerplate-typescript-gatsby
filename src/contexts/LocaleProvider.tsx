import React from "react";
import { TargemStatefulProvider, Utils } from "react-targem";

import {
  DEFAULT_LOCALE,
  LocaleCode,
  LocaleDirection,
  SUPPORTED_LOCALES,
} from "@src/config/locales";
import translationsJson from "@src/i18n/translations.json";
import { isSupportedLocaleInPath } from "@src/utils/locale";

export type LocaleProps = {
  path: string;
  initialLocale: LocaleCode;
  setBodyDir?(dir: LocaleDirection): void;
};

export class LocaleProvider extends React.Component<LocaleProps> {
  public componentDidMount() {
    const { initialLocale, path } = this.props;
    if (!initialLocale && !isSupportedLocaleInPath(path)) {
      const defaultLocale = Utils.getBrowserLocale(
        SUPPORTED_LOCALES,
        DEFAULT_LOCALE.code,
      );
      window.location.replace(
        `/${defaultLocale}${path}${window.location.search}`,
      );
    }
  }

  public render() {
    const { children, initialLocale, path, setBodyDir } = this.props;
    if (!initialLocale && !isSupportedLocaleInPath(path)) {
      return null;
    }
    return (
      <TargemStatefulProvider
        detectLocale={false}
        defaultLocale={initialLocale}
        translations={translationsJson}
        setBodyDir={setBodyDir}>
        {children}
      </TargemStatefulProvider>
    );
  }
}
