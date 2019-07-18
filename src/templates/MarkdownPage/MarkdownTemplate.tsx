import React from "react";

import CmsContent from "@src/components/CmsContent";
import PageLayout from "@src/layouts/PageLayout";

export type MarkdownTemplateProps = {
  content: React.ReactNode;
  title: string;
};

class MarkdownTemplate extends React.PureComponent<MarkdownTemplateProps> {
  public render() {
    const { content, title } = this.props;
    return (
      <PageLayout>
        <h1>{title}</h1>
        <CmsContent content={content} />
      </PageLayout>
    );
  }
}

export default MarkdownTemplate;
