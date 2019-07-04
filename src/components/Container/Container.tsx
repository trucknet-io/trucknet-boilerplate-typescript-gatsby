import React from "react";

export type ContainerProps = {
  className?: string;
};

export class Container extends React.PureComponent<ContainerProps> {
  public render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}
