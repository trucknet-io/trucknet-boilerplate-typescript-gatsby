import Button, { ButtonProps } from "@material-ui/core/Button";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { GatsbyLinkProps, Link } from "gatsby";
import * as React from "react";

import { styles } from "./ButtonLink.styles";

export type ButtonLinkProps = WithStyles<typeof styles> &
  ButtonProps &
  GatsbyLinkProps<{}> & {
    partiallyActive?: boolean;
    replace?: boolean;
    to: string;
  };

const LinkComponent = React.forwardRef<
  HTMLAnchorElement,
  Omit<GatsbyLinkProps<{}>, "ref">
>(({ innerRef, ...props }, ref) => (
  <Link innerRef={ref as Function} {...props} />
));

class ButtonLink extends React.PureComponent<ButtonLinkProps> {
  public render() {
    const { classes, innerRef, ...props } = this.props;
    return (
      // @ts-ignore https://github.com/mui-org/material-ui/issues/15827#issuecomment-510422878
      <Button
        component={LinkComponent}
        activeClassName={classes.active}
        {...props}>
        {this.props.children}
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonLink);
