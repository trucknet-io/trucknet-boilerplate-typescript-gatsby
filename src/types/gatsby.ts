import { GatsbyImageProps } from "gatsby-image";

import { LocaleCode } from "@src/config/locales";

export type GatsbyQueriedImage = {
  childImageSharp: Pick<
    GatsbyImageProps,
    "fluid" | "fixed" | "resolutions" | "sizes"
  >;
};

export type PageContext = {
  slug: string;
  initialLocale: LocaleCode;
};

export type PageProps = {
  pageContext: PageContext;
  path: string;
};
