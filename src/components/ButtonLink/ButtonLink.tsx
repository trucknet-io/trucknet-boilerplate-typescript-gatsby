import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { GatsbyLinkProps, Link } from "gatsby";
import * as React from "react";

import { styles } from "./ButtonLink.styles";

export type ButtonLinkProps = WithStyles<typeof styles> &
  Omit<ButtonProps, "classes"> & {
    partiallyActive?: boolean;
    replace?: boolean;
    to: string;
  };

const createLink = (linkProps: GatsbyLinkProps<{}>) => ({
  innerRef,
  ...restProps
}: ButtonProps) => {
  // Remove `innerRef` from properties as the interface
  // is incompatible. The property `innerRef` should not be
  // needed as the `ListItem` component already provides that
  // feature with a different interface.
  // @ts-ignore
  return <Link {...linkProps} {...restProps} />;
};

class ButtonLink extends React.PureComponent<ButtonLinkProps> {
  public render() {
    const { classes, to, ...props } = this.props;
    return (
      <Button
        component={createLink({
          to,
          activeClassName: classes.active,
        })}
        {...props}>
        {this.props.children}
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonLink);
