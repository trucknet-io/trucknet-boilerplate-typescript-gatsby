// tslint:disable-next-line: no-import-side-effect
import "@testing-library/jest-dom/extend-expect";
import { cleanup, getNodeText, render } from "@testing-library/react";
import { advanceBy, clear } from "jest-date-mock";
import React from "react";

import Clock from "./Clock";

afterEach(() => {
  cleanup();
  clear();
});
beforeEach(jest.useFakeTimers);

const clockTestId = "clock-value";
it("should rerender each second", async () => {
  const { getByTestId } = render(<Clock />);
  const clock = getByTestId(clockTestId);
  const result = getNodeText(clock);
  advanceBy(1000);
  jest.runOnlyPendingTimers();
  expect(getNodeText(clock)).not.toBe(result);
});
