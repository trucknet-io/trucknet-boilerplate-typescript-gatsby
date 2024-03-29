import { render } from "@testing-library/react";
import { LionessProvider } from "lioness";
import React from "react";

import { DEFAULT_LOCALE } from "@src/config/locales";
import translationsJson from "@src/i18n/translations.json";

const renderWithIntl = (
  ui: React.ReactElement,
  { locale = DEFAULT_LOCALE.code } = {},
) => {
  return {
    ...render(
      <LionessProvider locale={locale} messages={translationsJson}>
        {ui}
      </LionessProvider>,
    ),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

export default renderWithIntl;
