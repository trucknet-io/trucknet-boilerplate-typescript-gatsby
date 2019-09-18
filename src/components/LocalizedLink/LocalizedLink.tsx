import { GatsbyLinkProps, Link } from "gatsby";
import React from "react";
import { withLocale, WithLocale } from "react-targem";

export type LocalizedLinkProps = Omit<GatsbyLinkProps<{}>, "ref"> & {};

class LocalizedLink extends React.PureComponent<
  WithLocale & LocalizedLinkProps
> {
  public render() {
    const {
      direction,
      locale,
      changeLocale,
      to,
      t,
      tn,
      tf,
      tnf,
      ...rest
    } = this.props;
    return <Link to={`/${locale}${to}`} {...rest} />;
  }
}

export default withLocale(LocalizedLink);
