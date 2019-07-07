import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import { Header } from "@src/components/Header";
import { LayoutMain } from "@src/layouts/Main";
import { LayoutRoot } from "@src/layouts/Root";

export type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

export class LayoutIndex extends React.PureComponent {
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
    const { children } = this.props;
    return (
      <LayoutRoot>
        <Helmet
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
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    );
  };
}
