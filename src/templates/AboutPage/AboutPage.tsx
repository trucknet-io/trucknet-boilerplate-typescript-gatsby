import React from "react";

import IndexLayout from "@src/layouts/IndexLayout";
import { PageProps } from "@src/types";

import AboutTemplate from "./AboutTemplate";

export type AboutPageProps = PageProps & {
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
    const { data, ...rest } = this.props;
    return (
      <IndexLayout {...rest}>
        <AboutTemplate
          content={data.markdownRemark.html}
          title={data.markdownRemark.frontmatter.title}
        />
      </IndexLayout>
    );
  }
}

export default AboutPage;
