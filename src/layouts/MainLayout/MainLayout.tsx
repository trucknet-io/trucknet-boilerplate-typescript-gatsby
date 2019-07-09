import React from "react";

export type MainLayoutProps = {
  className?: string;
};

class MainLayout extends React.PureComponent<MainLayoutProps> {
  public render() {
    const { children, className } = this.props;
    return <main className={className}>{children}</main>;
  }
}

export default MainLayout;
