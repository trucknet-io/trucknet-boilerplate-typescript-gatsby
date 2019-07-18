import React from "react";

import IndexLayout from "@src/layouts/IndexLayout";
import { PageProps } from "@src/types";

import MarkdownTemplate from "./MarkdownTemplate";

export type MarkdownPageProps = PageProps & {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
};

class MarkdownPage extends React.PureComponent<MarkdownPageProps> {
  public render() {
    const { data, ...rest } = this.props;
    return (
      <IndexLayout {...rest}>
        <MarkdownTemplate
          content={data.markdownRemark.html}
          title={data.markdownRemark.frontmatter.title}
        />
      </IndexLayout>
    );
  }
}

export default MarkdownPage;
