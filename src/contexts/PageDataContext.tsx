import React from "react";

import { PageProps } from "@src/types";

import { ContextHOC, createContextHOC } from "./createContextHOC";

export type WithPageData<PP extends PageProps> = { pageData: PP["data"] };

const { Provider, Consumer } = React.createContext<WithPageData<PageProps>>({
  pageData: {},
});

export { Provider as PageDataProvider };

export const withPageData = <PP extends PageProps, P extends WithPageData<PP>>(
  Component: React.ComponentType<P>,
) => (createContextHOC(Consumer) as ContextHOC<P>)(Component);
