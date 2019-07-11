import { withStyles, WithStyles } from "@material-ui/core/styles";
import React from "react";

import { styles } from "./MainLayout.styles";

export type MainLayoutProps = WithStyles<typeof styles> & {};

class MainLayout extends React.PureComponent<MainLayoutProps> {
  public render() {
    const { children, classes } = this.props;
    return <main className={classes.main}>{children}</main>;
  }
}

export default withStyles(styles)(MainLayout);
