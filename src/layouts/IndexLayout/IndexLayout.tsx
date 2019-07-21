import { graphql, StaticQuery } from "gatsby";
import React from "react";
import ReactHelmet from "react-helmet";

import Header from "@src/components/Header";
import MainLayout from "@src/layouts/MainLayout";
import RootLayout from "@src/layouts/RootLayout";
import { PageProps } from "@src/types";

export type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
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
                title
                description
              }
            }
          }
        `}
        render={this.renderStaticQuery}
      />
    );
  }

  private renderStaticQuery = (data: StaticQueryProps) => {
    const { children, pageContext, path } = this.props;
    return (
      <RootLayout initialLocale={pageContext.initialLocale} path={path}>
        <ReactHelmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            {
              name: "keywords",
              content: "gatsbyjs, gatsby, javascript, sample, something",
            },
          ]}
        />
        <Header />
        <MainLayout>{children}</MainLayout>
      </RootLayout>
    );
  };
}
export default IndexLayout;
