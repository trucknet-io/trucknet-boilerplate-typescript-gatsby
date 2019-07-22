import { LocaleCode, SUPPORTED_LOCALES } from "@src/config/locales";

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
  return path.replace(/^\/(.+?)(\/|$)/, `/${newLocale}$2`);
};

export const getLocaleFromPath = (
  path: string,
  supportedLocales = SUPPORTED_LOCALES,
): string | void => {
  const match = path.match(new RegExp(`^\/(${supportedLocales.join("|")})\/`));
  if (!match) {
    return;
  }
  return match[1];
};

export const isSupportedLocaleInPath = (
  path: string,
  supportedLocales = SUPPORTED_LOCALES,
): boolean => {
  return !!getLocaleFromPath(path, supportedLocales);
};
