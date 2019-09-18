import { GatsbyImageProps } from "gatsby-image";

import { LocaleCode } from "@src/config/locales";

export type GatsbyQueriedImage = {
  childImageSharp: Pick<
    GatsbyImageProps,
    "fluid" | "fixed" | "resolutions" | "sizes"
  >;
};

export type GatsbyQueriedFiles<F> = {
  edges: { node: F }[];
};

export type GatsbyQueriedImagesList = GatsbyQueriedFiles<GatsbyQueriedImage>;

export type PageContext = {
  slug: string;
  initialLocale: LocaleCode;
  mdLocale?: LocaleCode;
};

export type MdPageContext = PageContext & {
  mdLocale: LocaleCode;
};

export type PageData<Images extends string = never> = {
  [key in Images]: GatsbyQueriedImage;
};

export type PageProps<
  C extends PageContext = PageContext,
  I extends string = never,
  D extends Object = {}
> = {
  data: PageData<I> & D;
  pageContext: C;
  path: string;
};

export type PageWithImagesProps<
  I extends string = never,
  D extends Object = {}
> = PageProps<PageContext, I, D>;

export type MdPageProps<
  D extends Object = {},
  C extends MdPageContext = MdPageContext
> = PageProps<C, never, D>;
