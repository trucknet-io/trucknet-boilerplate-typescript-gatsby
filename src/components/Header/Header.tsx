import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { T } from "lioness";
import * as React from "react";

import ButtonLink from "@src/components/ButtonLink";
import LocaleSwitcher from "@src/components/LocaleSwitcher";

const styles = {
  title: {
    margin: "0 15px",
    flexGrow: 1,
  },
};

export type HeaderProps = WithStyles<typeof styles> & {};

class Header extends React.PureComponent<HeaderProps> {
  public render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            <T context="header.title" message="Some name" />
          </Typography>
          <ButtonLink to="/" color="inherit">
            Hello
          </ButtonLink>
          <ButtonLink to="/clock" color="inherit">
            Clock
          </ButtonLink>
          <ButtonLink to="/svg" color="inherit">
            SVG
          </ButtonLink>
          <LocaleSwitcher />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
