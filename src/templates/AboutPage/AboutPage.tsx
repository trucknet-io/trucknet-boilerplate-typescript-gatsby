import { graphql } from "gatsby";
import React from "react";

import IndexLayout from "@src/layouts/IndexLayout";

import AboutTemplate from "./AboutTemplate";

export type AboutPageProps = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
};

class AboutPage extends React.PureComponent<AboutPageProps> {
  public render() {
    const { data } = this.props;
    return (
      <IndexLayout>
        <AboutTemplate
          content={data.markdownRemark.html}
          title={data.markdownRemark.frontmatter.title}
        />
      </IndexLayout>
    );
  }
}

export default AboutPage;

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
