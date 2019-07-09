import React from "react";

import CmsContent from "@src/components/CmsContent";
import Container from "@src/components/Container";
import Page from "@src/components/Page";

export type AboutTemplateProps = {
  content: React.ReactNode;
  title: string;
};

class AboutTemplate extends React.PureComponent<AboutTemplateProps> {
  public render() {
    const { content, title } = this.props;
    return (
      <Page>
        <Container>
          <h1>{title}</h1>
          <CmsContent content={content} />
        </Container>
      </Page>
    );
  }
}

export default AboutTemplate;
