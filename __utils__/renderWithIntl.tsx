import { render } from "@testing-library/react";
import React from "react";

import { DEFAULT_LOCALE } from "@src/config/locales";
import { LocaleProvider } from "@src/contexts/LocaleProvider";

const renderWithIntl = (
  ui: React.ReactElement,
  { locale = DEFAULT_LOCALE.code } = {},
) => {
  return {
    ...render(
      <LocaleProvider path="/foo" initialLocale={locale}>
        {ui}
      </LocaleProvider>,
    ),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

export default renderWithIntl;
