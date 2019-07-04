import React from "react";

export type LayoutRootProps = {
  className?: string;
};

export class LayoutRoot extends React.PureComponent<LayoutRootProps> {
  public render() {
    const { children, className } = this.props;
    return <div className={className}>{children}</div>;
  }
}
