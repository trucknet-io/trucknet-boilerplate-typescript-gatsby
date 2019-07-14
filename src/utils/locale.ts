import { LocaleCode } from "@src/config/locales";

export const findLocale = <L extends string = LocaleCode>(
  locales: L[],
  localeCode: L,
): L => {
  if (locales.includes(localeCode)) {
    return localeCode;
  }
  for (const localeToMatch of locales) {
    if (localeToMatch.includes(localeCode.split("-")[0])) {
      console.warn(
        `Locale ${localeCode} was not found. Using ${localeToMatch} as a fallback`,
      );
      return localeToMatch;
    }
  }
  throw new LocaleNotSupportedError(`Locale ${localeCode} was not found`);
};

export const getDateFnsLocale = (locale: string) => {
  return locale.replace("-", "");
};

export class LocaleNotSupportedError extends Error {}

export const changeLocaleInPath = <L extends string = LocaleCode>(
  path: string,
  newLocale: L,
): string => {
  return path.replace(/^\/(.+?)\//, `/${newLocale}/`);
};
