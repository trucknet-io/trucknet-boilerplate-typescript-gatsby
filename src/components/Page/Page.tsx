import React from "react";

export type PageProps = {
  className?: string;
};

export class Page extends React.PureComponent<PageProps> {
  public render() {
    const { children, className } = this.props;
    return <div className={className}>{children}</div>;
  }
}
