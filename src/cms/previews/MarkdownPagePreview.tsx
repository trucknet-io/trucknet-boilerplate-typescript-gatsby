import { PreviewTemplateProps } from "netlify-cms-app";
import React from "react";

import { MarkdownTemplate } from "@src/templates/MarkdownPage";

class MarkdownPagePreview extends React.Component<PreviewTemplateProps> {
  public render() {
    const { entry, widgetFor } = this.props;
    return (
      <MarkdownTemplate
        title={entry.getIn(["data", "title"]) as string}
        content={widgetFor("body")}
      />
    );
  }
}

export default MarkdownPagePreview;
