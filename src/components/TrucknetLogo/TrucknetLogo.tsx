import { graphql, Link, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

import { GatsbyQueriedImage } from "@src/types";

export type TrucknetLogoProps = {
  className?: string;
};

class TrucknetLogo extends React.PureComponent<TrucknetLogoProps> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            trucknetLogo: file(relativePath: { eq: "trucknet_logo.jpeg" }) {
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
    const { children, className } = this.props;
    return (
      <Link className={className} to="/">
        <Img fluid={data.trucknetLogo.childImageSharp.fluid} />
        {children}
      </Link>
    );
  };
}

export default TrucknetLogo;
