import { withStyles, WithStyles } from "@material-ui/core/styles";
import { graphql, StaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

import LocalizedLink from "@src/components/LocalizedLink";
import { GatsbyQueriedImage } from "@src/types";

import { styles } from "./TrucknetLogo.styles";

export type TrucknetLogoProps = WithStyles<typeof styles> & {
  className?: string;
};

class TrucknetLogo extends React.PureComponent<TrucknetLogoProps> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            trucknetLogo: file(
              relativePath: { eq: "images/trucknet_logo.jpeg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={this.renderImage}
      />
    );
  }

  private renderImage = (data: { trucknetLogo: GatsbyQueriedImage }) => {
    const { children, classes, className } = this.props;
    return (
      <LocalizedLink className={className} to="/">
        <GatsbyImage
          className={classes.image}
          fluid={data.trucknetLogo.childImageSharp.fluid}
        />
        {children}
      </LocalizedLink>
    );
  };
}

export default withStyles(styles)(TrucknetLogo);
