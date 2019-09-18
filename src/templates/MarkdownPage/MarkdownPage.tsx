import React from "react";

import IndexLayout from "@src/layouts/IndexLayout";
import { MdPageProps } from "@src/types";

import MarkdownTemplate from "./MarkdownTemplate";

export type MarkdownPageProps = MdPageProps<{
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
    };
  };
}>;

class MarkdownPage extends React.PureComponent<MarkdownPageProps> {
  public render() {
    const { markdownRemark } = this.props.data;
    return (
      <IndexLayout {...this.props}>
        <MarkdownTemplate
          content={markdownRemark.html}
          title={markdownRemark.frontmatter.title}
        />
      </IndexLayout>
    );
  }
}

export default MarkdownPage;
