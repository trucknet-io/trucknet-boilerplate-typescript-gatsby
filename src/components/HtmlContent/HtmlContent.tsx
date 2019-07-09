import React from "react";

export type HtmlContentProps = {
  className?: string;
  content: string;
};

class HtmlContent extends React.Component<HtmlContentProps> {
  public render() {
    const { className, content } = this.props;
    return (
      // tslint:disable react-no-dangerous-html
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
}

export default HtmlContent;
