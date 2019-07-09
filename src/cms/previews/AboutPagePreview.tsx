import { PreviewTemplateProps } from "netlify-cms-app";
import React from "react";

import { AboutTemplate } from "@src/templates/AboutPage";

class AboutPagePreview extends React.Component<PreviewTemplateProps> {
  public render() {
    const { entry, widgetFor } = this.props;
    return (
      <AboutTemplate
        title={entry.getIn(["data", "title"]) as string}
        content={widgetFor("content")}
      />
    );
  }
}

export default AboutPagePreview;
