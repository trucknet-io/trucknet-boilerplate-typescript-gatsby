import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { T } from "lioness";
import React from "react";

import ButtonLink from "@src/components/ButtonLink";
import LocaleSwitcher from "@src/components/LocaleSwitcher";
import TrucknetLogo from "@src/components/TrucknetLogo";

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
          <TrucknetLogo />
          <Typography className={classes.title} variant="h6" color="inherit">
            <T context="header.title" message="Some name" />
          </Typography>
          <ButtonLink to="/about" color="inherit">
            <T context="header.about" message="About" />
          </ButtonLink>
          <ButtonLink to="/svg-example" color="inherit">
            <T context="header.svg" message="SVG" />
          </ButtonLink>
          <ButtonLink to="/404" color="inherit">
            <T context="header.404" message="Not Found" />
          </ButtonLink>
          <LocaleSwitcher />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
