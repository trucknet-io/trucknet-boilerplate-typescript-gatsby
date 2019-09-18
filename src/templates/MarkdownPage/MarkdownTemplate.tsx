import { Container } from "@material-ui/core";
import React from "react";

import CmsContent from "@src/components/CmsContent";

export type MarkdownTemplateProps = {
  content: React.ReactNode;
  title: string;
};

class MarkdownTemplate extends React.PureComponent<MarkdownTemplateProps> {
  public render() {
    const { content, title } = this.props;
    return (
      <Container>
        <h1>{title}</h1>
        <CmsContent content={content} />
      </Container>
    );
  }
}

export default MarkdownTemplate;
