import React from "react";

export type LayoutMainProps = {
  className?: string;
};

export class LayoutMain extends React.PureComponent<LayoutMainProps> {
  public render() {
    const { children, className } = this.props;
    return <main className={className}>{children}</main>;
  }
}
