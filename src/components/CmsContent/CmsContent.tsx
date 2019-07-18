import React from "react";

import HtmlContent from "@src/components/HtmlContent";

export type CmsContentProps = {
  className?: string;
  content: React.ReactNode;
};

class CmsContent extends React.Component<CmsContentProps> {
  public render() {
    const { className, content } = this.props;

    if (typeof content === "string") {
      return <HtmlContent className={className} content={content} />;
    }

    return <div className={className}>{content}</div>;
  }
}

export default CmsContent;
