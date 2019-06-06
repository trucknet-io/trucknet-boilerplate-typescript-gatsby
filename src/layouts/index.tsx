import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";

import Header from "../components/Header";
import LayoutMain from "../components/LayoutMain";
import LayoutRoot from "../components/LayoutRoot";

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  };
}

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: data.site.siteMetadata.description },
            { name: "keywords", content: "gatsbyjs, gatsby, javascript, sample, something" }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
