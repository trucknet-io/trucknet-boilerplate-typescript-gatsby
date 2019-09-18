import { format } from "date-fns";
import React from "react";
import { withLocale, WithLocale } from "react-targem";

import { DATE_FNS_LOCALES } from "@src/config/locales";

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

export type FormattedDateProps = {
  date: Date;
  format: allowedDateFormats;
};

class FormattedDate extends React.PureComponent<
  WithLocale & FormattedDateProps
> {
  public render() {
    const { date, format: formatStr, locale } = this.props;
    return format(date, formatStr, {
      locale: DATE_FNS_LOCALES[locale],
    });
  }
}

export default withLocale(FormattedDate);
