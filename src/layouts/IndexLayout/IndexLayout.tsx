import { graphql, StaticQuery } from "gatsby";
import React from "react";

import { PageDataProvider } from "@src/contexts/PageDataContext";
import MainLayout from "@src/layouts/MainLayout";
import RootLayout from "@src/layouts/RootLayout";
import { PageProps } from "@src/types";

import Head from "./Head";

export type StaticQueryProps = {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
};

export type IndexLayoutProps = PageProps & {};

class IndexLayout extends React.PureComponent<IndexLayoutProps> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutIndexQuery {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `}
        render={this.renderStaticQuery}
      />
    );
  }

  private renderStaticQuery = (queryProps: StaticQueryProps) => {
    const { children, data, pageContext, path } = this.props;
    const { initialLocale } = pageContext;
    const { siteUrl } = queryProps.site.siteMetadata;

    return (
      <RootLayout initialLocale={initialLocale} path={path}>
        <Head initialLocale={initialLocale} siteUrl={siteUrl} />
        <PageDataProvider value={{ pageData: data }}>
          <MainLayout>{children}</MainLayout>
        </PageDataProvider>
      </RootLayout>
    );
  };
}
export default IndexLayout;
