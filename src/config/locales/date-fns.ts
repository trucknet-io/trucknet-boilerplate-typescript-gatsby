import { LOCALE_TO_DATE_FNS, SUPPORTED_LOCALES } from "./locales";

export const DATE_FNS_LOCALES: {
  [key: string]: Locale;
} = SUPPORTED_LOCALES.reduce((res: { [key: string]: Locale }, locale) => {
  const dateFsnLocale = LOCALE_TO_DATE_FNS[locale] || locale;
  // tslint:disable-next-line: non-literal-require
  const module = require(`date-fns/locale/${dateFsnLocale}`);
  // tslint:disable-next-line: no-unsafe-any
  res[locale] = module.default || module;
  return res;
}, {});
