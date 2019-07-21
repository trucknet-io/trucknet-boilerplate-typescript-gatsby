import { format, Locale } from "date-fns";
import * as locales from "date-fns/locale";
import React from "react";

import { WithLocale, withLocale } from "@src/contexts/LocaleContext";
import { getDateFnsLocale } from "@src/utils/locale";

// Use only locolized date and time formats
// https://date-fns.org/v2.0.0-alpha.27/docs/format
type allowedDateFormats =
  | "P"
  | "PP"
  | "PPP"
  | "PPPP"
  | "p"
  | "pp"
  | "ppp"
  | "pppp"
  | "Pp"
  | "PPpp"
  | "PPPppp"
  | "PPPPpppp";

export type FormattedDateProps = WithLocale & {
  date: Date;
  format: allowedDateFormats;
};

class FormattedDate extends React.Component<FormattedDateProps> {
  public render() {
    return this.formatDate();
  }
  private formatDate = () => {
    const { date, format: formatStr, locale } = this.props;
    return format(date, formatStr, {
      locale: (locales as { [locale: string]: Locale })[
        getDateFnsLocale(locale)
      ],
    });
  };
}

export default withLocale(FormattedDate);
