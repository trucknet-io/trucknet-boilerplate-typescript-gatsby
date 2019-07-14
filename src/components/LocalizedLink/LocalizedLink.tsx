import { GatsbyLinkProps, Link } from "gatsby";
import React from "react";

import { withLocale, WithLocale } from "@src/contexts/LocaleContext";

export type LocalizedLinkProps = Omit<GatsbyLinkProps<{}>, "ref"> & {};

class LocalizedLink extends React.PureComponent<
  WithLocale & LocalizedLinkProps
> {
  public render() {
    const { direction, locale, changeLocale, to, ...rest } = this.props;
    return <Link to={`/${locale}${to}`} {...rest} />;
  }
}

export default withLocale(LocalizedLink);
