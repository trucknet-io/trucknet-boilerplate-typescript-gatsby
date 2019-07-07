import { GatsbyImageProps } from "gatsby-image";

export type GatsbyQueriedImage = {
  childImageSharp: Pick<
    GatsbyImageProps,
    "fluid" | "fixed" | "resolutions" | "sizes"
  >;
};
