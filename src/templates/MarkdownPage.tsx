import { graphql } from "gatsby";
import React from "react";

import Container from "@src/components/Container";
import Page from "@src/components/Page";
import IndexLayout from "@src/layouts/IndexLayout";

export type MarkdownPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
      };
    };
  };
};

class MarkdownPage extends React.PureComponent<MarkdownPageProps> {
  public render() {
    const { data } = this.props;
    return (
      <IndexLayout>
        <Page>
          <Container>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            {/*tslint:disable-next-line: react-no-dangerous-html*/}
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </Container>
        </Page>
      </IndexLayout>
    );
  }
}

export default MarkdownPage;

export const query = graphql`
  query MarkdownPageQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
