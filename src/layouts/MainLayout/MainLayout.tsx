import { withStyles, WithStyles } from "@material-ui/core/styles";
import React from "react";

import Header from "@src/components/Header";

import { styles } from "./MainLayout.styles";

export type MainLayoutProps = WithStyles<typeof styles> & {};

class MainLayout extends React.PureComponent<MainLayoutProps> {
  public render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.pageContainer}>
        <Header />
        <main className={classes.main}>{children}</main>
      </div>
    );
  }
}

export default withStyles(styles)(MainLayout);
