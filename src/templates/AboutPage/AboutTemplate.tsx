import React from "react";

import CmsContent from "@src/components/CmsContent";
import PageLayout from "@src/layouts/PageLayout";

export type AboutTemplateProps = {
  content: React.ReactNode;
  title: string;
};

class AboutTemplate extends React.PureComponent<AboutTemplateProps> {
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

export default AboutTemplate;
